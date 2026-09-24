import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

export type PillarItem = { text: ReactNode; icon?: ReactNode };

export type PillarCardAction = {
  label: ReactNode;
  sub?: ReactNode;
  variant?: "peach" | "butter" | "sage";
  href?: string;
  onClick?: () => void;
};

const TONE_BG = {
  peach: "bg-peach-100",
  sage: "bg-sage-100",
  sky: "bg-sky-100",
  neutral: "bg-paper-raised",
} as const;

export function PillarCard({
  tone = "peach",
  icon,
  title,
  subtitle,
  items,
  action,
  className,
}: {
  tone?: keyof typeof TONE_BG;
  icon?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  items?: Array<PillarItem | string>;
  action?: PillarCardAction;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "box-border flex flex-col items-stretch rounded-lg p-6",
        TONE_BG[tone],
        className,
      )}
    >
      {icon && <div className="mb-2 flex min-h-[56px] justify-center">{icon}</div>}
      <h3 className="text-center text-title text-ink">{title}</h3>
      {subtitle && <p className="mt-2 mb-4 text-center text-[15px] leading-5 text-ink-body">{subtitle}</p>}
      {items && items.length > 0 && (
        <ul className="mb-6 grid gap-3 list-none p-0 m-0">
          {items.map((it, i) => {
            const o = typeof it === "string" ? { text: it } : it;
            return (
              <li key={i} className="flex items-center gap-2 text-body-sm text-ink-body">
                {o.icon && <span className="inline-flex h-[18px] w-[18px] flex-none text-ink">{o.icon}</span>}
                <span>{o.text}</span>
              </li>
            );
          })}
        </ul>
      )}
      {action && (
        <Button
          variant={action.variant ?? (tone === "sage" ? "butter" : "peach")}
          sub={action.sub}
          block
          onClick={action.onClick}
          href={action.href}
          className="mt-auto"
        >
          {action.label}
        </Button>
      )}
    </article>
  );
}
