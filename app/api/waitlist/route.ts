import { NextRequest, NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/schema";
import { isRateLimited } from "@/lib/rate-limit";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendConfirmationEmail } from "@/lib/resend";

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Tenta novamente em instantes." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo da requisição inválido." }, { status: 400 });
  }

  const parsed = waitlistSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos.", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot tripped — pretend success so bots don't learn anything.
  if (data.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from("waitlist_leads").insert({
      name: data.name,
      email: data.email,
      whatsapp: data.whatsapp,
      child_count: data.childCount,
      child_age: data.childAge,
      support_network: data.supportNetwork,
      support_network_other: data.supportNetworkOther || null,
      caregivers: data.caregivers,
      caregivers_other: data.caregiversOther || null,
      professionals: data.professionals,
      course_taken: data.courseTaken,
      course_which: data.courseWhich || null,
      app_used: data.appUsed,
      app_which: data.appWhich || null,
      challenges: data.challenges,
      challenges_other: data.challengesOther || null,
      how_found: data.howFound,
      how_found_other: data.howFoundOther || null,
      expectation: data.expectation || null,
      family_setup_interest: data.familySetupInterest,
      utm_source: data.utmSource || null,
      utm_medium: data.utmMedium || null,
      utm_campaign: data.utmCampaign || null,
    });

    if (error) {
      console.error("Erro ao gravar lead no Supabase:", error);
      return NextResponse.json({ error: "Não conseguimos salvar seu cadastro." }, { status: 500 });
    }
  } else {
    console.warn("Supabase não configurado — lead recebido mas não persistido:", data.email);
  }

  try {
    await sendConfirmationEmail(data.email, data.name);
  } catch (error) {
    // Don't fail the signup just because the confirmation email failed.
    console.error("Erro ao enviar email de confirmação:", error);
  }

  return NextResponse.json({ ok: true });
}
