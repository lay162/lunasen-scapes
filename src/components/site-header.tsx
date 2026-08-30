"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { NAV } from "@/lib/content";
import { SITE } from "@/lib/site";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function SiteHeader({ hasLogo = false }: { hasLogo?: boolean }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const root = menuRef.current;
    const focusables = () => (root ? [...root.querySelectorAll<HTMLElement>(FOCUSABLE)] : []);
    focusables()[0]?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-luna-pink/20 bg-black">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to main content
        </a>
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6">
          <BrandMark inverted compact hasLogo={hasLogo} />
          <nav
            className="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-[0.18em] text-white lg:flex"
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-luna-pink">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex size-11 items-center justify-center rounded-xl text-white hover:bg-white/10 sm:h-10 sm:w-auto sm:gap-2 sm:px-3"
              aria-label={`Call ${SITE.phoneDisplay}`}
            >
              <Phone className="size-5" />
              <span className="hidden text-sm font-semibold sm:inline">{SITE.phoneDisplay}</span>
            </a>
            <Link href="/enquire/" className="luna-btn luna-btn-gradient h-10 px-3 text-sm sm:px-4">
              Enquire
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-xl text-white hover:bg-white/10 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-7" /> : <Menu className="size-7" />}
            </button>
          </div>
        </div>
        {open ? (
          <div
            ref={menuRef}
            id="mobile-nav"
            className="border-t border-white/10 bg-black px-4 pb-6 pt-2 lg:hidden"
          >
            <nav className="flex flex-col gap-1 text-center" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-lg font-bold text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </header>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-black/95 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-lg gap-2">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="luna-btn luna-btn-pink h-12 flex-1 text-sm"
          >
            <Phone className="size-4" />
            Call
          </a>
          <Link href="/enquire/" className="luna-btn luna-btn-gradient h-12 flex-1 text-sm">
            Enquire
          </Link>
        </div>
      </div>
    </>
  );
}
