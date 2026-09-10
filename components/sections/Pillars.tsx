"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { pillars } from "@/content";
import { track } from "@/lib/analytics";

export function Pillars() {
  return (
    <section id="pilares" className="bg-stone py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-[1.75rem] italic text-ink sm:text-heading-lg">
          Os quatro pilares
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Card
              key={pillar.id}
              onClick={() => track("pilar_click", { pilar: pillar.id })}
              className="flex flex-col gap-3 bg-surface transition-shadow hover:shadow-[var(--shadow-hairline),var(--shadow-soft)]"
            >
              <span className="text-[22px]" aria-hidden="true">
                {pillar.marker}
              </span>
              <h3 className="text-heading font-medium text-ink">{pillar.title}</h3>
              <p className="text-[15px] leading-relaxed text-body-brown">{pillar.description}</p>
              <p className="mt-auto text-[14px] italic text-muted">{pillar.example}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
