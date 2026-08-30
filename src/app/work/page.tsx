import Link from "next/link";

import { CaseStudyCard } from "@/components/case-study-card";
import { JsonLd } from "@/components/json-ld";
import { Lines } from "@/components/lines";
import { PageHero } from "@/components/page-hero";
import { CASE_STUDIES, workPath } from "@/lib/case-studies";
import { lunaBtnClass } from "@/lib/luna-tone";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Project Case Studies | Garden Makeovers, Patios, Fencing & Groundworks",
  description:
    "Real LUNA SEN-Scapes case studies: accessible garden makeovers, sandstone and porcelain patios, SEN-safe fencing, dig offs, concrete foundations and block paving across the UK.",
  path: "/work/",
  keywords: [
    "garden makeover case study UK",
    "accessible patio groundworks",
    "SEN fencing case study",
    "garden dig off",
    "block paving driveway UK",
  ],
});

export default function WorkPage() {
  return (
    <main id="main-content" className="text-center">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Work", path: "/work/" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${SITE.name} project case studies`,
          itemListElement: CASE_STUDIES.map((study, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: absoluteUrl(workPath(study.slug)),
            name: study.title,
          })),
        }}
      />
      <PageHero
        eyebrow="Case studies"
        title="Real UK ground, not stock playground photos."
        lines={[
          "These are real jobs.",
          "Dig offs, paving, gardens, fencing and levels.",
          "Each page is a case study — brief, build and outcome.",
        ]}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Work" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <Lines
            lines={[
              "Named family stories will be added here with permission.",
              "Until then these pages show the groundworks quality on real UK plots.",
            ]}
          />
        </div>
        <Link href="/enquire/" className={`${lunaBtnClass(1)} mt-8 h-11 px-5`}>
          Request a Site Visit
        </Link>
      </section>
    </main>
  );
}
