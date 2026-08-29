import { cn } from "@/lib/utils";

export function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export function Lines({
  lines,
  className,
  tone = "muted",
}: {
  lines: string[];
  className?: string;
  tone?: "muted" | "light" | "dark";
}) {
  const color =
    tone === "light" ? "text-white/80" : tone === "dark" ? "text-foreground" : "text-muted-foreground";
  return (
    <div className={cn("mx-auto flex max-w-2xl flex-col gap-3 text-center", className)}>
      {lines.map((line, index) => (
        <p key={`${index}-${line.slice(0, 48)}`} className={cn("text-base leading-relaxed sm:text-lg", color)}>
          {line}
        </p>
      ))}
    </div>
  );
}
