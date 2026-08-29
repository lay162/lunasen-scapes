import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SPACES } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "SEN Playgrounds, Sensory Rooms & Safe Spaces",
  description:
    "LUNA SEN Scapes builds SEN playgrounds, sensory rooms, sensory gardens, school yards and adult SEN spaces across Wirral, Liverpool, Cheshire and the North West.",
  path: "/spaces",
  keywords: ["SEN playground", "sensory room", "sensory garden", "safe space SEN"],
});

export default function SpacesPage() {
  return (
    <main id="main-content">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Spaces", path: "/spaces" }])} />
      <PageHero
        eyebrow="Spaces"
        title="Every brief starts with how people use the ground."
        description="Play, regulate, hide, arrive, learn outdoors. We design SEN environments for children and adults, then build them with proper levelling, dig offs and drainage."
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {SPACES.map((space) => (
            <article key={space.slug} className="flex flex-col rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-luna-pink">{space.eyebrow}</p>
              <h2 className="mt-2 text-2xl font-black">{space.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{space.summary}</p>
              <p className="mt-3 text-sm">
                <span className="font-semibold">For: </span>
                {space.audience}
              </p>
              <Link
                href={`/spaces/${space.slug}`}
                className="mt-5 inline-flex items-center gap-1 font-semibold text-luna-pink"
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
