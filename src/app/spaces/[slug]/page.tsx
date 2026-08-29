import Link from "next/link";
import { notFound } from "next/navigation";

import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Lines, splitSentences } from "@/components/lines";
import { PageHero } from "@/components/page-hero";
import { AREAS, SPACES } from "@/lib/content";
import { lunaLinkClass } from "@/lib/luna-tone";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SPACES.map((space) => ({ slug: space.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const space = SPACES.find((item) => item.slug === slug);
  if (!space) return {};
  return pageMetadata({
    title: space.seoTitle,
    description: space.seoDescription,
    path: `/spaces/${space.slug}`,
    keywords: [...space.keywords],
  });
}

export default async function SpacePage({ params }: Props) {
  const { slug } = await params;
  const space = SPACES.find((item) => item.slug === slug);
  if (!space) notFound();

  const faqs = [
    {
      q: `Do you build ${space.title.toLowerCase()} in the UK?`,
      a: `Yes. ${space.title} are a core LUNA SEN-Scapes service across the United Kingdom. Groundworks are included.`,
    },
    {
      q: "Is this for family gardens?",
      a: space.audience,
    },
  ];

  return (
    <main id="main-content" className="text-center">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Spaces", path: "/spaces" },
          { name: space.title, path: `/spaces/${space.slug}` },
        ])}
      />
      <JsonLd data={serviceJsonLd(space)} />
      <PageHero eyebrow={space.eyebrow} title={space.title} lines={splitSentences(space.summary)} />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-black">What good looks like</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            {space.outcomes.map((item) => (
              <li key={item} className="rounded-xl border bg-white p-4 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
          <h2 className="mt-10 text-2xl font-black">What we typically include</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {space.includes.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <aside className="space-y-6">
          <div className="rounded-2xl bg-black p-6 text-white">
            <h2 className="text-xl font-black">Start this brief</h2>
            <div className="mt-4">
              <Lines
                tone="light"
                lines={[
                  "Send the postcode, a few photos and how the space needs to work.",
                  "We reply with whether a visit is worth it.",
                ]}
              />
            </div>
            <Link href="/enquire" className="luna-btn luna-btn-gradient mt-5 h-10 px-4 text-sm">
              Enquire
            </Link>
          </div>
          <div className="rounded-2xl border p-6">
            <h2 className="font-bold">Where we build this</h2>
            <ul className="mt-3 flex flex-wrap justify-center gap-2">
              {AREAS.slice(0, 8).map((area, i) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className={`text-sm underline-offset-2 hover:underline ${lunaLinkClass(i)}`}>
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <h2 className="mb-6 text-2xl font-black">Quick answers</h2>
        <FaqList items={faqs} />
        <p className="mt-8 text-sm text-muted-foreground">{SITE.name} · {SITE.legalName}</p>
      </section>
    </main>
  );
}
