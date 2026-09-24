import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "peach" | "sage" | "sky" | "neutral" | "dark";
  interactive?: boolean;
};

// Flat by design — no shadows, no borders. Separation between cards
// and the page comes from tint alone.
export function Card({ tone = "neutral", interactive = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-6 transition-[filter,transform] duration-150 ease-out",
        tone === "peach" && "bg-peach-100 text-ink-body",
        tone === "sage" && "bg-sage-100 text-ink-body",
        tone === "sky" && "bg-sky-100 text-ink-body",
        tone === "neutral" && "bg-paper-raised text-ink-body",
        tone === "dark" && "bg-ink text-cream",
        interactive && "cursor-pointer hover:brightness-[0.98]",
        className,
      )}
      {...props}
    />
  );
}
