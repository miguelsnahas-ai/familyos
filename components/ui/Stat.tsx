import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const TONE_BG = {
  peach: "bg-peach-100",
  sage: "bg-sage-100",
  sky: "bg-sky-100",
  neutral: "bg-paper-raised",
} as const;

export function Stat({
  value,
  label,
  tone = "peach",
  icon,
  className,
}: {
  value: ReactNode;
  label: ReactNode;
  tone?: keyof typeof TONE_BG;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "box-border flex min-w-[320px] items-center gap-6 rounded-md px-6 py-4",
        TONE_BG[tone],
        className,
      )}
    >
      {icon}
      <span className="whitespace-nowrap text-stat text-ink">{value}</span>
      <span className="text-body-sm text-ink-body">{label}</span>
    </div>
  );
}
