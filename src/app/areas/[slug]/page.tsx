import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { Lines, splitSentences } from "@/components/lines";
import { PageHero } from "@/components/page-hero";
import { AREAS, GROUNDWORK_SERVICES, SPACES } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = AREAS.find((item) => item.slug === slug);
  if (!area) return {};
  return pageMetadata({
    title: `SEN Playgrounds, Sensory Spaces & Groundworks in ${area.name}`,
    description: `LUNA SEN-Scapes builds SEN playgrounds, sensory gardens, sensory rooms, driveways, fencing and safe spaces in ${area.name}. Levelling, dig offs and drainage included.`,
    path: `/areas/${area.slug}`,
    keywords: [
      `SEN playground ${area.name}`,
      `sensory garden ${area.name}`,
      `sensory room ${area.name}`,
      `driveways ${area.name}`,
      `fencing ${area.name}`,
      `groundworks ${area.name}`,
    ],
  });
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = AREAS.find((item) => item.slug === slug);
  if (!area) notFound();

  return (
    <main id="main-content" className="text-center">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Areas", path: "/areas" },
          { name: area.name, path: `/areas/${area.slug}` },
        ])}
      />
      <PageHero eyebrow={area.name} title={`LUNA SEN-Scapes in ${area.name}`} lines={splitSentences(area.blurb)} />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-black">What we can build here</h2>
        <div className="mt-4">
          <Lines
            lines={[
              `From ${SITE.address.city} we run plant, spoil and phased school works into ${area.name}.`,
              "SEN playgrounds and sensory gardens.",
              "Driveways, fencing, patios and drainage too.",
            ]}
          />
        </div>
        <ul className="mt-8 space-y-3">
          {SPACES.map((space) => (
            <li key={space.slug} className="rounded-xl border bg-white p-4">
              <Link href={`/spaces/${space.slug}`} className="font-bold text-luna-pink hover:underline">
                {space.title} in {area.name}
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{space.summary}</p>
            </li>
          ))}
        </ul>
        <h3 className="mt-10 text-xl font-black">Groundworks in {area.name}</h3>
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {GROUNDWORK_SERVICES.map((service) => (
            <li key={service.slug}>
              <Link href="/groundworks" className="text-sm font-semibold text-luna-pink hover:underline">
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-2xl bg-black p-6 text-white">
          <p className="font-bold">Got a {area.name} postcode?</p>
          <div className="mt-4">
            <Lines
              tone="light"
              lines={[
                "Send it with photos.",
                "We will say if a visit makes sense.",
                "SEN space or a driveway — same LUNA SEN-Scapes team.",
              ]}
            />
          </div>
          <Link href="/enquire" className="mt-6 inline-flex rounded-xl bg-luna-pink px-4 py-2.5 text-sm font-bold">
            Enquire from {area.name}
          </Link>
        </div>
      </section>
    </main>
  );
}
