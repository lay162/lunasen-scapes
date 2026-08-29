import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion defaultValue={[]} className="divide-y rounded-2xl border bg-white px-4">
      {items.map((item) => (
        <AccordionItem key={item.q} value={item.q}>
          <AccordionTrigger className="py-4 text-base font-semibold hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
