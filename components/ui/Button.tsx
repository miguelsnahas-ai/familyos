import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
  onDark?: boolean;
  loading?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  onDark = false,
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full transition-[filter,background,transform] duration-150 ease-out disabled:cursor-not-allowed disabled:opacity-45 active:translate-y-px",
        size === "md" && "min-h-11 px-[22px] py-3 text-[14px]",
        size === "sm" && "min-h-9 px-4 py-[9px] text-[13px]",
        variant === "primary" && "bg-butter text-ink font-bold hover:brightness-95",
        variant === "secondary" &&
          (onDark
            ? "bg-transparent text-cream border border-[#7A6A83] font-semibold hover:bg-white/8"
            : "bg-transparent text-ink border border-border-strong font-semibold hover:bg-tinted"),
        variant === "ghost" &&
          cn(
            "bg-transparent font-semibold px-3.5",
            onDark ? "text-butter" : "text-link hover:text-clay",
          ),
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span
          className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-ink/30 border-t-ink"
          aria-hidden="true"
        />
      )}
      {children}
    </button>
  );
}
