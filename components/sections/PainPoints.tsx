import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { painPoints } from "@/content";

export function PainPoints() {
  return (
    <section className="bg-stone py-20 sm:py-28">
      <Container>
        <h2 className="max-w-[26ch] font-serif text-[1.75rem] italic leading-tight text-ink sm:text-heading-lg">
          {painPoints.title}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.quotes.map((quote) => (
            <Card key={quote} className="bg-surface">
              <p className="font-serif text-[19px] italic leading-snug text-ink">
                &ldquo;{quote}&rdquo;
              </p>
            </Card>
          ))}
        </div>
        <p className="mt-10 max-w-[48ch] text-[17px] font-medium text-ink">
          {painPoints.closing}
        </p>
      </Container>
    </section>
  );
}
