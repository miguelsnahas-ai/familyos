"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { HighlightStat } from "@/components/ui/HighlightStat";
import { familySetup } from "@/content";
import { track } from "@/lib/analytics";

export function FamilySetup() {
  return (
    <section className="py-16">
      <Container className="max-w-[720px]">
        <Card className="flex flex-col gap-3">
          <span className="eyebrow">Family Setup</span>
          <h2 className="font-display font-bold text-[24px] text-ink">{familySetup.headline}</h2>
          <p className="text-[15px] leading-relaxed text-ink-soft">{familySetup.description}</p>
          <HighlightStat value={familySetup.price} label={familySetup.priceNote} className="mt-1" />
          <Link
            href="/?setup=1#waitlist"
            onClick={() => track("family_setup_interest", { source: "cta" })}
            className="mt-1 inline-flex min-h-11 items-center justify-center self-start rounded-full border border-border-strong px-[22px] py-3 text-[14px] font-semibold text-ink transition-colors hover:bg-tinted"
          >
            {familySetup.cta}
          </Link>
        </Card>
      </Container>
    </section>
  );
}
