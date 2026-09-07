import { SITE } from "@/lib/site";

export const SOCIAL_PROFILES = [
  { id: "instagram", label: "Instagram", href: SITE.social.instagram },
  { id: "facebook", label: "Facebook", href: SITE.social.facebook },
  { id: "tiktok", label: "TikTok", href: SITE.social.tiktok },
  { id: "linkedin", label: "LinkedIn", href: SITE.social.linkedin },
  { id: "youtube", label: "YouTube", href: SITE.social.youtube },
  { id: "x", label: "X", href: SITE.social.x },
  { id: "googleBusiness", label: "Google", href: SITE.social.googleBusiness },
] as const;

export type SocialProfile = (typeof SOCIAL_PROFILES)[number];

/** Only profiles with a real URL. Later: paste the URL in SITE.social and these appear. */
export function socialProfiles() {
  return SOCIAL_PROFILES.filter((item) => item.href.trim().length > 0);
}

export function socialSameAs() {
  const urls = socialProfiles().map((item) => item.href);
  return urls.length ? urls : undefined;
}
