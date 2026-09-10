import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { hasError, className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-[var(--radius-md)] bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-muted shadow-[var(--shadow-hairline)] outline-none transition-shadow focus:shadow-[inset_0_0_0_1.5px_var(--color-accent)]",
        hasError && "shadow-[inset_0_0_0_1.5px_var(--color-accent)]",
        className,
      )}
      {...props}
    />
  );
});
