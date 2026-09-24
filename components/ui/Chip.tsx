import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

// A tinted statement pill — used for full-sentence quotes (PainPoints),
// not to be confused with Tag (short uppercase labels, official DS
// component). Cycles the card tints so a wall of quotes reads as one
// warm group rather than a plain list.
const TONES = {
  peach: "bg-peach-200 text-ink",
  sage: "bg-sage-200 text-ink",
  butter: "bg-butter text-ink",
  sky: "bg-sky-100 text-ink",
} as const;

export function Chip({
  tone = "peach",
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: keyof typeof TONES }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2.5 text-body-sm font-medium",
        TONES[tone],
        className,
      )}
      {...props}
    />
  );
}
