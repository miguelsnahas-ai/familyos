import { Container } from "@/components/ui/Container";
import { childProfile } from "@/content";

export function ChildProfile() {
  const { card } = childProfile;
  return (
    <section className="py-16">
      <Container className="grid items-start gap-8 lg:grid-cols-2">
        <h2 className="max-w-[20ch] text-title text-ink">{childProfile.title}</h2>
        <div className="w-full max-w-[420px] justify-self-center overflow-hidden rounded-card border border-border bg-surface">
          <div className="flex items-center gap-3 bg-ink p-4">
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-butter text-[18px] font-black font-display text-ink">
              {card.name[0]}
            </span>
            <span className="flex flex-col">
              <span className="font-display font-bold text-[18px] text-cream">{card.name}</span>
              <span className="text-[13px] text-[#B9A6C4]">{card.age}</span>
            </span>
          </div>
          <dl className="flex flex-col gap-3 p-4">
            <div className="flex flex-col gap-0.5">
              <dt className="text-[12px] font-semibold text-ink-faint">Rotina</dt>
              <dd className="text-[14px] text-ink">{card.routine}</dd>
            </div>
            <div className="flex flex-col gap-0.5">
              <dt className="text-[12px] font-semibold text-ink-faint">Interesses</dt>
              <dd className="text-[14px] text-ink">{card.interests}</dd>
            </div>
            <div className="flex flex-col gap-0.5">
              <dt className="text-[12px] font-semibold text-ink-faint">Brincadeira recente</dt>
              <dd className="text-[14px] text-ink">{card.recentPlay}</dd>
            </div>
            <div className="flex flex-col gap-0.5">
              <dt className="text-[12px] font-semibold text-ink-faint">Observação dos pais</dt>
              <dd className="text-[14px] text-ink">{card.parentNote}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
