import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About LUNA SEN-Scapes",
  description:
    "LUNA SEN-Scapes is a LUNA SEN Group Ltd company building SEN spaces and delivering groundworks, driveways, fencing and landscaping across Wirral, Liverpool, Cheshire and the North West.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content" className="text-center">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        eyebrow={SITE.legalName}
        title="Luna is the brand. SEN is who it is for. Scapes is the ground."
        lines={[
          "LUNA SEN-Scapes is the environments company of LUNA SEN Group Ltd.",
          "We build playgrounds, sensory rooms, sensory gardens and safe spaces.",
          "We also do driveways, fencing, patios, landscaping, drainage and dig offs.",
          "SEN children and adults are the new niche.",
          "The groundworks stay in-house.",
        ]}
      />
      <section className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-muted-foreground sm:px-6">
        <p>
          Company number {SITE.companyNumber}.
        </p>
        <p>
          Registered office {SITE.address.line1}, {SITE.address.line2}, {SITE.address.city}, {SITE.address.postalCode}.
        </p>
        <p>
          Play suppliers often arrive with equipment and hope the existing tarmac will do.
        </p>
        <p>
          Families get a pretty garden that ponds.
        </p>
        <p>
          We start with levels, water and boundaries.
        </p>
        <p>
          Learner insurance for the wider Luna SEN family sits at{" "}
          <a className="text-luna-pink underline" href={SITE.social.insurance}>
            lunaseninsurance.co.uk
          </a>
          .
        </p>
        <p>Drop your logo into <code className="rounded bg-muted px-1">public/brand/logo.png</code> when you have the artwork.</p>
        <p>Favicon goes in the same place once you make it.</p>
        <Link href="/enquire" className="inline-flex rounded-xl bg-luna-pink px-5 py-3 font-bold text-white">
          Work with us
        </Link>
      </section>
    </main>
  );
}
