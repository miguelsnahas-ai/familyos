import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { QuintalMark } from "@/components/ui/QuintalMark";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-canvas/92 backdrop-blur-md">
      <Container className="flex h-[68px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <QuintalMark size={28} />
          <span className="font-display font-black text-[22px] tracking-[-0.03em] text-ink lowercase">
            quintal
          </span>
        </Link>
        <Link
          href="#waitlist"
          className="inline-flex min-h-9 items-center justify-center rounded-full bg-butter px-4 py-[9px] text-[13px] font-bold text-ink transition-[filter] hover:brightness-95"
        >
          Entrar na lista
        </Link>
      </Container>
    </header>
  );
}
