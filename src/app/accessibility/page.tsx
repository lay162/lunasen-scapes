import { JsonLd } from "@/components/json-ld";
import { Lines } from "@/components/lines";
import { PageHero } from "@/components/page-hero";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Accessibility",
  description: `Accessibility of the ${SITE.name} website and how to ask for another format.`,
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <main id="main-content" className="text-center">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Accessibility", path: "/accessibility" },
        ])}
      />
      <PageHero
        eyebrow="SEN brand, usable site"
        title="Accessibility"
        lines={[
          "This site should work with a keyboard, a screen reader, and without relying on colour alone.",
          "If something blocks you, tell us.",
        ]}
      />
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-12 sm:px-6">
        <Lines
          lines={[
            "We use semantic headings, skip links, visible focus, and text alternatives on photographs.",
            "Forms have labels.",
            "Contrast on body text is set for light pages.",
            "The header is high-contrast white on black.",
          ]}
        />
        <Lines
          lines={[
            "A SEN-facing company has no excuse for a fiddly website.",
            `If you need this information in another format, email ${SITE.email} or call ${SITE.phoneDisplay}.`,
          ]}
        />
      </article>
    </main>
  );
}
