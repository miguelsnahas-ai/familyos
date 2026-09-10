import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] bg-surface p-6 shadow-[var(--shadow-hairline)]",
        className,
      )}
      {...props}
    />
  );
}
