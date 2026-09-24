"use client";

import { Container } from "@/components/ui/Container";
import { PillarCard } from "@/components/ui/PillarCard";
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
            <PillarCard
              key={pillar.id}
              tone={pillar.tone}
              icon={
                <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-forest text-on-forest">
                  <Icon name={pillar.icon} size={22} />
                </span>
              }
              title={pillar.title}
              subtitle={pillar.subtitle}
              items={pillar.items}
              action={{
                label: pillar.action.label,
                sub: pillar.action.sub,
                variant: pillar.action.variant,
                onClick: () => track("pilar_click", { pilar: pillar.id }),
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
