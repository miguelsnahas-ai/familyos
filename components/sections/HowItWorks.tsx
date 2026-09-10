import { Container } from "@/components/ui/Container";
import { ChatMockup } from "@/components/ChatMockup";
import { howItWorks } from "@/content";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-[1.75rem] italic text-ink sm:text-heading-lg">
          {howItWorks.title}
        </h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {howItWorks.steps.map((step) => (
            <div key={step.number} className="flex flex-col items-start gap-4">
              <ChatMockup messages={step.chat} className="max-w-[320px]" />
              <div>
                <p className="text-[13px] font-medium text-accent-dark">Passo {step.number}</p>
                <h3 className="mt-1 text-heading font-medium text-ink">{step.title}</h3>
                <p className="mt-1 text-[15px] text-body-brown">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-[17px] font-medium text-ink">{howItWorks.closing}</p>
      </Container>
    </section>
  );
}
