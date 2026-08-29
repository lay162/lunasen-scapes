import Image from "next/image";
import Link from "next/link";

import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const LUNA_SIZE = {
  sm: "text-xl",
  md: "text-2xl sm:text-3xl",
  lg: "text-3xl sm:text-4xl",
  hero: "text-5xl sm:text-7xl md:text-8xl",
} as const;

const SCAPES_SIZE = {
  sm: "text-lg",
  md: "text-lg sm:text-xl",
  lg: "text-xl sm:text-2xl",
  hero: "text-3xl sm:text-5xl md:text-6xl",
} as const;

/** Always “LUNA SEN-Scapes”. Only LUNA uses the header pink-to-blue gradient. */
export function BrandName({
  size = "md",
  inverted = false,
  stacked = false,
  className,
}: {
  size?: keyof typeof LUNA_SIZE;
  inverted?: boolean;
  stacked?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-black tracking-tight",
        stacked
          ? "flex flex-col items-center gap-y-1"
          : "inline-flex flex-wrap items-baseline justify-center gap-x-2",
        className,
      )}
    >
      <span className={cn("luna-gradient-text", LUNA_SIZE[size])}>LUNA</span>
      <span className={cn(inverted ? "text-white" : "text-foreground", SCAPES_SIZE[size])}>SEN-Scapes</span>
    </span>
  );
}

export function BrandMark({
  href = "/",
  inverted = false,
  compact = false,
  hasLogo = false,
}: {
  href?: string;
  inverted?: boolean;
  compact?: boolean;
  hasLogo?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luna-pink"
      aria-label={`${SITE.name} home`}
    >
      {hasLogo ? (
        <Image
          src="/brand/logo.png"
          alt=""
          width={44}
          height={44}
          className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-white/20"
          priority
        />
      ) : null}
      <span className="leading-none">
        <BrandName size={compact ? "md" : "lg"} inverted={inverted} className="justify-start" />
        {!compact ? (
          <span
            className={cn(
              "mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em]",
              inverted ? "text-white/55" : "text-muted-foreground",
            )}
          >
            SEN spaces · groundworks · UK wide
          </span>
        ) : null}
      </span>
    </Link>
  );
}
