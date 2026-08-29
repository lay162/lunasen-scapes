import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { Lines } from "@/components/lines";
import { PageHero } from "@/components/page-hero";
import { AREAS, GROUNDWORK_SERVICES, SPACES } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "SEN Playgrounds, Sensory Spaces & Groundworks near Wirral, Liverpool & Cheshire",
  description:
    "LUNA SEN-Scapes covers Wirral, Liverpool, Merseyside, Cheshire, Chester, Ellesmere Port, Wallasey, West Kirby, Neston, Birkenhead and North Wales.",
  path: "/areas",
  keywords: AREAS.map((area) => `SEN playground ${area.name}`),
});

export default function AreasPage() {
  return (
    <main id="main-content" className="text-center">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Areas", path: "/areas" }])} />
      <PageHero
        eyebrow="Coverage"
        title="Local enough to know the clay. Specialist enough for SEN."
        lines={[
          "Home is the Wirral.",
          "We work across Merseyside, Cheshire and into North Wales.",
          "Each area page is written for people searching locally.",
          "SEN playgrounds, sensory spaces, driveways and fencing.",
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="rounded-2xl border bg-white p-5 hover:border-luna-pink/50"
            >
              <h2 className="text-xl font-black">{area.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.blurb}</p>
            </Link>
          ))}
        </div>
        <h2 className="mt-12 text-2xl font-black">What we build in every area</h2>
        <div className="mt-4">
          <Lines
            lines={[
              "SEN spaces and full groundworks.",
              "The same LUNA SEN-Scapes crew in every town we list.",
            ]}
          />
        </div>
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {SPACES.map((space) => (
            <li key={space.slug}>
              <Link href={`/spaces/${space.slug}`} className="text-sm font-semibold text-luna-pink hover:underline">
                {space.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {GROUNDWORK_SERVICES.map((service) => (
            <li key={service.slug}>
              <Link href="/groundworks" className="text-sm font-semibold text-luna-blue hover:underline">
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
