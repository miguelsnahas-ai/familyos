import { z } from "zod";

export const painPointValues = [
  "sono-rotina",
  "tempo-tela",
  "brincar",
  "desenvolvimento",
  "outra",
] as const;

export const willingnessToPayValues = ["ate-30", "30-50", "50-80", "80-150", "depende"] as const;

export const childAgeValues = ["0-6m", "6-12m", "1-2a", "2-3a", "3-4a", "4-6a"] as const;

export const waitlistSchema = z
  .object({
    name: z.string().trim().min(2, "Conta seu nome pra gente."),
    email: z.string().trim().email("Esse email não parece válido."),
    whatsapp: z
      .string()
      .trim()
      .min(10, "Confere o número, parece incompleto.")
      .regex(/^[\d\s()+-]+$/, "Só números, espaços e parênteses."),
    childAge: z.array(z.enum(childAgeValues)).min(1, "Marca ao menos uma idade."),
    painPoint: z.enum(painPointValues, { message: "Escolhe uma opção." }),
    painPointOther: z.string().trim().optional(),
    willingnessToPay: z.enum(willingnessToPayValues, { message: "Escolhe uma opção." }),
    familySetupInterest: z.boolean(),
    honeypot: z.string().max(0, "Falha na validação."),
    utmSource: z.string(),
    utmMedium: z.string(),
    utmCampaign: z.string(),
  })
  .refine((data) => data.painPoint !== "outra" || (data.painPointOther?.length ?? 0) > 0, {
    message: "Conta pra gente qual é a dor.",
    path: ["painPointOther"],
  });

export type WaitlistInput = z.infer<typeof waitlistSchema>;
