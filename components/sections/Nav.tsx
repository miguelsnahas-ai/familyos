import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-canvas/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-[19px] italic text-ink">
          Family OS
        </Link>
        <Link
          href="#waitlist"
          className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2 text-[13px] font-medium text-canvas transition-colors hover:bg-accent-dark"
        >
          Entrar na lista
        </Link>
      </Container>
    </header>
  );
}
