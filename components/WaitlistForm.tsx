"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { waitlistSchema, type WaitlistInput } from "@/lib/schema";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Choice } from "@/components/ui/Choice";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { ChoiceGroupWithOther } from "@/components/ChoiceGroupWithOther";
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

  // Transient feedback shouldn't linger forever — auto-dismiss so a
  // stale error doesn't sit on screen after the user moves on.
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(timer);
  }, [toast]);

  const methods = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      childAge: [],
      supportNetwork: [],
      supportNetworkOther: "",
      caregivers: [],
      caregiversOther: "",
      professionals: [],
      courseWhich: "",
      appWhich: "",
      challenges: [],
      challengesOther: "",
      howFoundOther: "",
      expectation: "",
      familySetupInterest: false,
      honeypot: "",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
    },
  });
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = methods;

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
    <FormProvider {...methods}>
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
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              hasError={!!errors.name}
              {...register("name")}
            />
          </Field>
          <Field label={waitlist.fields.email.label} htmlFor="email" error={errors.email?.message}>
            <Input
              id="email"
              type="email"
              placeholder={waitlist.fields.email.placeholder}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
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
                aria-invalid={!!errors.whatsapp}
                aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
                hasError={!!errors.whatsapp}
                value={field.value}
                onChange={(event) => field.onChange(maskPhoneBR(event.target.value))}
                onBlur={field.onBlur}
                name={field.name}
              />
            )}
          />
        </Field>

        <ChoiceGroupWithOther
          name="childCount"
          type="radio"
          legend={waitlist.fields.childCount.label}
          options={waitlist.fields.childCount.options}
        />

        <ChoiceGroupWithOther
          name="childAge"
          legend={waitlist.fields.childAge.label}
          options={waitlist.fields.childAge.options}
        />

        <ChoiceGroupWithOther
          name="supportNetwork"
          legend={waitlist.fields.supportNetwork.label}
          options={waitlist.fields.supportNetwork.options}
          other={{
            name: "supportNetworkOther",
            triggerValue: "outra",
            placeholder: "Qual?",
            ariaLabel: "Descreva a outra rede de apoio",
          }}
        />

        <ChoiceGroupWithOther
          name="caregivers"
          legend={waitlist.fields.caregivers.label}
          options={waitlist.fields.caregivers.options}
          other={{
            name: "caregiversOther",
            triggerValue: "outra",
            placeholder: "Quem?",
            ariaLabel: "Descreva quem mais participa da rotina",
          }}
        />

        <ChoiceGroupWithOther
          name="professionals"
          legend={waitlist.fields.professionals.label}
          options={waitlist.fields.professionals.options}
        />

        <ChoiceGroupWithOther
          name="courseTaken"
          type="radio"
          legend={waitlist.fields.courseTaken.label}
          options={waitlist.fields.courseTaken.options}
          other={{
            name: "courseWhich",
            triggerValue: "sim",
            placeholder: "Qual curso?",
            ariaLabel: "Qual curso de parentalidade",
          }}
        />

        <ChoiceGroupWithOther
          name="appUsed"
          type="radio"
          legend={waitlist.fields.appUsed.label}
          options={waitlist.fields.appUsed.options}
          other={{
            name: "appWhich",
            triggerValue: "sim",
            placeholder: "Qual aplicativo?",
            ariaLabel: "Qual aplicativo de parentalidade",
          }}
        />

        <ChoiceGroupWithOther
          name="challenges"
          legend={waitlist.fields.challenges.label}
          options={waitlist.fields.challenges.options}
          other={{
            name: "challengesOther",
            triggerValue: "outra",
            placeholder: "Qual?",
            ariaLabel: "Descreva o outro desafio",
          }}
        />

        <ChoiceGroupWithOther
          name="howFound"
          type="radio"
          legend={waitlist.fields.howFound.label}
          options={waitlist.fields.howFound.options}
          other={{
            name: "howFoundOther",
            triggerValue: "outra",
            placeholder: "Onde?",
            ariaLabel: "Descreva onde nos conheceu",
          }}
        />

        <Field
          label={waitlist.fields.expectation.label}
          htmlFor="expectation"
          error={errors.expectation?.message}
        >
          <textarea
            id="expectation"
            rows={3}
            placeholder={waitlist.fields.expectation.placeholder}
            aria-invalid={!!errors.expectation}
            aria-describedby={errors.expectation ? "expectation-error" : undefined}
            className="w-full min-h-11 resize-y rounded-md bg-paper px-3.5 py-3 text-[15px] text-ink-body placeholder:text-ink-muted border border-line outline-none transition-colors focus:border-forest"
            {...register("expectation")}
          />
        </Field>

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
    </FormProvider>
  );
}
