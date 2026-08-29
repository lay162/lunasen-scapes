import { StaticRedirect } from "@/components/static-redirect";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Garden makeovers",
  description: "School-space pages now live under garden makeovers.",
  path: "/spaces/school-spaces",
  robots: { index: false, follow: true },
});

export default function SchoolSpacesRedirectPage() {
  return <StaticRedirect href="/spaces/garden-makeovers/" label="See garden makeovers" />;
}
