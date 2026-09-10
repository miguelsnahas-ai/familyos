import { cn } from "@/lib/utils";

type Message = {
  from: "parent" | "system";
  text: string;
};

// A clean, hand-drawn-feeling stand-in for a WhatsApp conversation —
// never a real screenshot, always redrawn in the landing's own palette.
export function ChatMockup({
  messages,
  className,
}: {
  messages: Message[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full max-w-[380px] rounded-[var(--radius-illustration)] bg-surface p-3 shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 rounded-[var(--radius-card)] bg-stone px-4 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-[13px] font-medium text-canvas">
          FO
        </span>
        <div>
          <p className="text-[13px] font-medium text-ink">Family OS</p>
          <p className="text-[11px] text-muted">online</p>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 px-1.5 py-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "max-w-[85%] rounded-[14px] px-3.5 py-2.5 text-[13.5px] leading-snug",
              message.from === "parent"
                ? "self-end bg-accent-tint text-ink"
                : "self-start bg-canvas text-body-brown shadow-[var(--shadow-hairline)]",
            )}
          >
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
}
