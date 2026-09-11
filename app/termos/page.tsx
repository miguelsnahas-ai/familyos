import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { footer } from "@/content";

export const metadata: Metadata = { title: "Termos — Quintal" };

export default function TermosPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 py-20">
        <Container className="max-w-[680px]">
          <h1 className="text-title text-ink">Termos de uso</h1>
          <div className="mt-8 flex flex-col gap-5 text-[16px] leading-relaxed text-ink-soft">
            <p>
              O Quintal está em fase de validação. Ao entrar na lista de espera, você
              concorda em ser contatado(a) por email e WhatsApp sobre o desenvolvimento
              do produto, condições de acesso antecipado e, eventualmente, sobre o
              serviço Family Setup.
            </p>
            <p>
              O Quintal não substitui orientação médica, psicológica ou nutricional.
              As sugestões oferecidas são de caráter informativo e não configuram
              diagnóstico ou tratamento.
            </p>
            <p>
              Podemos atualizar estes termos conforme o produto evolui. Mudanças
              relevantes serão comunicadas por email.
            </p>
            <p>
              Dúvidas? Escreva para{" "}
              <a className="text-link hover:text-clay underline" href={`mailto:${footer.email}`}>
                {footer.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
