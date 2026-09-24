import { Container } from "@/components/ui/Container";
import { childProfile } from "@/content";

type Child = (typeof childProfile.children)[number];

function ChildCard({ child }: { child: Child }) {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-paper-raised">
      <div className="flex items-center gap-3 bg-forest p-4">
        <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-sun text-[18px] font-semibold font-serif text-ink">
          {child.name[0]}
        </span>
        <span className="flex flex-col">
          <span className="font-serif font-semibold text-[18px] text-cream">{child.name}</span>
          <span className="text-[13px] text-sage-200">{child.age}</span>
        </span>
      </div>
      <dl className="flex flex-col gap-3 p-4">
        <div className="flex flex-col gap-0.5">
          <dt className="text-[12px] font-semibold text-ink-muted">Rotina</dt>
          <dd className="text-[14px] text-ink-body">{child.routine}</dd>
        </div>
        <div className="flex flex-col gap-0.5">
          <dt className="text-[12px] font-semibold text-ink-muted">Interesses</dt>
          <dd className="text-[14px] text-ink-body">{child.interests}</dd>
        </div>
        <div className="flex flex-col gap-0.5">
          <dt className="text-[12px] font-semibold text-ink-muted">Brincadeira recente</dt>
          <dd className="text-[14px] text-ink-body">{child.recentPlay}</dd>
        </div>
        <div className="flex flex-col gap-0.5">
          <dt className="text-[12px] font-semibold text-ink-muted">Observação dos pais</dt>
          <dd className="text-[14px] text-ink-body">{child.parentNote}</dd>
        </div>
      </dl>
    </div>
  );
}

export function ChildProfile() {
  return (
    <section className="py-16">
      <Container className="flex flex-col gap-8">
        <h2 className="max-w-[36ch] text-display-md text-ink">{childProfile.title}</h2>
        <div className="grid gap-6 sm:grid-cols-2 max-w-[720px]">
          {childProfile.children.map((child) => (
            <ChildCard key={child.name} child={child} />
          ))}
        </div>
      </Container>
    </section>
  );
}
