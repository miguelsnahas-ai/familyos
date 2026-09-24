import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { HandNote } from "@/components/ui/HandNote";
import { ChatMockup } from "@/components/ChatMockup";
import { hero, howItWorks } from "@/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-16">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col items-start gap-5">
          <h1 className="max-w-[16ch] text-display-xl text-ink">{hero.headline}</h1>
          <p className="max-w-[52ch] text-body-lg text-ink-body">{hero.subheadline}</p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="#waitlist">{hero.ctaPrimary}</Button>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink hover:text-forest-soft"
            >
              {hero.ctaSecondary}
              <Icon name="arrowDown" size={16} />
            </a>
          </div>
          <p className="max-w-[46ch] pt-2 text-[13px] text-ink-muted">{hero.credibility}</p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Card tone="dark" className="relative w-full max-w-[400px] flex flex-col gap-3.5">
            <ChatMockup messages={hero.chat} />
            <HandNote size="lg" tilt underline className="text-cream">
              {howItWorks.closing}
            </HandNote>
          </Card>
        </div>
      </Container>
    </section>
  );
}
