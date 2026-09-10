import { Container } from "@/components/ui/Container";
import { bigIdea } from "@/content";

export function BigIdea() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-[820px]">
        <p className="font-serif text-[1.75rem] italic leading-[1.3] text-ink sm:text-[2.25rem]">
          {bigIdea.statement}
        </p>
        <p className="mt-6 text-[17px] leading-relaxed text-body-brown sm:text-[19px]">
          {bigIdea.support}
        </p>
      </Container>
    </section>
  );
}
