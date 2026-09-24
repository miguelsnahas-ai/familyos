import type { ReactNode } from "react";

export function FieldGroup({
  legend,
  error,
  children,
}: {
  legend: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="flex flex-col gap-2.5">
      <legend className="mb-0.5 text-label font-bold uppercase tracking-[0.06em] text-ink">{legend}</legend>
      {children}
      {error && (
        <p role="alert" className="text-[13px] text-error">
          {error}
        </p>
      )}
    </fieldset>
  );
}
