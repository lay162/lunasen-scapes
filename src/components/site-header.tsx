"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { NAV } from "@/lib/content";
import { SITE } from "@/lib/site";

export function SiteHeader({ hasLogo = false }: { hasLogo?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to main content
      </a>
      <div className="relative mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <BrandMark inverted compact hasLogo={hasLogo} />
        <nav
          className="mt-3 hidden flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white lg:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-luna-pink">
              {item.label}
            </Link>
          ))}
          <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-1 text-white/80 hover:text-white">
            <Phone className="size-3.5" />
            {SITE.phoneDisplay}
          </a>
          <Link href="/enquire" className="rounded-xl bg-luna-pink px-3 py-1.5 text-white hover:bg-luna-pink/90">
            Enquire
          </Link>
        </nav>
        <button
          type="button"
          className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-xl text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 bg-black px-4 pb-6 pt-2 text-center lg:hidden">
          <nav className="flex flex-col items-center gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-full rounded-xl px-3 py-3 text-lg font-bold text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/enquire"
              className="mt-2 w-full rounded-xl bg-luna-pink px-3 py-3 text-lg font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Enquire
            </Link>
            <a href={`tel:${SITE.phoneTel}`} className="px-3 py-2 text-white/70">
              Call {SITE.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
