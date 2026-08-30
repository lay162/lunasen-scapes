import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { Lines } from "@/components/lines";
import { PageHero } from "@/components/page-hero";
import {
  CASE_STUDIES,
  caseStudyAreas,
  getCaseStudy,
  relatedCaseStudies,
  workPath,
} from "@/lib/case-studies";
import { areaPath } from "@/lib/local-areas";
import { lunaBtnClass, lunaLinkClass } from "@/lib/luna-tone";
import { breadcrumbJsonLd, caseStudyJsonLd, pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata({
    title: `${study.seoTitle} | ${SITE.name}`,
    description: study.seoDescription,
    path: workPath(study.slug),
    keywords: study.keywords,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const hero = study.images[0];
  const moreImages = study.images.slice(1);
  const areas = caseStudyAreas(study);
  const related = relatedCaseStudies(study.slug);

  return (
    <main id="main-content" className="text-center">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work/" },
          { name: study.title, path: workPath(study.slug) },
        ])}
      />
      <JsonLd data={caseStudyJsonLd(study)} />
      <PageHero
        eyebrow={study.eyebrow}
        title={study.title}
        lines={study.heroLines}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work/" },
          { name: study.title },
        ]}
      />

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <figure className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <Image
            src={hero.src}
            alt={hero.alt}
            width={hero.width}
            height={hero.height}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1024px"
            priority
            className="max-h-[70vh] w-full object-cover"
          />
          <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">{hero.caption}</figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6">
        <h2 className="text-2xl font-black">The brief</h2>
        <div className="mt-4">
          <Lines lines={study.brief} />
        </div>
      </section>

      <section className="border-y bg-[#fff7fb] py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-black">Groundworks and build</h2>
          <div className="mt-4">
            <Lines lines={study.build} />
          </div>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {study.materials.map((material, i) => (
              <li
                key={material}
                className={`rounded-full border bg-white px-4 py-2 text-sm font-semibold ${lunaLinkClass(i)} border-current`}
              >
                {material}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {moreImages.length > 0 ? (
        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <div className={`grid gap-6 ${moreImages.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1"}`}>
            {moreImages.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes={
                    moreImages.length > 1
                      ? "(max-width: 640px) 100vw, 50vw"
                      : "(max-width: 768px) 100vw, 1024px"
                  }
                  className="max-h-[60vh] w-full object-cover"
                />
                <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-black">The outcome</h2>
        <div className="mt-4">
          <Lines lines={study.outcome} />
        </div>
      </section>

      <section className="border-y bg-[#fff7fb] py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-black">Related services and areas</h2>
          <div className="mt-4">
            <Lines
              lines={[
                "This job sits on the same LUNA SEN-Scapes brief as the service pages.",
                "Wirral is the base. The work is UK-wide.",
              ]}
            />
          </div>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {study.serviceLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`inline-flex rounded-full border bg-white px-4 py-2 text-sm font-semibold hover:underline ${lunaLinkClass(i)} border-current`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {areas.map((area, i) => (
              <li key={area.slug}>
                <Link
                  href={areaPath(area.slug)}
                  className={`inline-flex rounded-full border bg-white px-4 py-2 text-sm font-semibold hover:underline ${lunaLinkClass(i)} border-current`}
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-black">More on the ground</h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {related.map((item, i) => (
              <li key={item.slug}>
                <Link
                  href={workPath(item.slug)}
                  className={`inline-flex rounded-full border bg-white px-4 py-2 text-sm font-semibold hover:underline ${lunaLinkClass(i)} border-current`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/work/"
                className="inline-flex rounded-full border bg-white px-4 py-2 text-sm font-semibold text-luna-pink-ink border-current hover:underline"
              >
                All case studies
              </Link>
            </li>
          </ul>
        </section>
      ) : null}

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <div className="rounded-2xl bg-black p-6 text-white sm:p-8">
          <h2 className="text-2xl font-black">Request a site visit</h2>
          <div className="mt-4">
            <Lines
              tone="light"
              lines={[
                "Send a postcode and photos.",
                "Garden makeover, patio, fencing, dig off or a driveway.",
                "We will say if a visit makes sense.",
              ]}
            />
          </div>
          <Link href="/enquire/" className={`${lunaBtnClass(1)} mt-6 h-11 px-5 text-sm`}>
            Request a Site Visit
          </Link>
        </div>
      </section>
    </main>
  );
}
