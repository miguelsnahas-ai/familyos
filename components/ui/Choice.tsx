import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

type ChoiceProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

// Chip-style checkbox/radio: flat pill on paper-raised, forest fill
// (the DS's one strong color for selection state) when checked.
export const Choice = forwardRef<HTMLInputElement, ChoiceProps>(function Choice(
  { label, className, type = "checkbox", ...props },
  ref,
) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-2.5 rounded-pill bg-paper-raised px-3.5 py-2.5 text-body-sm font-medium text-ink-body transition-colors has-[:checked]:bg-forest has-[:checked]:text-on-forest",
        className,
      )}
    >
      <input ref={ref} type={type} className="accent-forest h-4 w-4 shrink-0" {...props} />
      <span>{label}</span>
    </label>
  );
});
