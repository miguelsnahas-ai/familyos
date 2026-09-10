import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  loading?: boolean;
};

export function Button({
  variant = "primary",
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" && "bg-ink text-canvas hover:bg-accent-dark",
        variant === "secondary" && "bg-surface text-ink shadow-[var(--shadow-hairline)] hover:bg-stone",
        variant === "ghost" && "text-ink underline decoration-border underline-offset-4 hover:text-accent-dark",
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span
          className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-canvas/40 border-t-canvas"
          aria-hidden="true"
        />
      )}
      {children}
    </button>
  );
}
