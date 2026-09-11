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
        "w-full min-h-11 rounded-field bg-canvas px-3.5 py-3 text-[15px] text-ink placeholder:text-ink-faint border outline-none transition-colors",
        hasError ? "border-attention" : "border-border focus:border-clay",
        className,
      )}
      {...props}
    />
  );
});
