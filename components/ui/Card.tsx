import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "surface" | "sunken" | "dark";
  interactive?: boolean;
};

export function Card({ tone = "surface", interactive = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card p-6 shadow-[var(--shadow-q-sm)] transition-[box-shadow,transform] duration-180 ease-out",
        tone === "surface" && "bg-surface border border-border text-ink",
        tone === "sunken" && "bg-canvas border border-border text-ink",
        tone === "dark" && "bg-ink border border-transparent text-cream",
        interactive && "hover:-translate-y-0.5 hover:shadow-[var(--shadow-q-md)]",
        className,
      )}
      {...props}
    />
  );
}
