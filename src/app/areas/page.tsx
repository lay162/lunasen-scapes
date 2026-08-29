import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { AREAS, SPACES } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "SEN Playgrounds & Sensory Spaces near Wirral, Liverpool & Cheshire",
  description:
    "LUNA SEN Scapes covers Wirral, Liverpool, Merseyside, Cheshire, Chester, Ellesmere Port, Wallasey, West Kirby, Neston, Birkenhead and North Wales.",
  path: "/areas",
  keywords: AREAS.map((area) => `SEN playground ${area.name}`),
});

export default function AreasPage() {
  return (
    <main id="main-content">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Areas", path: "/areas" }])} />
      <PageHero
        eyebrow="Coverage"
        title="Local enough to know the clay. Specialist enough for SEN."
        description="Home is the Wirral. We work across Merseyside, Cheshire and into North Wales. Each area page is written for people searching locally for SEN playgrounds and sensory spaces."
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
              <p className="mt-2 text-sm text-muted-foreground">{area.blurb}</p>
            </Link>
          ))}
        </div>
        <h2 className="mt-12 text-2xl font-black">What we build in every area</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {SPACES.map((space) => (
            <li key={space.slug}>
              <Link href={`/spaces/${space.slug}`} className="text-sm font-semibold text-luna-pink hover:underline">
                {space.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
