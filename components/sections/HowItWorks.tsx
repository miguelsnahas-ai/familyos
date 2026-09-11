import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ChalkMark } from "@/components/ui/ChalkMark";
import { howItWorks } from "@/content";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16">
      <Container>
        <Card tone="dark" className="p-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3.5">
            <h2 className="text-[30px] font-bold font-display text-cream">{howItWorks.title}</h2>
            <ChalkMark mark="wave" color="var(--color-lilac)" scale={0.9} />
          </div>
          {howItWorks.steps.map((step) => (
            <div key={step.number} className="flex gap-3.5">
              <span className="font-display font-black text-[34px] leading-none text-butter">
                {step.number}
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-display font-bold text-[19px] text-cream">{step.title}</span>
                <span className="text-[14px] leading-snug text-cream-muted">{step.detail}</span>
              </span>
            </div>
          ))}
        </Card>
      </Container>
    </section>
  );
}
