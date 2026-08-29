import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Fence, LandPlot, ShieldCheck, Shovel, Trees, Waves } from "lucide-react";

import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Lines } from "@/components/lines";
import { BrandName } from "@/components/brand-mark";
import { AREAS, BUILDING_SERVICES, FAQS, GROUNDWORK_SERVICES, SPACES, WORK_ITEMS } from "@/lib/content";
import { lunaBtnClass, lunaLinkClass } from "@/lib/luna-tone";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: `${SITE.name} | Safe Places, Gardens & Building Works for SEN & Disabled People | UK`,
  description: SITE.description,
  path: "/",
  keywords: [
    "disabled garden makeover UK",
    "accessible garden UK",
    "inclusive playground UK",
    "safe play area",
    "sensory garden UK",
    "LUNA SEN-Scapes",
  ],
});

const ICONS = [LandPlot, Waves, Trees, ShieldCheck, Fence, Shovel];

export default function HomePage() {
  return (
    <main id="main-content" className="text-center">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }])} />
      <JsonLd data={faqJsonLd([...FAQS])} />

      <section className="relative overflow-hidden bg-black text-white">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-luna-pink/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-luna-blue/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-luna-pink">
            Across the United Kingdom
          </p>
          <h1 className="mt-4">
            <BrandName size="hero" inverted stacked />
          </h1>
          <div className="mt-8">
            <Lines
              tone="light"
              lines={[
                "This is LUNA SEN-Scapes.",
                "For SEN children, SEN adults and disabled people.",
                "Anyone who needs a safe garden, a safe play area, a usable driveway or safer rooms inside.",
                "We do the groundworks and all aspects of building works.",
                "One company.",
                "One brief.",
                "From the first dig to the finished space.",
              ]}
            />
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/enquire" className={`${lunaBtnClass(0)} h-12 px-6 text-base`}>
              Request a site visit
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/spaces" className={`${lunaBtnClass(1)} h-12 px-6 text-base`}>
              Play & gardens
            </Link>
            <Link href="/groundworks" className={`${lunaBtnClass(2)} h-12 px-6 text-base`}>
              Groundworks
            </Link>
            <Link href="/building" className={`${lunaBtnClass(0)} h-12 px-6 text-base`}>
              Building
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
            {[
              ["SEN", "Children and adults"],
              ["Disabled", "Safe places first"],
              ["Build", "Internal and external"],
              ["UK", "Nationwide"],
            ].map(([stat, label], i) => (
              <div key={label}>
                <dt className={`text-2xl font-black ${lunaLinkClass(i)}`}>{stat}</dt>
                <dd className="text-white/55">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-luna-pink">Spaces</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight">Safe places for SEN children, SEN adults and disabled people.</h2>
        <div className="mt-6">
          <Lines
            lines={[
              "A garden you can get into.",
              "A play area you can trust.",
              "A driveway you can use.",
              "A room that works inside the house.",
              "We start with how people move. Then we build.",
            ]}
          />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SPACES.map((space, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Link
                key={space.slug}
                href={`/spaces/${space.slug}`}
                className="group rounded-2xl border bg-white p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-luna-pink/40 hover:shadow-md"
              >
                <Icon className={`mx-auto size-6 ${lunaLinkClass(i)}`} />
                <h3 className="mt-3 text-lg font-bold">{space.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{space.summary}</p>
                <span className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${lunaLinkClass(i)}`}>
                  {space.eyebrow} <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-luna-blue">Groundworks</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">We do the hard ground ourselves.</h2>
          <div className="mt-6">
            <Lines
              tone="light"
              lines={[
                "Driveways, fencing, patios, landscaping, drainage, foundations, levelling and dig offs.",
                "Family homes across the UK.",
                "A sensory garden on boggy ground will fail.",
                "A driveway without a proper dig out will fail too.",
                "We stay on the tools so the finish lasts.",
              ]}
            />
          </div>
          <Link href="/groundworks" className={`${lunaBtnClass(1)} mt-8 h-11 px-5`}>
            All groundworks
          </Link>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {GROUNDWORK_SERVICES.map((service) => (
              <li key={service.slug} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="font-bold">{service.title}</h3>
                <p className="mt-1 text-sm text-white/65">{service.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-luna-pink">Building</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight">All aspects of building works.</h2>
        <div className="mt-6">
          <Lines
            lines={[
              "Internal works, extensions, conversions, flooring and renovations.",
              "Accessible adaptations for wheelchairs, walkers and complex needs.",
              "The garden and the house can be one job.",
            ]}
          />
        </div>
        <Link href="/building" className={`${lunaBtnClass(2)} mt-8 h-11 px-5`}>
          All building works
        </Link>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BUILDING_SERVICES.map((service) => (
            <li key={service.slug} className="rounded-2xl border bg-white p-4">
              <h3 className="font-bold">{service.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{service.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-luna-pink">Work</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight">Already on the ground.</h2>
        <div className="mt-6">
          <Lines
            lines={[
              "These are real UK jobs.",
              "Dig offs, paving, gardens, fencing and levels.",
              "The same quality under a playground or a family drive.",
            ]}
          />
        </div>
        <Link href="/work" className={`${lunaBtnClass(0)} mt-6 h-11 px-5`}>
          Full gallery
        </Link>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {WORK_ITEMS.slice(0, 8).map((item) => (
            <figure key={item.src} className="overflow-hidden rounded-2xl">
              <Image
                src={item.src}
                alt={item.alt}
                width={640}
                height={480}
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="border-y bg-[#fff7fb] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-luna-pink">Areas</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">LUNA SEN-Scapes near you.</h2>
          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {AREAS.map((area, i) => (
              <li key={area.slug}>
                <Link
                  href={`/areas/${area.slug}`}
                  className={`inline-flex rounded-full border bg-white px-4 py-2 text-sm font-semibold ${lunaLinkClass(i)} border-current`}
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-black tracking-tight">Questions people actually ask</h2>
        <div className="mt-8">
          <FaqList items={[...FAQS]} />
        </div>
      </section>

      <section className="luna-gradient-bg px-4 py-14 text-white sm:px-6">
        <h2 className="text-3xl font-black tracking-tight">Ready to walk the site?</h2>
        <div className="mt-6">
          <Lines
            tone="light"
            lines={[
              "Send photos, a postcode and what you need doing.",
              "Garden, driveway, play area or internal works.",
              "We will tell you if a visit is worth it.",
            ]}
          />
        </div>
        <Link href="/enquire" className="mt-6 inline-flex h-12 items-center rounded-xl bg-white px-6 font-bold text-luna-pink hover:bg-white/90">
          Start an enquiry
        </Link>
      </section>
    </main>
  );
}
