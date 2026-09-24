import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

function Swoosh() {
  return (
    <svg viewBox="0 0 72 10" className="mt-1 block h-[10px] w-[72px]" stroke="var(--color-tangerine)" fill="none" strokeWidth={3} strokeLinecap="round" aria-hidden="true">
      <path d="M3 7c14-4 36-5 66-3M10 9c14-2 30-3 44-2" />
    </svg>
  );
}

function Heart() {
  return (
    <svg viewBox="0 0 24 24" className="ml-1.5 inline-block h-[18px] w-[18px] -translate-y-0.5" fill="var(--color-sun)" aria-hidden="true">
      <path d="M12 21s-7.5-4.6-9.4-9.3C1.2 8.2 3.4 4.5 7 4.5c2.1 0 3.6 1.2 5 3 1.4-1.8 2.9-3 5-3 3.6 0 5.8 3.7 4.4 7.2C19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

// The brand's handwritten aside — asides, quotes and closing lines
// only, never information the reader needs. At most three per page.
export function HandNote({
  children,
  size = "md",
  tilt = false,
  underline = false,
  heart = false,
  className,
}: {
  children?: ReactNode;
  size?: "md" | "lg";
  tilt?: boolean;
  underline?: boolean;
  heart?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block font-hand font-medium text-hand",
        size === "lg" && "text-hand-lg",
        tilt && "rotate-[-6deg]",
        className || "text-ink",
      )}
    >
      {children}
      {heart && <Heart />}
      {underline && <Swoosh />}
    </span>
  );
}
