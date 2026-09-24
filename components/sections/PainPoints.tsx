import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Chip";
import { painPoints } from "@/content";

const TONE_CYCLE = ["peach", "sage", "butter", "sky"] as const;

export function PainPoints() {
  return (
    <section className="bg-peach-100 py-16">
      <Container className="flex flex-col gap-6">
        <h2 className="max-w-[24ch] text-display-md text-ink sm:text-display-lg">
          {painPoints.title}
        </h2>
        <div className="flex flex-wrap gap-3">
          {painPoints.quotes.map((quote, index) => (
            <Chip key={quote} tone={TONE_CYCLE[index % TONE_CYCLE.length]} className="text-[15px]">
              {quote}
            </Chip>
          ))}
        </div>
        <p className="max-w-[62ch] text-body-lg text-ink-body">{painPoints.closing}</p>
      </Container>
    </section>
  );
}
