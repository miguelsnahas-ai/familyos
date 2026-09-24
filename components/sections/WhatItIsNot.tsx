import { Container } from "@/components/ui/Container";
import { CheckList } from "@/components/ui/CheckList";
import { HandNote } from "@/components/ui/HandNote";
import { whatItIsNot } from "@/content";

export function WhatItIsNot() {
  return (
    <section className="py-16">
      <Container className="max-w-[700px] flex flex-col gap-6">
        <h2 className="text-display-md text-ink">{whatItIsNot.title}</h2>
        <CheckList items={whatItIsNot.items} />
        <HandNote size="lg">{whatItIsNot.closing}</HandNote>
      </Container>
    </section>
  );
}
