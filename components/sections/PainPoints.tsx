import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Chip";
import { painPoints } from "@/content";

export function PainPoints() {
  return (
    <section className="py-16">
      <Container className="flex flex-col gap-5">
        <h2 className="text-title text-ink max-w-[26ch]">{painPoints.title}</h2>
        <div className="flex flex-wrap gap-2.5">
          {painPoints.quotes.map((quote) => (
            <Chip key={quote}>{quote}</Chip>
          ))}
        </div>
        <p className="max-w-[62ch] text-body-lg text-ink-soft">{painPoints.closing}</p>
      </Container>
    </section>
  );
}
