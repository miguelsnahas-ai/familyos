import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { faq } from "@/content";

export function FAQ() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-[700px]">
        <h2 className="font-serif text-[1.75rem] italic text-ink sm:text-heading-lg">
          {faq.title}
        </h2>
        <div className="mt-10">
          <Accordion items={faq.items} />
        </div>
      </Container>
    </section>
  );
}
