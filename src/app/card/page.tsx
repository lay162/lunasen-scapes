import { StaticRedirect } from "@/components/static-redirect";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Digital card",
  description: `The LUNA SEN-Scapes digital business card lives at ${SITE.url}${SITE.cardPath}`,
  path: "/card",
  robots: { index: false, follow: true },
});

export default function CardAliasPage() {
  return <StaticRedirect href={SITE.cardPath} label="Open the digital card" />;
}
