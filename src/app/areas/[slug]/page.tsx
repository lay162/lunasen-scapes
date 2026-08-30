import Link from "next/link";
import { notFound } from "next/navigation";

import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Lines } from "@/components/lines";
import { PageHero } from "@/components/page-hero";
import { AREAS, type AreaSlug } from "@/lib/content";
import { areaPath, getAreaLocal, relatedAreas } from "@/lib/local-areas";
import { lunaBtnClass, lunaLinkClass } from "@/lib/luna-tone";
import {
  areaPlaceJsonLd,
  areaServiceJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  pageMetadata,
} from "@/lib/seo";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = AREAS.find((item) => item.slug === slug);
  if (!area) return {};
  const local = getAreaLocal(area.slug);
  return pageMetadata({
    title: `${local.seoTitle} | ${SITE.name}`,
    description: local.seoDescription,
    path: areaPath(area.slug),
    keywords: [
      `disabled garden makeover ${area.name}`,
      `accessible garden ${area.name}`,
      `inclusive playground ${area.name}`,
      `sensory garden ${area.name}`,
      `driveways ${area.name}`,
      `groundworks ${area.name}`,
      ...local.towns.map((town) => `SEN garden ${town}`),
    ],
  });
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = AREAS.find((item) => item.slug === slug);
  if (!area) notFound();
  const local = getAreaLocal(area.slug);
  const related = relatedAreas(area.slug as AreaSlug);
  const faqs = [
    {
      q: `Do you work in ${area.name}?`,
      a: `${local.intro[0]} ${local.intro[1] ?? "Send a postcode and photos and we will say if a visit makes sense."}`,
    },
    {
      q: `What do you build in ${area.name}?`,
      a: `Disabled garden makeovers, sensory gardens, inclusive play and full groundworks in ${area.name}. Driveways, fencing, patios, levelling, dig offs and drainage sit in the same brief.`,
    },
    {
      q: `Is this only for the Wirral?`,
      a: "No. LUNA SEN-Scapes is based in Eastham Village, Wirral, and works across the United Kingdom. Each area page is written for that place — England, Scotland, Wales, Northern Ireland and the English regions included.",
    },
  ];

  return (
    <main id="main-content" className="text-center">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Areas", path: "/areas/" },
          { name: area.name, path: areaPath(area.slug) },
        ])}
      />
      <JsonLd data={areaPlaceJsonLd(area, local)} />
      <JsonLd data={areaServiceJsonLd(area, local)} />
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHero
        eyebrow={area.name}
        title={local.headline}
        lines={local.heroLines}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Areas", href: "/areas/" },
          { name: area.name },
        ]}
      />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-black">Why this page is for {area.name}</h2>
        <div className="mt-4">
          <Lines lines={local.intro} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <h2 className="text-2xl font-black">What we can build in {area.name}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {local.highlights.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border bg-white p-5 hover:border-luna-pink/50"
            >
              <h3 className={`text-lg font-black ${lunaLinkClass(i)}`}>{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y bg-[#fff7fb] py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-black">Places we cover from here</h2>
          <div className="mt-4">
            <Lines
              lines={[
                `${area.name} sits inside ${local.containedIn}.`,
                "These are the places people usually mean when they search this page.",
              ]}
            />
          </div>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {local.towns.map((town, i) => (
              <li
                key={town}
                className={`rounded-full border bg-white px-4 py-2 text-sm font-semibold ${lunaLinkClass(i)} border-current`}
              >
                {town}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-black">Nearby and related areas</h2>
        <div className="mt-4">
          <Lines
            lines={[
              "Every UK nation and region has the same treatment — unique copy, not a copied Wirral page.",
              "Open another area if that is closer to the postcode.",
            ]}
          />
        </div>
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {related.map((item, i) => (
            <li key={item.slug}>
              <Link
                href={areaPath(item.slug)}
                className={`inline-flex rounded-full border bg-white px-4 py-2 text-sm font-semibold hover:underline ${lunaLinkClass(i)} border-current`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/areas/"
              className="inline-flex rounded-full border bg-white px-4 py-2 text-sm font-semibold text-luna-pink-ink border-current hover:underline"
            >
              All UK areas
            </Link>
          </li>
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6">
        <h2 className="mb-6 text-2xl font-black">Quick answers for {area.name}</h2>
        <FaqList items={faqs} />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <div className="rounded-2xl bg-black p-6 text-white">
          <p className="font-bold">Got a {area.name} postcode?</p>
          <div className="mt-4">
            <Lines
              tone="light"
              lines={[
                "Send it with photos.",
                "We will say if a visit makes sense.",
                "Garden makeover, playground or a driveway — same LUNA SEN-Scapes team.",
              ]}
            />
          </div>
          <Link href="/enquire/" className={`${lunaBtnClass(1)} mt-6 h-10 px-4 text-sm`}>
            Enquire from {area.name}
          </Link>
        </div>
      </section>
    </main>
  );
}
