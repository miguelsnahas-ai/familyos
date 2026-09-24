"use client";

import { useFormContext, type FieldPath } from "react-hook-form";
import type { WaitlistInput } from "@/lib/schema";
import { FieldGroup } from "@/components/ui/FieldGroup";
import { Choice } from "@/components/ui/Choice";
import { Input } from "@/components/ui/Input";

type Option = { value: string; label: string };

// Reveals a free-text follow-up ("Qual?", "Quem?"...) when the main
// choice hits triggerValue — the "outra"/"sim" pattern used across
// most of the waitlist's qualification questions.
type OtherField = {
  name: FieldPath<WaitlistInput>;
  triggerValue: string;
  placeholder: string;
  ariaLabel: string;
};

export function ChoiceGroupWithOther({
  name,
  legend,
  type = "checkbox",
  options,
  other,
}: {
  name: FieldPath<WaitlistInput>;
  legend: string;
  type?: "checkbox" | "radio";
  options: Option[];
  other?: OtherField;
}) {
  const { register, watch, formState: { errors } } = useFormContext<WaitlistInput>();
  const errorsByPath = errors as Record<string, { message?: string } | undefined>;

  const mainValue = watch(name) as unknown;
  const mainError = errorsByPath[name]?.message;

  const showOther =
    !!other &&
    (Array.isArray(mainValue) ? mainValue.includes(other.triggerValue) : mainValue === other.triggerValue);
  const otherError = other ? errorsByPath[other.name]?.message : undefined;
  const otherErrorId = other ? `${other.name}-error` : undefined;

  return (
    <FieldGroup legend={legend} error={mainError}>
      <div className="flex flex-wrap gap-2.5">
        {options.map((option, index) => (
          <Choice
            key={option.value}
            id={`${name}-${index}`}
            type={type}
            label={option.label}
            value={option.value}
            {...register(name)}
          />
        ))}
      </div>
      {showOther && other && (
        <Input
          placeholder={other.placeholder}
          aria-label={other.ariaLabel}
          aria-invalid={!!otherError}
          aria-describedby={otherError ? otherErrorId : undefined}
          hasError={!!otherError}
          {...register(other.name)}
        />
      )}
      {otherError && (
        <p id={otherErrorId} role="alert" className="text-[13px] text-error">
          {otherError}
        </p>
      )}
    </FieldGroup>
  );
}
