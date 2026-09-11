import { Container } from "@/components/ui/Container";
import { bigIdea } from "@/content";

export function BigIdea() {
  return (
    <section className="py-16">
      <Container className="max-w-[820px] flex flex-col gap-5">
        <p className="text-title text-ink">{bigIdea.statement}</p>
        <p className="text-body-lg text-ink-soft">{bigIdea.support}</p>
      </Container>
    </section>
  );
}
