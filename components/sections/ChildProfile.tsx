import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { childProfile } from "@/content";

export function ChildProfile() {
  const { card } = childProfile;
  return (
    <section className="bg-stone py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <h2 className="max-w-[20ch] font-serif text-[1.75rem] italic leading-tight text-ink sm:text-heading-lg">
          {childProfile.title}
        </h2>
        <Card className="w-full max-w-[420px] justify-self-center bg-surface">
          <div className="flex items-center gap-3 border-b border-border pb-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-tint text-[15px] font-medium text-accent-dark">
              {card.name[0]}
            </span>
            <div>
              <p className="text-[16px] font-medium text-ink">{card.name}</p>
              <p className="text-[13px] text-muted">{card.age}</p>
            </div>
          </div>
          <dl className="mt-4 flex flex-col gap-3 text-[14px]">
            <div>
              <dt className="text-muted">Rotina</dt>
              <dd className="text-body-brown">{card.routine}</dd>
            </div>
            <div>
              <dt className="text-muted">Interesses</dt>
              <dd className="text-body-brown">{card.interests}</dd>
            </div>
            <div>
              <dt className="text-muted">Brincadeira recente</dt>
              <dd className="text-body-brown">{card.recentPlay}</dd>
            </div>
            <div>
              <dt className="text-muted">Observação dos pais</dt>
              <dd className="italic text-body-brown">{card.parentNote}</dd>
            </div>
          </dl>
        </Card>
      </Container>
    </section>
  );
}
