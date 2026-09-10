import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footer } from "@/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-serif text-[17px] italic text-ink">{footer.name}</p>
          <p className="text-[13px] text-muted">{footer.tagline}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted">
          <a href={`mailto:${footer.email}`} className="hover:text-ink">
            {footer.email}
          </a>
          <a href={footer.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            Instagram
          </a>
          <Link href={footer.privacy} className="hover:text-ink">
            Privacidade
          </Link>
          <Link href={footer.terms} className="hover:text-ink">
            Termos
          </Link>
        </div>
      </Container>
    </footer>
  );
}
