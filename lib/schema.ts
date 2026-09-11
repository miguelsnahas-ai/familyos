import { z } from "zod";

export const childCountValues = ["gestante", "1", "2", "3", "4+"] as const;

export const childAgeValues = ["0-6m", "6-12m", "1-2a", "2-3a", "3-4a", "4-6a"] as const;

export const supportNetworkValues = ["avos", "baba", "creche", "amigos", "nenhuma", "outra"] as const;

export const caregiversValues = ["conjuge", "avos", "baba", "escola", "ninguem", "outra"] as const;

export const professionalsValues = [
  "pediatra",
  "nutricionista",
  "sono",
  "amamentacao",
  "brincar-rotina",
  "enxoval",
  "nenhuma",
] as const;

export const yesNoValues = ["sim", "nao"] as const;

export const challengesValues = [
  "sono",
  "rotina",
  "tela",
  "brincar",
  "desenvolvimento",
  "trabalho-cuidado",
  "tempo-para-si",
  "cansaco",
  "outra",
] as const;

export const howFoundValues = [
  "instagram",
  "indicacao",
  "google",
  "tiktok",
  "grupo-whatsapp",
  "outra",
] as const;

export const waitlistSchema = z
  .object({
    name: z.string().trim().min(2, "Conta seu nome pra gente."),
    email: z.string().trim().email("Esse email não parece válido."),
    whatsapp: z
      .string()
      .trim()
      .min(10, "Confere o número, parece incompleto.")
      .regex(/^[\d\s()+-]+$/, "Só números, espaços e parênteses."),
    childCount: z.enum(childCountValues, { message: "Escolhe uma opção." }),
    childAge: z.array(z.enum(childAgeValues)),
    supportNetwork: z.array(z.enum(supportNetworkValues)).min(1, "Marca ao menos uma opção."),
    supportNetworkOther: z.string().trim().optional(),
    caregivers: z.array(z.enum(caregiversValues)).min(1, "Marca ao menos uma opção."),
    caregiversOther: z.string().trim().optional(),
    professionals: z.array(z.enum(professionalsValues)).min(1, "Marca ao menos uma opção."),
    courseTaken: z.enum(yesNoValues, { message: "Escolhe uma opção." }),
    courseWhich: z.string().trim().optional(),
    appUsed: z.enum(yesNoValues, { message: "Escolhe uma opção." }),
    appWhich: z.string().trim().optional(),
    challenges: z.array(z.enum(challengesValues)).min(1, "Marca ao menos uma opção."),
    challengesOther: z.string().trim().optional(),
    howFound: z.enum(howFoundValues, { message: "Escolhe uma opção." }),
    howFoundOther: z.string().trim().optional(),
    expectation: z.string().trim().max(600, "Resume um pouco mais.").optional(),
    familySetupInterest: z.boolean(),
    honeypot: z.string().max(0, "Falha na validação."),
    utmSource: z.string(),
    utmMedium: z.string(),
    utmCampaign: z.string(),
  })
  .refine((data) => data.childCount === "gestante" || data.childAge.length > 0, {
    message: "Marca ao menos uma idade.",
    path: ["childAge"],
  })
  .refine((data) => !data.supportNetwork.includes("outra") || (data.supportNetworkOther?.length ?? 0) > 0, {
    message: "Conta pra gente qual.",
    path: ["supportNetworkOther"],
  })
  .refine((data) => !data.caregivers.includes("outra") || (data.caregiversOther?.length ?? 0) > 0, {
    message: "Conta pra gente quem.",
    path: ["caregiversOther"],
  })
  .refine((data) => data.courseTaken !== "sim" || (data.courseWhich?.length ?? 0) > 0, {
    message: "Conta pra gente qual curso.",
    path: ["courseWhich"],
  })
  .refine((data) => data.appUsed !== "sim" || (data.appWhich?.length ?? 0) > 0, {
    message: "Conta pra gente qual aplicativo.",
    path: ["appWhich"],
  })
  .refine((data) => !data.challenges.includes("outra") || (data.challengesOther?.length ?? 0) > 0, {
    message: "Conta pra gente qual.",
    path: ["challengesOther"],
  })
  .refine((data) => data.howFound !== "outra" || (data.howFoundOther?.length ?? 0) > 0, {
    message: "Conta pra gente onde.",
    path: ["howFoundOther"],
  });

export type WaitlistInput = z.infer<typeof waitlistSchema>;
