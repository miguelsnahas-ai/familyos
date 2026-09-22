import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { thankYou } from "@/content";

export const metadata: Metadata = {
  title: "Você está na lista — Quintal",
  robots: { index: false, follow: false },
};

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function ObrigadoPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 items-center py-24">
        <Container className="max-w-[560px] text-center sm:text-left">
          <p className="eyebrow">Cadastro confirmado</p>
          <h1 className="mt-3 text-title text-ink">{thankYou.title}</h1>
          <p className="mt-4 text-body-lg text-ink-soft">{thankYou.message}</p>

          <div className="mt-10 rounded-card bg-tinted p-6">
            <h2 className="font-display font-bold text-[19px] text-ink">{thankYou.helpTitle}</h2>
            <p className="mt-1 text-[15px] text-ink-soft">{thankYou.helpMessage}</p>
            {calendlyUrl && (
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-butter px-[22px] py-3 text-[14px] font-bold text-ink transition-[filter] hover:brightness-95"
              >
                {thankYou.calendlyCta}
              </a>
            )}
          </div>

          <Link
            href="/"
            className="mt-8 inline-block text-[14px] font-semibold text-link hover:text-clay"
          >
            {thankYou.backHome}
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
