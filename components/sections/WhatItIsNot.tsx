import { Container } from "@/components/ui/Container";
import { whatItIsNot } from "@/content";

export function WhatItIsNot() {
  return (
    <section className="py-16">
      <Container className="max-w-[700px] flex flex-col gap-6">
        <h2 className="text-title text-ink">{whatItIsNot.title}</h2>
        <ul className="flex flex-col gap-2.5">
          {whatItIsNot.items.map((item) => (
            <li key={item} className="flex gap-2.5 text-[15px] text-ink-soft">
              <span className="text-clay" aria-hidden="true">
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-body-lg font-bold font-display text-ink">{whatItIsNot.closing}</p>
      </Container>
    </section>
  );
}
