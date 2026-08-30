import { JsonLd } from "@/components/json-ld";
import { Lines } from "@/components/lines";
import { PageHero } from "@/components/page-hero";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE, fullAddress, legalLine } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy notice",
  description: `How ${SITE.name} uses enquiry data. ${SITE.legalName}.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main id="main-content" className="text-center">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Privacy", path: "/privacy" }])} />
      <PageHero
        eyebrow="UK GDPR"
        title="Privacy notice"
        lines={[
          `${SITE.legalName} is the controller for this website.`,
          "We only collect what we need to quote and to run the site.",
        ]}
      />
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-12 sm:px-6">
        <Lines
          lines={[
            "Enquiries include your name, contact details, organisation, location and project notes.",
            "We use them to respond, visit site if agreed, and keep a record of the job.",
            "Legal basis: legitimate interests and, where you tick the box, consent to be contacted about that enquiry.",
          ]}
        />
        <Lines
          lines={[
            "Technical logs (for example IP address and time) may be processed by our host to keep the site secure.",
            "We do not sell personal data.",
            "We do not run advertising pixels on this site.",
          ]}
        />
        <Lines
          lines={[
            "We keep enquiry records for as long as needed to complete a quote or contract.",
            "Then for a limited archive where we must defend a claim.",
            `You can ask for a copy, a correction, or deletion where the law allows, via ${SITE.email}.`,
          ]}
        />
        <Lines
          lines={[
            `Controller: ${SITE.legalName}, ${fullAddress()}.`,
            legalLine(),
          ]}
        />
      </article>
    </main>
  );
}
