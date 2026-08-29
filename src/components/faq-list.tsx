import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { splitSentences } from "@/components/lines";

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion defaultValue={[]} className="divide-y rounded-2xl border bg-white px-4 text-center">
      {items.map((item) => (
        <AccordionItem key={item.q} value={item.q}>
          <AccordionTrigger className="py-4 text-center text-base font-semibold hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            <div className="flex flex-col gap-3 pb-2">
              {splitSentences(item.a).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
