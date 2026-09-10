import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { WaitlistForm } from "@/components/WaitlistForm";
import { waitlist } from "@/content";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="bg-stone py-20 sm:py-28">
      <Container className="max-w-[640px]">
        <h2 className="font-serif text-[1.75rem] italic leading-tight text-ink sm:text-heading-lg">
          {waitlist.title}
        </h2>
        <p className="mt-4 text-[17px] text-body-brown">{waitlist.subtitle}</p>
        <Card className="mt-10 bg-surface p-6 sm:p-8">
          <Suspense fallback={null}>
            <WaitlistForm />
          </Suspense>
        </Card>
      </Container>
    </section>
  );
}
