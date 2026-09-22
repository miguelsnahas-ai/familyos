import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { QuintalMark } from "@/components/ui/QuintalMark";
import { footer } from "@/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-7">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <QuintalMark size={22} />
          <span className="font-display font-black text-[18px] tracking-[-0.02em] text-ink lowercase">
            {footer.name}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-ink-faint">
          <span>{footer.tagline}</span>
          <a href={`mailto:${footer.email}`} className="text-link hover:text-clay">
            {footer.email}
          </a>
          <a
            href={footer.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:text-clay"
          >
            Instagram
          </a>
          <Link href={footer.privacy} className="text-link hover:text-clay">
            Privacidade
          </Link>
          <Link href={footer.terms} className="text-link hover:text-clay">
            Termos
          </Link>
        </div>
      </Container>
    </footer>
  );
}
