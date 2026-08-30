import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { AREAS, NAV, SPACES } from "@/lib/content";
import { SITE, fullAddress, legalLine } from "@/lib/site";

export function SiteFooter({ hasLogo = false }: { hasLogo?: boolean }) {
  return (
    <footer className="bg-black text-center text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 text-center sm:px-6 md:grid-cols-4">
        <div className="flex flex-col items-center md:col-span-1">
          <BrandMark inverted hasLogo={hasLogo} />
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Safe places, gardens and building works across the UK.
          </p>
        </div>
        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-luna-pink">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/enquire" className="hover:text-white">
                Enquire
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-luna-blue">SEN spaces</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {SPACES.map((space) => (
              <li key={space.slug}>
                <Link href={`/spaces/${space.slug}`} className="hover:text-white">
                  {space.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Find us</h2>
          <address className="mt-4 space-y-3 text-sm not-italic text-white/80">
            <p className="flex justify-center gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-luna-pink" />
              <span>{fullAddress()}</span>
            </p>
            <p className="flex justify-center gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-luna-pink" />
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-white">
                {SITE.phoneDisplay}
              </a>
            </p>
            <p className="flex justify-center gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-luna-pink" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </p>
          </address>
          <p className="mt-4 text-xs text-white/45">
            {legalLine()}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-5 text-xs text-white/45 sm:px-6">
          <p>
            Serving {AREAS.slice(0, 6).map((a) => a.name).join(", ")} and {AREAS[AREAS.length - 1].name}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/BusinessCard/" className="hover:text-white">
              Digital card
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/accessibility" className="hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
