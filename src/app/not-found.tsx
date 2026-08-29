import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="mx-auto flex max-w-xl flex-col items-start gap-4 px-4 py-24 sm:px-6">
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-luna-pink">404</p>
      <h1 className="text-4xl font-black tracking-tight">That page is not here.</h1>
      <p className="text-muted-foreground">
        It may have moved. Head home, or send the brief if you already know what you need built.
      </p>
      <div className="flex gap-3">
        <Link href="/" className="rounded-xl bg-luna-pink px-4 py-2.5 font-bold text-white">
          Home
        </Link>
        <Link href="/enquire" className="rounded-xl border px-4 py-2.5 font-bold">
          Enquire
        </Link>
      </div>
    </main>
  );
}
