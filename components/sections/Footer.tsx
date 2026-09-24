import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { QuintalMark } from "@/components/ui/QuintalMark";
import { footer } from "@/content";

export function Footer() {
  return (
    <footer className="border-t border-line py-7">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <QuintalMark height={20} />
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-ink-muted">
          <span>{footer.tagline}</span>
          <a href={`mailto:${footer.email}`} className="text-forest hover:text-forest-soft">
            {footer.email}
          </a>
          <a
            href={footer.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest hover:text-forest-soft"
          >
            Instagram
          </a>
          <Link href={footer.privacy} className="text-forest hover:text-forest-soft">
            Privacidade
          </Link>
          <Link href={footer.terms} className="text-forest hover:text-forest-soft">
            Termos
          </Link>
        </div>
      </Container>
    </footer>
  );
}
