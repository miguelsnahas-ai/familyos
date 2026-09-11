import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Chip";
import { painPoints } from "@/content";

const TONE_CYCLE = ["plum", "clay", "default"] as const;

export function PainPoints() {
  return (
    <section className="bg-tinted py-16">
      <Container className="flex flex-col gap-6">
        <h2 className="font-display font-black text-[28px] leading-[1.15] text-ink max-w-[24ch] sm:text-[36px]">
          {painPoints.title}
        </h2>
        <div className="flex flex-wrap gap-3">
          {painPoints.quotes.map((quote, index) => (
            <Chip key={quote} tone={TONE_CYCLE[index % TONE_CYCLE.length]} className="text-[15px]">
              {quote}
            </Chip>
          ))}
        </div>
        <p className="max-w-[62ch] text-body-lg text-ink-soft">{painPoints.closing}</p>
      </Container>
    </section>
  );
}
