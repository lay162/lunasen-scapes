type Props = {
  href: string;
  label: string;
};

export function StaticRedirect({ href, label }: Props) {
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-16 text-center">
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <p className="text-sm text-muted-foreground">Taking you to the right page.</p>
      <a className="luna-btn luna-btn-gradient mt-6 h-11 px-6" href={href}>
        {label}
      </a>
    </main>
  );
}
