import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About LUNA SEN Scapes",
  description:
    "LUNA SEN Scapes is the SEN environments company of LUNA SEN Group Ltd, building playgrounds, sensory spaces and safe ground across Wirral, Liverpool, Cheshire and the North West.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        eyebrow={SITE.legalName}
        title="Luna is the brand. SEN is who it is for. Scapes is the ground."
        description="LUNA SEN Scapes is a new company under LUNA SEN Group Ltd. We design and build playgrounds, sensory rooms, sensory gardens and safe spaces for children and adults — from the first dig to handover."
      />
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-12 text-muted-foreground sm:px-6">
        <p>
          Company number {SITE.companyNumber}. Registered office {SITE.address.line1}, {SITE.address.line2},{" "}
          {SITE.address.city}, {SITE.address.postalCode}.
        </p>
        <p>
          Play suppliers often arrive with equipment and hope the existing tarmac will do. Families get a pretty
          garden that ponds. Schools get a yard that looks inclusive in the brochure and fails in January. We start
          with levels, water and boundaries because that is what SEN children and adults actually feel underfoot.
        </p>
        <p>
          Learner insurance for the wider Luna SEN family sits at{" "}
          <a className="text-luna-pink underline" href={SITE.social.insurance}>
            lunaseninsurance.co.uk
          </a>
          . This site is only for SEN spaces and the ground they stand on.
        </p>
        <p>
          Drop your logo into <code className="rounded bg-muted px-1">public/brand/logo.png</code> when you have the
          artwork — the site is already wired to use it in the header.
        </p>
        <Link href="/enquire" className="inline-flex rounded-xl bg-luna-pink px-5 py-3 font-bold text-white">
          Work with us
        </Link>
      </section>
    </main>
  );
}
