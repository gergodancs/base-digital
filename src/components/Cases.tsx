"use client";

import { useTranslations } from "next-intl";
import { SlideIn } from "./SlideIn";

type CaseItem = {
  name: string;
  figure: string;
  caption: string;
  text: string;
};

export function Cases() {
  const t = useTranslations("cases");
  const items = t.raw("items") as CaseItem[];

  return (
    <section id="cases" className="section" tabIndex={-1}>
      <div className="wrap">
        <SlideIn from="left">
          <h2 className="section-title">{t("title")}</h2>
          <p className="lede">{t("intro")}</p>
        </SlideIn>
        <div className="cases-grid">
          {items.map((item, index) => (
            <SlideIn
              as="article"
              className="case"
              from={index % 2 === 0 ? "left" : "right"}
              key={item.name}
            >
              <h3 className="case-name">{item.name}</h3>
              <p className="case-figure">{item.figure}</p>
              <p className="case-caption">{item.caption}</p>
              <p className="case-body">{item.text}</p>
            </SlideIn>
          ))}
        </div>
        <p className="also">{t("also")}</p>
      </div>
    </section>
  );
}
