import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { ChalkMark } from "@/components/ui/ChalkMark";
import { ChatMockup } from "@/components/ChatMockup";
import { hero, howItWorks } from "@/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-16">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col items-start gap-5">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="text-display text-ink max-w-[16ch]">{hero.headline}</h1>
          <p className="max-w-[52ch] text-body-lg text-ink-soft">{hero.subheadline}</p>
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <Link
              href="#waitlist"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-butter px-[22px] py-3 text-[14px] font-bold text-ink transition-[filter] hover:brightness-95"
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              href="#como-funciona"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border-strong px-[22px] py-3 text-[14px] font-semibold text-ink transition-colors hover:bg-tinted"
            >
              {hero.ctaSecondary}
              <Icon name="arrowDown" size={16} />
            </Link>
          </div>
          <p className="max-w-[46ch] pt-2 text-[13px] text-ink-faint">{hero.credibility}</p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Card tone="dark" className="relative w-full max-w-[400px] overflow-hidden flex flex-col gap-3.5">
            <div className="absolute -right-2.5 -top-1.5 opacity-90">
              <ChalkMark mark="sun" scale={0.8} />
            </div>
            <ChatMockup messages={hero.chat} />
            <span className="text-[13px] text-cream-muted">{howItWorks.closing}</span>
          </Card>
        </div>
      </Container>
    </section>
  );
}
