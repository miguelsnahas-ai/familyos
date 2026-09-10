import { Resend } from "resend";

function confirmationEmailHtml(name: string) {
  const firstName = name.trim().split(" ")[0] || name;
  return `
    <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 480px; margin: 0 auto; padding: 32px 24px; color: #1a1815; background: #f5f1ea;">
      <p style="font-size: 17px; line-height: 1.6;">Oi, ${firstName}.</p>
      <p style="font-size: 17px; line-height: 1.6;">
        Bem-vinda à lista. Vamos te contar tudo pelas próximas semanas —
        sem enrolação, direto ao ponto, como uma conversa entre pais.
      </p>
      <p style="font-size: 17px; line-height: 1.6;">
        Se quiser conversar antes disso, é só responder este email.
      </p>
      <p style="font-size: 17px; line-height: 1.6; margin-top: 32px;">
        Um abraço,<br />
        Fundador(a) do Family OS
      </p>
    </div>
  `;
}

export async function sendConfirmationEmail(to: string, name: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.warn("Resend não configurado — pulando envio de email de confirmação.");
    return { skipped: true };
  }

  const resend = new Resend(apiKey);
  return resend.emails.send({
    from,
    to,
    subject: "Você está na lista do Family OS",
    html: confirmationEmailHtml(name),
  });
}
