import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Fence, LandPlot, ShieldCheck, Shovel, Trees, Waves } from "lucide-react";

import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { AREAS, FAQS, GROUNDWORK_SERVICES, SPACES, WORK_ITEMS } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: `${SITE.name} | SEN Playgrounds, Sensory Spaces & Safe Ground | Wirral & North West`,
  description: SITE.description,
  path: "/",
  keywords: [
    "SEN playground Wirral",
    "sensory garden Liverpool",
    "sensory room installation Cheshire",
    "SEN landscaping North West",
  ],
});

const ICONS = [LandPlot, Waves, Trees, ShieldCheck, Fence, Shovel];

export default function HomePage() {
  return (
    <main id="main-content">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }])} />
      <JsonLd data={faqJsonLd([...FAQS])} />

      <section className="relative overflow-hidden bg-black text-white">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-luna-pink/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-luna-blue/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-luna-pink">
              LUNA SEN Group · Wirral & North West
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-balance sm:text-6xl">
              Spaces SEN children and adults can actually use.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Playgrounds, sensory rooms, sensory gardens and safe yards — designed for special educational
              needs, then built from the first dig. Levelling, dig offs and drainage by{" "}
              <a href={SITE.social.groundworks} className="text-luna-blue underline-offset-4 hover:underline">
                S.W.M Groundworks
              </a>
              .
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/enquire"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-luna-pink px-6 text-base font-medium text-white hover:bg-luna-pink/90"
              >
                Request a site visit
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/spaces"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-6 text-base font-medium text-white hover:bg-white/10"
              >
                See the spaces we build
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              {[
                ["22Y+", "Groundworks experience"],
                ["SEN first", "Children and adults"],
                ["£5M", "Public liability cover"],
                ["NW", "Wirral to North Wales"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <dt className="luna-gradient-text text-2xl font-black">{stat}</dt>
                  <dd className="text-white/55">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-3xl ring-1 ring-white/10">
            <Image
              src="/work/garden-after.jpg"
              alt="Finished North West garden after levelling, planting and paving by S.W.M Groundworks"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-luna-blue">Built on S.W.M ground</p>
              <p className="mt-1 text-sm text-white/80">Same crew. SEN brief. Proper levels.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-luna-pink">Who it is for</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-black tracking-tight">Schools, families and adult SEN settings.</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          If the brief is special educational needs, we start with how people actually move, regulate and play —
          then we dig. Play companies sell kit. We make the ground fit the people.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SPACES.map((space, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Link
                key={space.slug}
                href={`/spaces/${space.slug}`}
                className="group rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-luna-pink/40 hover:shadow-md"
              >
                <Icon className="size-6 text-luna-pink" />
                <h3 className="mt-3 text-lg font-bold">{space.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{space.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-luna-pink">
                  {space.eyebrow} <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-black py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-luna-blue">The hard bit</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Levelling, dig offs, drainage — then the pretty layer.</h2>
            <p className="mt-4 leading-relaxed text-white/70">
              A sensory garden on a boggy Wirral plot will fail. A playground on a slope without falls will pond.
              LUNA SEN Scapes keeps S.W.M on the tools so inclusive spaces last more than one winter.
            </p>
            <Link
              href="/groundworks"
              className="mt-6 inline-flex h-11 items-center rounded-xl bg-luna-blue px-5 font-medium text-black hover:bg-luna-blue/90"
            >
              Groundworks we include
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
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
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-luna-pink">Work</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Already on the ground.</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Photos from S.W.M Groundworks jobs across the North West — the same levelling, paving and dig offs
              that sit under every LUNA SEN Scapes brief.
            </p>
          </div>
          <Link href="/work" className="font-semibold text-luna-pink">
            Full gallery
          </Link>
        </div>
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
          <h2 className="mt-2 text-3xl font-black tracking-tight">Find SEN space builders near you.</h2>
          <ul className="mt-8 flex flex-wrap gap-2">
            {AREAS.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="inline-flex rounded-full border border-luna-pink/30 bg-white px-4 py-2 text-sm font-semibold hover:bg-luna-pink hover:text-white"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-black tracking-tight">Questions schools and families actually ask</h2>
        <div className="mt-8">
          <FaqList items={[...FAQS]} />
        </div>
      </section>

      <section className="luna-gradient-bg px-4 py-14 text-center text-white sm:px-6">
        <h2 className="text-3xl font-black tracking-tight">Ready to walk the site?</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/90">
          Send photos, a postcode and what the space needs to do. We will tell you honestly if we are the right
          crew.
        </p>
        <Link
          href="/enquire"
          className="mt-6 inline-flex h-12 items-center rounded-xl bg-black px-6 font-medium text-white hover:bg-black/80"
        >
          Start an enquiry
        </Link>
      </section>
    </main>
  );
}
