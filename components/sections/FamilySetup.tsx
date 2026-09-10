"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { familySetup } from "@/content";
import { track } from "@/lib/analytics";

export function FamilySetup() {
  return (
    <section className="bg-ink py-20 text-canvas sm:py-28">
      <Container className="max-w-[720px]">
        <h2 className="font-serif text-[1.75rem] italic leading-tight sm:text-heading-lg">
          {familySetup.headline}
        </h2>
        <p className="mt-6 text-[17px] leading-relaxed text-canvas/80">
          {familySetup.description}
        </p>
        <p className="mt-8 text-[28px] font-medium">{familySetup.price}</p>
        <p className="text-[13px] text-canvas/60">{familySetup.priceNote}</p>
        <Link
          href="/?setup=1#waitlist"
          onClick={() => track("family_setup_interest", { source: "cta" })}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-canvas px-7 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-accent-tint"
        >
          {familySetup.cta}
        </Link>
      </Container>
    </section>
  );
}
