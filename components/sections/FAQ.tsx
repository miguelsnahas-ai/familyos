import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { faq } from "@/content";

export function FAQ() {
  return (
    <section className="py-16">
      <Container className="max-w-[700px] flex flex-col gap-6">
        <h2 className="text-title text-ink">{faq.title}</h2>
        <Accordion items={faq.items} />
      </Container>
    </section>
  );
}
