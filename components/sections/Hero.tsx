import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ChatMockup } from "@/components/ChatMockup";
import { hero } from "@/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-start gap-6">
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-accent-dark">
            {hero.eyebrow}
          </p>
          <h1 className="font-serif text-[2.25rem] leading-[1.15] italic text-ink sm:text-[2.75rem] lg:text-display">
            {hero.headline}
          </h1>
          <p className="max-w-[42ch] text-[17px] leading-relaxed text-body-brown sm:text-[19px]">
            {hero.subheadline}
          </p>
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <Link
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-canvas transition-colors hover:bg-accent-dark"
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              href="#como-funciona"
              className="text-[15px] font-medium text-ink underline decoration-border underline-offset-4 hover:text-accent-dark"
            >
              {hero.ctaSecondary} ↓
            </Link>
          </div>
          <p className="pt-4 text-[13px] text-muted">{hero.credibility}</p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <ChatMockup messages={hero.chat} />
        </div>
      </Container>
    </section>
  );
}
