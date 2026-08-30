import { EnquiryForm } from "@/components/enquiry-form";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Lines } from "@/components/lines";
import { PageHero } from "@/components/page-hero";
import { FAQS } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { SITE, fullAddress } from "@/lib/site";

const ENQUIRE_FAQS = [FAQS[0], FAQS[1], FAQS[5]];

export const metadata = pageMetadata({
  title: "Enquire | Disabled Garden Makeover, Playground & Groundworks Quotes UK",
  description:
    "Request a LUNA SEN-Scapes site visit for gardens, playgrounds, driveways, internal works or building anywhere in the UK.",
  path: "/enquire",
});

export default function EnquirePage() {
  return (
    <main id="main-content" className="text-center">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Enquire", path: "/enquire/" }])} />
      <JsonLd data={faqJsonLd([...ENQUIRE_FAQS])} />
      <PageHero
        eyebrow="Free visit where it is useful"
        title="Tell us the site. We will tell you if we should come."
        lines={[
          "SEN children, SEN adults, disabled people — anyone who needs a safer space.",
          "Garden, driveway, play area, internal works or a full build.",
          "We need a postcode, how the space is used, and what is failing now.",
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border bg-white p-6 text-left shadow-sm sm:p-8">
          <EnquiryForm />
        </div>
        <aside className="space-y-5">
          <div className="rounded-2xl border p-6">
            <h2 className="font-black">Call or write</h2>
            <p className="mt-3 text-sm">
              <a className="font-semibold text-luna-pink" href={`tel:${SITE.phoneTel}`}>
                {SITE.phoneDisplay}
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a className="font-semibold text-luna-pink" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{fullAddress()}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              {SITE.openingHoursNote}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Weekdays {SITE.openingHours[0].opens}–{SITE.openingHours[0].closes}.
            </p>
          </div>
          <div className="rounded-2xl border p-6 text-left">
            <h2 className="text-center font-black">Common questions</h2>
            <div className="mt-4">
              <FaqList items={[...ENQUIRE_FAQS]} />
            </div>
          </div>
          <div className="rounded-2xl bg-[#e8f8fd] p-6">
            <h2 className="font-black">What happens next</h2>
            <div className="mt-4">
              <Lines
                lines={[
                  "We read the brief and photos.",
                  "If it is a fit, we suggest a visit window.",
                  "You get a written scope — groundworks first, then finishes.",
                ]}
              />
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
