import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About LUNA SEN-Scapes",
  description:
    "LUNA SEN-Scapes is a LUNA SEN Group Ltd company making safe places for SEN children, SEN adults and disabled people — gardens, driveways, internal works and all aspects of building across the UK.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content" className="text-center">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        eyebrow={SITE.legalName}
        title="Gardens that work. Rooms that work. Ground that lasts."
        lines={[
          "LUNA SEN-Scapes is the environments and building company of LUNA SEN Group Ltd.",
          "For SEN children, SEN adults and disabled people.",
          "Anyone who needs a safe garden, play area, driveway or safer rooms inside.",
          "We do the groundworks and all aspects of building works.",
          "We do not take school contracts.",
        ]}
      />
      <section className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-muted-foreground sm:px-6">
        <p>Company number {SITE.companyNumber}.</p>
        <p>
          Registered office {SITE.address.line1}, {SITE.address.line2}, {SITE.address.city}, {SITE.address.postalCode}.
        </p>
        <p>Play suppliers often arrive with equipment and hope the existing tarmac will do.</p>
        <p>Families get a pretty garden that ponds.</p>
        <p>A wheelchair stops at the back step.</p>
        <p>We start with levels, water and boundaries.</p>
        <p>Then the play, the planting and the finish.</p>
        <p>
          Drop your logo into <code className="rounded bg-muted px-1">public/brand/logo.png</code> when you have the
          artwork.
        </p>
        <p>Favicon goes in the same place once you make it.</p>
        <Link href="/enquire" className="luna-btn luna-btn-gradient mt-2 h-12 px-5">
          Work with us
        </Link>
      </section>
    </main>
  );
}
