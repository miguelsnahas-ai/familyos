import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

const TONES = {
  default: "bg-tinted text-ink-soft",
  selected: "bg-lilac text-[#2E2336]",
  plum: "bg-ink text-cream font-semibold",
  clay: "bg-clay text-ink font-semibold",
} as const;

export function Chip({
  tone = "default",
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: keyof typeof TONES }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2.5 text-[14px] font-medium",
        TONES[tone],
        className,
      )}
      {...props}
    />
  );
}
