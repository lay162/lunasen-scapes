import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { Lines } from "@/components/lines";
import { PageHero } from "@/components/page-hero";
import { AREAS, GROUNDWORK_SERVICES, SPACES } from "@/lib/content";
import { lunaLinkClass } from "@/lib/luna-tone";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Disabled Garden Makeovers, Playgrounds & Groundworks across the UK",
  description:
    "LUNA SEN-Scapes covers the United Kingdom — England, Scotland, Wales and Northern Ireland — for disabled garden makeovers, inclusive playgrounds, safe play areas and groundworks.",
  path: "/areas",
  keywords: [
    "disabled garden makeover UK",
    "accessible garden England",
    "SEN playground Scotland",
    "garden adaptation Wales",
  ],
});

export default function AreasPage() {
  return (
    <main id="main-content" className="text-center">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Areas", path: "/areas" }])} />
      <PageHero
        eyebrow="Coverage"
        title="Across the UK. Based in the Wirral."
        lines={[
          "LUNA SEN-Scapes works nationwide.",
          "England, Scotland, Wales and Northern Ireland.",
          "Each area page is written for people searching locally.",
          "Disabled garden makeovers, playgrounds, driveways and fencing.",
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area, i) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="rounded-2xl border bg-white p-5 hover:border-luna-pink/50"
            >
              <h2 className={`text-xl font-black ${lunaLinkClass(i)}`}>{area.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.blurb}</p>
            </Link>
          ))}
        </div>
        <h2 className="mt-12 text-2xl font-black">What we build in every area</h2>
        <div className="mt-4">
          <Lines
            lines={[
              "SEN spaces and full groundworks.",
              "The same LUNA SEN-Scapes crew in every area we list.",
            ]}
          />
        </div>
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {SPACES.map((space, i) => (
            <li key={space.slug}>
              <Link href={`/spaces/${space.slug}`} className={`text-sm font-semibold hover:underline ${lunaLinkClass(i)}`}>
                {space.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {GROUNDWORK_SERVICES.map((service, i) => (
            <li key={service.slug}>
              <Link href="/groundworks" className={`text-sm font-semibold hover:underline ${lunaLinkClass(i)}`}>
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
