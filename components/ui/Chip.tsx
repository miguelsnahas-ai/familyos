import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Chip({ selected = false, className, ...props }: HTMLAttributes<HTMLSpanElement> & { selected?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2.5 text-[14px] font-medium",
        selected ? "bg-lilac text-[#2E2336]" : "bg-tinted text-ink-soft",
        className,
      )}
      {...props}
    />
  );
}
