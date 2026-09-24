"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Stat } from "@/components/ui/Stat";
import { Button } from "@/components/ui/Button";
import { familySetup } from "@/content";
import { track } from "@/lib/analytics";

export function FamilySetup() {
  return (
    <section className="py-16">
      <Container className="max-w-[720px]">
        <Card tone="peach" className="flex flex-col gap-3">
          <span className="eyebrow">Family Setup</span>
          <h2 className="font-serif font-semibold text-[24px] text-ink">{familySetup.headline}</h2>
          <p className="text-[15px] leading-relaxed text-ink-body">{familySetup.description}</p>
          <Stat value={familySetup.price} label={familySetup.priceNote} tone="neutral" className="mt-1" />
          <Button
            variant="peach"
            sub={familySetup.cta.sub}
            onClick={() => track("family_setup_interest", { source: "cta" })}
            href="/?setup=1#waitlist"
            className="mt-1 self-start"
          >
            {familySetup.cta.label}
          </Button>
        </Card>
      </Container>
    </section>
  );
}
