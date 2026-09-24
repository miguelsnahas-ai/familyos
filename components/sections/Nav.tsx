import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { QuintalMark } from "@/components/ui/QuintalMark";
import { Button } from "@/components/ui/Button";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/92 backdrop-blur-md">
      <Container className="flex h-[68px] items-center justify-between">
        <Link href="/" className="flex items-center">
          <QuintalMark height={26} />
        </Link>
        <Button href="#waitlist" size="sm" arrow={false}>
          entrar na lista
        </Button>
      </Container>
    </header>
  );
}
