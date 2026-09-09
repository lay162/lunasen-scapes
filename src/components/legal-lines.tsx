import { legalLines } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Company name on one line, Companies House number on the next. */
export function LegalLines({ className }: { className?: string }) {
  const [name, number] = legalLines();
  return (
    <p className={cn("whitespace-pre-line", className)}>
      {name}
      <br />
      {number}
    </p>
  );
}
