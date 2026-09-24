import { Container } from "@/components/ui/Container";
import { Steps } from "@/components/ui/Steps";
import { howItWorks } from "@/content";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16">
      <Container className="flex flex-col gap-7">
        <h2 className="text-display-md text-ink">{howItWorks.title}</h2>
        <Steps
          items={howItWorks.steps.map((step) => ({ title: step.title, text: step.detail }))}
        />
      </Container>
    </section>
  );
}
