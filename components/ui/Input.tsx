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
        "w-full min-h-11 rounded-md bg-paper px-3.5 py-3 text-[15px] text-ink-body placeholder:text-ink-muted border outline-none transition-colors",
        hasError ? "border-error" : "border-line focus:border-forest",
        className,
      )}
      {...props}
    />
  );
});
