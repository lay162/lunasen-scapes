import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { GROUNDWORK_SERVICES } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Levelling, Dig Offs, Drainage & Inclusive Surfacing",
  description:
    "SEN groundworks across Wirral, Liverpool and Cheshire — levelling, dig offs, excavations, drainage, foundations and inclusive surfacing by LUNA SEN Scapes.",
  path: "/groundworks",
  keywords: [
    "dig offs Wirral",
    "SEN playground surfacing",
    "levelling Liverpool",
    "school yard drainage Cheshire",
  ],
});

export default function GroundworksPage() {
  return (
    <main id="main-content">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Groundworks", path: "/groundworks" },
        ])}
      />
      <PageHero
        eyebrow="One company, first dig to finish"
        title="The ground has to be right or the SEN space will fail."
        description="LUNA SEN Scapes is not a catalogue of play towers. We level, dig off, drain and found the site — then the sensory layer goes on. Design and groundworks sit in the same brief."
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
          <h2 className="text-2xl font-black">Send the site, not a shopping list</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Photos, a postcode and how people use the space is enough to start. We will tell you if a visit is
            worth it before anyone prices equipment that will not sit on the ground you have.
          </p>
          <Link href="/enquire" className="mt-6 inline-flex rounded-xl bg-luna-pink px-5 py-3 font-bold">
            Talk to us about the ground
          </Link>
        </div>
      </section>
    </main>
  );
}
