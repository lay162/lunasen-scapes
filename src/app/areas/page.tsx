import Link from "next/link";

import { AreaCard } from "@/components/area-card";
import { JsonLd } from "@/components/json-ld";
import { Lines } from "@/components/lines";
import { PageHero } from "@/components/page-hero";
import { GROUNDWORK_SERVICES, SPACES } from "@/lib/content";
import { AREA_GROUP_LABELS, AREA_GROUPS, LOCAL_SERVICES, areasInGroup } from "@/lib/local-areas";
import { lunaLinkClass } from "@/lib/luna-tone";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Disabled Garden Makeovers, Playgrounds & Groundworks across the UK",
  description:
    "LUNA SEN-Scapes covers the whole United Kingdom — England, Scotland, Wales and Northern Ireland — plus every English region and the towns we write for. Wirral is the base, not the limit.",
  path: "/areas/",
  keywords: [
    "disabled garden makeover UK",
    "accessible garden England",
    "SEN playground Scotland",
    "garden adaptation Wales",
    "inclusive play Northern Ireland",
    "SEN landscape London",
    "disabled garden Midlands",
    "accessible garden Yorkshire",
  ],
});

export default function AreasPage() {
  return (
    <main id="main-content" className="text-center">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Areas", path: "/areas/" }])} />
      <PageHero
        eyebrow="Coverage"
        title="Across the UK. Based in the Wirral."
        lines={[
          "LUNA SEN-Scapes works nationwide.",
          "England, Scotland, Wales and Northern Ireland.",
          "Every English region has its own page — not just the North West.",
          "Wirral is where we start from, not where the map ends.",
        ]}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Areas" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {(Object.keys(AREA_GROUPS) as Array<keyof typeof AREA_GROUPS>).map((group) => (
          <div key={group} className={group === "nations" ? "" : "mt-14"}>
            <h2 className="text-2xl font-black">{AREA_GROUP_LABELS[group]}</h2>
            <div className="mt-4">
              <Lines
                lines={
                  group === "nations"
                    ? ["The four nations, plus a United Kingdom overview."]
                    : group === "regions"
                      ? ["London to the South West, Yorkshire to North Wales — each region has its own copy."]
                      : ["Local pages for the towns we visit most. The same service list as the rest of the UK."]
                }
              />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {areasInGroup(group).map((area, i) => (
                <AreaCard key={area.slug} area={area} index={i} />
              ))}
            </div>
          </div>
        ))}

        <h2 className="mt-16 text-2xl font-black">What we build in every area</h2>
        <div className="mt-4">
          <Lines
            lines={[
              "SEN spaces and full groundworks.",
              "The same LUNA SEN-Scapes crew in every area we list.",
            ]}
          />
        </div>
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {LOCAL_SERVICES.map((service, i) => (
            <li key={service.href}>
              <Link href={service.href} className={`text-sm font-semibold hover:underline ${lunaLinkClass(i)}`}>
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {SPACES.map((space, i) => (
            <li key={space.slug}>
              <Link href={`/spaces/${space.slug}/`} className={`text-sm font-semibold hover:underline ${lunaLinkClass(i)}`}>
                {space.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {GROUNDWORK_SERVICES.map((service, i) => (
            <li key={service.slug}>
              <Link href="/groundworks/" className={`text-sm font-semibold hover:underline ${lunaLinkClass(i)}`}>
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
