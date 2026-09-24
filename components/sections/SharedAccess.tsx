import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { ChatMockup } from "@/components/ChatMockup";
import { sharedAccess } from "@/content";

export function SharedAccess() {
  return (
    <section className="py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="eyebrow">{sharedAccess.eyebrow}</span>
          <h2 className="max-w-[18ch] text-display-md text-ink">{sharedAccess.title}</h2>
          <p className="max-w-[52ch] text-[15px] leading-relaxed text-ink-body">
            {sharedAccess.body}
          </p>
          <div className="flex flex-wrap gap-2.5 pt-1">
            {sharedAccess.roles.map((role) => (
              <Tag key={role}>{role}</Tag>
            ))}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <ChatMockup messages={sharedAccess.chat} />
        </div>
      </Container>
    </section>
  );
}
