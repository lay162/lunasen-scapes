import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { GROUNDWORK_SERVICES } from "@/lib/content";
import { lunaLinkClass } from "@/lib/luna-tone";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Groundworks, Driveways, Fencing, Dig Offs & Drainage",
  description:
    "LUNA SEN-Scapes groundworks across the UK — driveways, fencing, patios, landscaping, levelling, dig offs, drainage, foundations and inclusive surfacing.",
  path: "/groundworks",
  keywords: [
    "driveways UK",
    "fencing UK",
    "disabled garden drainage",
    "accessible patio UK",
    "inclusive playground surfacing",
  ],
});

export default function GroundworksPage() {
  return (
    <main id="main-content" className="text-center">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Groundworks", path: "/groundworks" },
        ])}
      />
      <PageHero
        eyebrow="On the tools"
        title="Groundworks for family homes and accessible gardens."
        lines={[
          "The ground has to be right or the finish will fail.",
          "We still do driveways, fencing, patios, landscaping, drainage and dig offs.",
          "We also build playgrounds, safe play areas and disabled garden makeovers on that same ground.",
          "One LUNA SEN-Scapes crew.",
          "One brief.",
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {GROUNDWORK_SERVICES.map((service, i) => (
            <article key={service.slug} className="rounded-2xl border bg-white p-6">
              <h2 className={`text-xl font-black ${lunaLinkClass(i)}`}>{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-black p-8 text-white md:p-10">
          <h2 className="text-2xl font-black">Send the site, not a shopping list.</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">Photos and a postcode are enough to start.</p>
          <p className="mx-auto mt-2 max-w-xl text-white/70">Driveway or garden — tell us what you need.</p>
          <Link href="/enquire" className="luna-btn luna-btn-gradient mt-6 h-12 px-5">
            Talk to us about the ground
          </Link>
        </div>
      </section>
    </main>
  );
}
