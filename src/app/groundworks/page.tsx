import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { GROUNDWORK_SERVICES } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Groundworks, Driveways, Fencing, Dig Offs & Drainage",
  description:
    "LUNA SEN-Scapes groundworks across Wirral, Liverpool and Cheshire — driveways, fencing, patios, landscaping, levelling, dig offs, drainage, foundations and inclusive surfacing.",
  path: "/groundworks",
  keywords: [
    "driveways Wirral",
    "fencing Liverpool",
    "dig offs Wirral",
    "patios Cheshire",
    "SEN playground surfacing",
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
        title="Groundworks for homes, schools and SEN spaces."
        lines={[
          "The ground has to be right or the finish will fail.",
          "We still do driveways, fencing, patios, landscaping, drainage and dig offs.",
          "We also build SEN playgrounds and sensory gardens on that same ground.",
          "One LUNA SEN-Scapes crew.",
          "One brief.",
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {GROUNDWORK_SERVICES.map((service) => (
            <article key={service.slug} className="rounded-2xl border bg-white p-6">
              <h2 className="text-xl font-black">{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-black p-8 text-white md:p-10">
          <h2 className="text-2xl font-black">Send the site, not a shopping list.</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">Photos and a postcode are enough to start.</p>
          <p className="mx-auto mt-2 max-w-xl text-white/70">Driveway or SEN yard — tell us what you need.</p>
          <Link href="/enquire" className="mt-6 inline-flex rounded-xl bg-luna-pink px-5 py-3 font-bold">
            Talk to us about the ground
          </Link>
        </div>
      </section>
    </main>
  );
}
