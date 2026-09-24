import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
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
          <h1 className="mt-3 text-display-md text-ink">{thankYou.title}</h1>
          <p className="mt-4 text-body-lg text-ink-body">{thankYou.message}</p>

          <Card tone="peach" className="mt-10">
            <h2 className="font-serif font-semibold text-[19px] text-ink">{thankYou.helpTitle}</h2>
            <p className="mt-1 text-[15px] text-ink-body">{thankYou.helpMessage}</p>
            {calendlyUrl && (
              <Button href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="mt-4">
                {thankYou.calendlyCta}
              </Button>
            )}
          </Card>

          <Link
            href="/"
            className="mt-8 inline-block text-[14px] font-semibold text-forest hover:text-forest-soft"
          >
            {thankYou.backHome}
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
