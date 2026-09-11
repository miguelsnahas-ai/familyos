import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

type ChoiceProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

// Chip-style checkbox/radio: flat pill, tinted by default, lilac when
// checked — the DS's Chip treatment, minus a border or shadow.
export const Choice = forwardRef<HTMLInputElement, ChoiceProps>(function Choice(
  { label, className, type = "checkbox", ...props },
  ref,
) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-2.5 rounded-full bg-tinted px-3.5 py-2.5 text-[14px] font-medium text-ink-soft transition-colors has-[:checked]:bg-lilac has-[:checked]:text-ink",
        className,
      )}
    >
      <input ref={ref} type={type} className="accent-clay h-4 w-4 shrink-0" {...props} />
      <span>{label}</span>
    </label>
  );
});
