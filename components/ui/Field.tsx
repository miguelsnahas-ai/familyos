import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Field({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-label font-bold uppercase tracking-[0.06em] text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-[13px] text-error">
          {error}
        </p>
      )}
    </div>
  );
}
