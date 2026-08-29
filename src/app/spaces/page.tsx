import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SPACES } from "@/lib/content";
import { lunaLinkClass } from "@/lib/luna-tone";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Disabled Garden Makeovers, Playgrounds & Safe Play Areas UK",
  description:
    "LUNA SEN-Scapes builds disabled garden makeovers, inclusive playgrounds, safe play areas, sensory gardens and home sensory rooms for families across the United Kingdom.",
  path: "/spaces",
  keywords: [
    "disabled garden makeover UK",
    "inclusive playground",
    "safe play area",
    "sensory garden UK",
    "sensory room UK",
  ],
});

export default function SpacesPage() {
  return (
    <main id="main-content" className="text-center">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Spaces", path: "/spaces" }])} />
      <PageHero
        eyebrow="Spaces"
        title="Every brief starts with how people use the ground."
        lines={[
          "Play.",
          "Move.",
          "Regulate.",
          "Sit outside.",
          "We design gardens and play areas for disabled people and SEN families, then build them with proper levelling, dig offs and drainage.",
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {SPACES.map((space, i) => (
            <article key={space.slug} className="flex flex-col rounded-2xl border bg-white p-6 text-center shadow-sm">
              <p className={`text-[11px] font-bold uppercase tracking-[0.2em] ${lunaLinkClass(i)}`}>{space.eyebrow}</p>
              <h2 className="mt-2 text-2xl font-black">{space.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{space.summary}</p>
              <p className="mt-3 text-sm">
                <span className="font-semibold">For: </span>
                {space.audience}
              </p>
              <Link
                href={`/spaces/${space.slug}`}
                className={`mt-5 inline-flex items-center justify-center gap-1 font-semibold ${lunaLinkClass(i)}`}
              >
                {space.title} in detail <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
