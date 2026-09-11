import { cn } from "@/lib/utils";

const TONES = {
  butter: { bg: "bg-butter", value: "text-ink", label: "text-[#5A4530]" },
  lilac: { bg: "bg-lilac", value: "text-[#2E2336]", label: "text-[#4A3B55]" },
} as const;

export function HighlightStat({
  value,
  label,
  tone = "butter",
  className,
}: {
  value: string;
  label: string;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  const t = TONES[tone];
  return (
    <div className={cn("rounded-card p-4 flex flex-col gap-1", t.bg, className)}>
      <span className={cn("font-display font-black text-[28px] leading-none", t.value)}>
        {value}
      </span>
      <span className={cn("text-[13px]", t.label)}>{label}</span>
    </div>
  );
}
