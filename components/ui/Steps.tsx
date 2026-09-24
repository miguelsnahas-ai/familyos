import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Steps({
  items,
  className,
}: {
  items: Array<{ title: ReactNode; text?: ReactNode }>;
  className?: string;
}) {
  return (
    <ol className={cn("grid max-w-[560px] list-none gap-3 p-0 m-0", className)}>
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-4 rounded-md bg-paper-raised px-4 py-3">
          <span
            className={cn(
              "flex h-9 w-9 flex-none items-center justify-center rounded-full text-[16px] font-semibold text-on-forest",
              i === 0 ? "bg-forest-soft" : "bg-forest",
            )}
            aria-hidden="true"
          >
            {i + 1}
          </span>
          <div>
            <div className="text-[16px] font-semibold text-ink">{item.title}</div>
            {item.text && <div className="text-body-sm text-ink-body">{item.text}</div>}
          </div>
        </li>
      ))}
    </ol>
  );
}
