import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { footer } from "@/content";

export const metadata: Metadata = { title: "Privacidade — Quintal" };

export default function PrivacidadePage() {
  return (
    <>
      <Nav />
      <main className="flex-1 py-20">
        <Container className="max-w-[680px]">
          <h1 className="text-title text-ink">Política de privacidade</h1>
          <div className="mt-8 flex flex-col gap-5 text-[16px] leading-relaxed text-ink-soft">
            <p>
              O Quintal coleta apenas os dados que você nos entrega diretamente pelo
              formulário de lista de espera: nome, email, WhatsApp e as respostas sobre a
              rotina da sua família. Usamos esses dados para entrar em contato sobre o
              produto e para entender melhor as necessidades das famílias interessadas.
            </p>
            <p>
              Não vendemos nem compartilhamos seus dados com terceiros para fins de
              publicidade. Seguimos a Lei Geral de Proteção de Dados (LGPD), com atenção
              redobrada por lidarmos com informações sobre crianças de 0 a 6 anos —
              essas informações são fornecidas por você, o responsável, e usadas
              exclusivamente para personalizar as sugestões do produto.
            </p>
            <p>
              Você pode pedir a exclusão dos seus dados a qualquer momento escrevendo
              para <a className="text-link hover:text-clay underline" href={`mailto:${footer.email}`}>{footer.email}</a>.
            </p>
            <p className="text-[13px] text-ink-faint">
              Este é um documento provisório enquanto o produto está em fase de
              validação. Uma versão completa será publicada antes do lançamento
              comercial.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
