import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

type ChoiceProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

// Chip-style checkbox/radio: hairline border, fills with the accent tint
// when checked. Shared visual treatment for both input types.
export const Choice = forwardRef<HTMLInputElement, ChoiceProps>(function Choice(
  { label, className, type = "checkbox", ...props },
  ref,
) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-2.5 rounded-[var(--radius-md)] bg-surface px-3.5 py-2.5 text-[14px] text-ink shadow-[var(--shadow-hairline)] transition-colors has-[:checked]:bg-accent-tint has-[:checked]:shadow-[inset_0_0_0_1.5px_var(--color-accent)]",
        className,
      )}
    >
      <input ref={ref} type={type} className="accent-accent h-4 w-4 shrink-0" {...props} />
      <span>{label}</span>
    </label>
  );
});
