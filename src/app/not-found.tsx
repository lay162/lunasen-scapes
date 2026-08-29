import Link from "next/link";

import { BrandName } from "@/components/brand-mark";

export default function NotFound() {
  return (
    <main id="main-content" className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center sm:px-6">
      <BrandName size="md" />
      <h1 className="text-4xl font-black tracking-tight">That page is not here.</h1>
      <p className="text-muted-foreground">It may have moved.</p>
      <p className="text-muted-foreground">Head home, or send the brief if you already know what you need built.</p>
      <div className="flex gap-3">
        <Link href="/" className="luna-btn luna-btn-gradient h-10 px-4">
          Home
        </Link>
        <Link href="/enquire" className="luna-btn luna-btn-pink h-10 px-4">
          Enquire
        </Link>
      </div>
    </main>
  );
}
