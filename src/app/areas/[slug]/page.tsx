import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { AREAS, SPACES } from "@/lib/content";
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
    title: `SEN Playgrounds & Sensory Spaces in ${area.name}`,
    description: `LUNA SEN Scapes builds SEN playgrounds, sensory gardens, sensory rooms and safe spaces in ${area.name}. Groundworks, levelling and dig offs by S.W.M Groundworks.`,
    path: `/areas/${area.slug}`,
    keywords: [
      `SEN playground ${area.name}`,
      `sensory garden ${area.name}`,
      `sensory room ${area.name}`,
      `groundworks ${area.name}`,
    ],
  });
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = AREAS.find((item) => item.slug === slug);
  if (!area) notFound();

  return (
    <main id="main-content">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Areas", path: "/areas" },
          { name: area.name, path: `/areas/${area.slug}` },
        ])}
      />
      <PageHero
        eyebrow={area.name}
        title={`SEN spaces in ${area.name}`}
        description={area.blurb}
      />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-black">What we can build here</h2>
        <p className="mt-3 text-muted-foreground">
          From {SITE.address.city} we run plant, spoil and phased school works into {area.name}. Typical briefs:
        </p>
        <ul className="mt-6 space-y-3">
          {SPACES.map((space) => (
            <li key={space.slug} className="rounded-xl border bg-white p-4">
              <Link href={`/spaces/${space.slug}`} className="font-bold text-luna-pink hover:underline">
                {space.title} in {area.name}
              </Link>
              <p className="mt-1 text-sm text-muted-foreground">{space.summary}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-2xl bg-black p-6 text-white">
          <p className="font-bold">Got a {area.name} postcode?</p>
          <p className="mt-2 text-sm text-white/70">
            Send it with photos. We will say if a visit makes sense before anyone quotes you a playground you cannot
            build on the ground you have.
          </p>
          <Link href="/enquire" className="mt-4 inline-flex rounded-xl bg-luna-pink px-4 py-2.5 text-sm font-bold">
            Enquire from {area.name}
          </Link>
        </div>
      </section>
    </main>
  );
}
