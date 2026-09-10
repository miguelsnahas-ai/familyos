"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { waitlistSchema, type WaitlistInput } from "@/lib/schema";
import { Field } from "@/components/ui/Field";
import { FieldGroup } from "@/components/ui/FieldGroup";
import { Input } from "@/components/ui/Input";
import { Choice } from "@/components/ui/Choice";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { waitlist } from "@/content";
import { track } from "@/lib/analytics";
import { maskPhoneBR } from "@/lib/utils";

export function WaitlistForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const startTracked = useRef(false);
  const [toast, setToast] = useState<{ message: string; variant: "success" | "error" } | null>(
    null,
  );

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      childAge: [],
      painPointOther: "",
      familySetupInterest: false,
      honeypot: "",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
    },
  });

  const painPoint = watch("painPoint");

  useEffect(() => {
    setValue("utmSource", searchParams.get("utm_source") ?? "");
    setValue("utmMedium", searchParams.get("utm_medium") ?? "");
    setValue("utmCampaign", searchParams.get("utm_campaign") ?? "");

    if (searchParams.get("setup") === "1") {
      setValue("familySetupInterest", true);
      track("family_setup_interest", { source: "prefilled" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleFirstInteraction() {
    if (!startTracked.current) {
      startTracked.current = true;
      track("waitlist_start");
    }
  }

  async function onSubmit(data: WaitlistInput) {
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 429) {
        setToast({ message: waitlist.errorRateLimit, variant: "error" });
        return;
      }

      if (!response.ok) {
        setToast({ message: waitlist.errorGeneric, variant: "error" });
        return;
      }

      track("waitlist_submit_success");
      if (data.familySetupInterest) {
        track("family_setup_interest", { source: "checkbox" });
      }
      setToast({ message: waitlist.successToast, variant: "success" });
      setTimeout(() => router.push("/obrigado"), 800);
    } catch {
      setToast({ message: waitlist.errorGeneric, variant: "error" });
    }
  }

  return (
    <>
    <form
      onSubmit={handleSubmit(onSubmit)}
      onFocus={handleFirstInteraction}
      className="flex flex-col gap-6"
      noValidate
    >
      {/* Honeypot — hidden from real users, invisible to screen readers */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={waitlist.fields.name.label} htmlFor="name" error={errors.name?.message}>
          <Input
            id="name"
            placeholder={waitlist.fields.name.placeholder}
            hasError={!!errors.name}
            {...register("name")}
          />
        </Field>
        <Field label={waitlist.fields.email.label} htmlFor="email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            placeholder={waitlist.fields.email.placeholder}
            hasError={!!errors.email}
            {...register("email")}
          />
        </Field>
      </div>

      <Field
        label={waitlist.fields.whatsapp.label}
        htmlFor="whatsapp"
        error={errors.whatsapp?.message}
      >
        <Controller
          control={control}
          name="whatsapp"
          render={({ field }) => (
            <Input
              id="whatsapp"
              type="tel"
              inputMode="numeric"
              placeholder={waitlist.fields.whatsapp.placeholder}
              hasError={!!errors.whatsapp}
              value={field.value}
              onChange={(event) => field.onChange(maskPhoneBR(event.target.value))}
              onBlur={field.onBlur}
              name={field.name}
            />
          )}
        />
      </Field>

      <FieldGroup legend={waitlist.fields.childAge.label} error={errors.childAge?.message}>
        <div className="flex flex-wrap gap-2.5">
          {waitlist.fields.childAge.options.map((option, index) => (
            <Choice
              key={option.value}
              id={`childAge-${index}`}
              label={option.label}
              value={option.value}
              {...register("childAge")}
            />
          ))}
        </div>
      </FieldGroup>

      <FieldGroup legend={waitlist.fields.painPoint.label} error={errors.painPoint?.message}>
        <div className="flex flex-col gap-2.5">
          {waitlist.fields.painPoint.options.map((option, index) => (
            <Choice
              key={option.value}
              id={`painPoint-${index}`}
              type="radio"
              label={option.label}
              value={option.value}
              {...register("painPoint")}
            />
          ))}
          {painPoint === "outra" && (
            <Input
              placeholder="Qual?"
              aria-label="Descreva a outra dor"
              hasError={!!errors.painPointOther}
              {...register("painPointOther")}
            />
          )}
          {errors.painPointOther && (
            <p role="alert" className="text-[13px] text-accent-dark">
              {errors.painPointOther.message}
            </p>
          )}
        </div>
      </FieldGroup>

      <FieldGroup
        legend={waitlist.fields.willingnessToPay.label}
        error={errors.willingnessToPay?.message}
      >
        <div className="flex flex-col gap-2.5">
          {waitlist.fields.willingnessToPay.options.map((option, index) => (
            <Choice
              key={option.value}
              id={`willingnessToPay-${index}`}
              type="radio"
              label={option.label}
              value={option.value}
              {...register("willingnessToPay")}
            />
          ))}
        </div>
      </FieldGroup>

      <Choice
        id="familySetupInterest"
        label={waitlist.fields.familySetupInterest}
        {...register("familySetupInterest")}
      />

      <Button type="submit" loading={isSubmitting} className="self-start">
        {isSubmitting ? waitlist.submitting : waitlist.submit}
      </Button>
    </form>
    <Toast
      message={toast?.message ?? ""}
      variant={toast?.variant ?? "success"}
      visible={toast !== null}
    />
    </>
  );
}
