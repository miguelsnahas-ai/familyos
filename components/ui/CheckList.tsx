import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3" stroke="var(--color-on-forest)" fill="none" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 6.2l2.4 2.3 4.6-5" />
    </svg>
  );
}

// Principles or promises, each with a forest check disc. Not for tasks.
export function CheckList({ items, className }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={cn("grid list-none gap-2 p-0 m-0", className)}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[15px] leading-[22px] text-ink-body">
          <span
            className="mt-px flex h-5 w-5 flex-none items-center justify-center rounded-full bg-forest"
            aria-hidden="true"
          >
            <CheckIcon />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
