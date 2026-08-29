import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE, fullAddress } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy notice",
  description: `How ${SITE.name} uses enquiry data. ${SITE.legalName}, company ${SITE.companyNumber}.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Privacy", path: "/privacy" }])} />
      <PageHero
        eyebrow="UK GDPR"
        title="Privacy notice"
        description={`${SITE.legalName} is the controller for this website. We only collect what we need to quote and to run the site.`}
      />
      <article className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-sm leading-relaxed text-muted-foreground sm:px-6">
        <p>
          Enquiries include your name, contact details, organisation, location and project notes. We use them to
          respond, visit site if agreed, and keep a record of the job. Legal basis: legitimate interests and, where
          you tick the box, consent to be contacted about that enquiry.
        </p>
        <p>
          Technical logs (for example IP address and time) may be processed by our host to keep the site secure. We
          do not sell personal data. We do not run advertising pixels on this site.
        </p>
        <p>
          We keep enquiry records for as long as needed to complete a quote or contract, then for a limited archive
          where we must defend a claim. You can ask for a copy, a correction, or deletion where the law allows, via{" "}
          {SITE.email}.
        </p>
        <p>
          Controller: {SITE.legalName}, {fullAddress()}. Company number {SITE.companyNumber}.
        </p>
      </article>
    </main>
  );
}
