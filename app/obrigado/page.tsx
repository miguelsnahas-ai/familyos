import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { thankYou } from "@/content";

export const metadata: Metadata = {
  title: "Você está na lista — Family OS",
  robots: { index: false, follow: false },
};

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function ObrigadoPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 items-center py-24">
        <Container className="max-w-[560px] text-center sm:text-left">
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-accent-dark">
            Cadastro confirmado
          </p>
          <h1 className="mt-3 font-serif text-[2rem] italic leading-tight text-ink sm:text-heading-lg">
            {thankYou.title}
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-body-brown">{thankYou.message}</p>

          <div className="mt-10 rounded-[var(--radius-card)] bg-stone p-6">
            <h2 className="text-heading font-medium text-ink">{thankYou.helpTitle}</h2>
            <p className="mt-1 text-[15px] text-body-brown">{thankYou.helpMessage}</p>
            {calendlyUrl && (
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-[14px] font-medium text-canvas transition-colors hover:bg-accent-dark"
              >
                {thankYou.calendlyCta}
              </a>
            )}
          </div>

          <Link
            href="/"
            className="mt-8 inline-block text-[14px] font-medium text-ink underline decoration-border underline-offset-4 hover:text-accent-dark"
          >
            {thankYou.backHome}
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
