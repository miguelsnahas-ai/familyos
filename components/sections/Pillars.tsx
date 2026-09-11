"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { pillars } from "@/content";
import { track } from "@/lib/analytics";

export function Pillars() {
  return (
    <section id="pilares" className="py-16">
      <Container className="flex flex-col gap-5">
        <span className="eyebrow">Os quatro pilares</span>
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Card
              key={pillar.id}
              interactive
              onClick={() => track("pilar_click", { pilar: pillar.id })}
              className="flex flex-col gap-2 cursor-pointer"
            >
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-lilac text-ink">
                <Icon name={pillar.icon} />
              </span>
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-link">
                {"Pilar " + pillar.index}
              </span>
              <span className="font-display font-bold text-[20px] text-ink">{pillar.title}</span>
              <span className="text-[14px] leading-snug text-ink-soft">{pillar.description}</span>
              <span className="mt-auto rounded-[10px] bg-canvas px-3 py-2.5 text-[13px] leading-snug text-ink-soft">
                {pillar.example}
              </span>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
