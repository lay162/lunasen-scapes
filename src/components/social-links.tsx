import { socialProfiles } from "@/lib/social";
import { cn } from "@/lib/utils";

export function SocialLinks({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  const links = socialProfiles();
  if (!links.length) return null;

  return (
    <nav className={cn("flex flex-wrap items-center justify-center gap-3", className)} aria-label="Social profiles">
      {links.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className={cn(
            "inline-flex items-center rounded-full px-3 py-2 text-sm font-semibold",
            inverted
              ? "text-white/80 hover:bg-white/10 hover:text-white"
              : "text-foreground hover:bg-black/5",
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
