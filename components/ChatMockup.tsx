import { cn } from "@/lib/utils";

type Message = {
  from: "parent" | "system";
  text: string;
};

// The Quintal ChatThread + ChatBubble pattern — a clean, hand-drawn-
// feeling stand-in for a WhatsApp conversation, never a real screenshot.
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
        "w-full max-w-[380px] rounded-card bg-canvas p-4 flex flex-col gap-2",
        className,
      )}
    >
      <div className="flex items-center gap-2 pb-1.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-[12px] font-black font-display text-butter">
          Q
        </span>
        <span className="text-[13px] font-semibold text-ink">Quintal</span>
        <span className="text-[12px] text-positive">online</span>
      </div>
      {messages.map((message, index) => (
        <div
          key={index}
          className={cn(
            "max-w-[86%] px-3.5 py-2.5 text-[14px] leading-snug",
            message.from === "system"
              ? "self-start bg-surface border border-border text-ink rounded-[16px_16px_16px_4px]"
              : "self-end bg-lilac text-[#2E2336] rounded-[16px_16px_4px_16px]",
          )}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
}
