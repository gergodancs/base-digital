"use client";

import { useTranslations } from "next-intl";
import { SlideIn } from "./SlideIn";

type ProofItem = { figure: string; text: string };

export function ProofBand() {
  const t = useTranslations("proof");
  const items = t.raw("items") as ProofItem[];

  return (
    <section className="proof">
      <div className="wrap proof-grid">
        {items.map((item, index) => (
          <SlideIn
            as="article"
            className="proof-item"
            from={index % 2 === 0 ? "left" : "right"}
            key={item.figure}
          >
            <p className="proof-figure">{item.figure}</p>
            <p>{item.text}</p>
          </SlideIn>
        ))}
      </div>
    </section>
  );
}
