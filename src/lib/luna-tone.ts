import { cn } from "@/lib/utils";

export const LUNA_TONES = ["pink", "gradient", "blue"] as const;
export type LunaTone = (typeof LUNA_TONES)[number];

export function lunaTone(index: number): LunaTone {
  return LUNA_TONES[index % LUNA_TONES.length];
}

/** Clickable card text / icons — pink, pink-to-blue, then blue, repeating. */
export function lunaLinkClass(index: number) {
  const tone = lunaTone(index);
  if (tone === "pink") return "text-luna-pink";
  if (tone === "blue") return "text-luna-blue";
  return "luna-gradient-text";
}

/** Filled CTAs — pink, gradient, blue, repeating. */
export function lunaBtnClass(index = 1) {
  const tone = lunaTone(index);
  if (tone === "pink") return "luna-btn luna-btn-pink";
  if (tone === "blue") return "luna-btn luna-btn-blue";
  return "luna-btn luna-btn-gradient";
}

export function lunaBtnCn(index: number, className?: string) {
  return cn(lunaBtnClass(index), className);
}
