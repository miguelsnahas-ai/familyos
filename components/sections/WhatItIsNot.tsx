import { Container } from "@/components/ui/Container";
import { whatItIsNot } from "@/content";

export function WhatItIsNot() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-[700px]">
        <h2 className="font-serif text-[1.75rem] italic text-ink sm:text-heading-lg">
          {whatItIsNot.title}
        </h2>
        <ul className="mt-8 flex flex-col gap-4">
          {whatItIsNot.items.map((item) => (
            <li key={item} className="flex gap-3 text-[17px] text-body-brown">
              <span className="mt-1 text-accent" aria-hidden="true">
                —
              </span>
              <span className="font-medium text-ink">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-serif text-[19px] italic text-ink">{whatItIsNot.closing}</p>
      </Container>
    </section>
  );
}
