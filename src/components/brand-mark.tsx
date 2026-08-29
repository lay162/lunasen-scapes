import Image from "next/image";
import Link from "next/link";

import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

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
        <span className="flex flex-wrap items-baseline gap-x-2 font-black tracking-tight">
          <span className={cn("luna-gradient-text", compact ? "text-2xl sm:text-3xl" : "text-3xl")}>LUNA</span>
          <span className={cn(inverted ? "text-white" : "text-foreground", compact ? "text-lg sm:text-xl" : "text-xl")}>
            SEN-Scapes
          </span>
        </span>
        {!compact ? (
          <span
            className={cn(
              "mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em]",
              inverted ? "text-white/55" : "text-muted-foreground",
            )}
          >
            SEN spaces · groundworks · North West
          </span>
        ) : null}
      </span>
    </Link>
  );
}
