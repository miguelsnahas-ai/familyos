import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { WaitlistForm } from "@/components/WaitlistForm";
import { waitlist } from "@/content";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="py-16">
      <Container className="max-w-[640px] flex flex-col gap-4">
        <Card tone="dark" className="flex flex-col gap-2">
          <h2 className="font-serif font-semibold text-[24px] text-cream">{waitlist.title}</h2>
          <p className="text-[15px] leading-relaxed text-cream/80">{waitlist.subtitle}</p>
        </Card>
        <Card tone="neutral" className="p-6 sm:p-8">
          <Suspense fallback={null}>
            <WaitlistForm />
          </Suspense>
        </Card>
      </Container>
    </section>
  );
}
