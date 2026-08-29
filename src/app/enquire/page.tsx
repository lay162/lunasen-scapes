import { EnquiryForm } from "@/components/enquiry-form";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE, fullAddress } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Enquire | SEN Playground & Sensory Space Quotes",
  description:
    "Request a LUNA SEN Scapes site visit for SEN playgrounds, sensory rooms, sensory gardens or safe spaces in Wirral, Liverpool, Cheshire and the North West.",
  path: "/enquire",
});

export default function EnquirePage() {
  return (
    <main id="main-content">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Enquire", path: "/enquire" }])} />
      <PageHero
        eyebrow="Free visit where it is useful"
        title="Tell us the site. We will tell you if we should come."
        description="Schools, families and adult settings use the same form. We need a postcode, how the space is used, and what is failing now."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
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
            <p className="mt-4 text-sm text-muted-foreground">{fullAddress()}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              {SITE.openingHoursNote} Weekdays {SITE.openingHours[0].opens}–{SITE.openingHours[0].closes}.
            </p>
          </div>
          <div className="rounded-2xl bg-[#e8f8fd] p-6">
            <h2 className="font-black">What happens next</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
              <li>We read the brief and photos.</li>
              <li>If it is a fit, we suggest a visit window that works around term or care rotas.</li>
              <li>You get a written scope — groundworks first, then equipment and finishes.</li>
            </ol>
          </div>
        </aside>
      </section>
    </main>
  );
}
