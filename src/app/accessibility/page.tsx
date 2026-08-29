import { JsonLd } from "@/components/json-ld";
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
    <main id="main-content">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Accessibility", path: "/accessibility" },
        ])}
      />
      <PageHero
        eyebrow="SEN brand, usable site"
        title="Accessibility"
        description="This site should work with a keyboard, a screen reader, and without relying on colour alone. If something blocks you, tell us."
      />
      <article className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-sm leading-relaxed text-muted-foreground sm:px-6">
        <p>
          We use semantic headings, skip links, visible focus, and text alternatives on photographs. Forms have
          labels. Contrast on body text is set for light pages; the header is high-contrast white on black.
        </p>
        <p>
          We know a SEN-facing company has no excuse for a fiddly website. If you need this information in another
          format, or a page fails for you, email {SITE.email} or call {SITE.phoneDisplay}.
        </p>
      </article>
    </main>
  );
}
