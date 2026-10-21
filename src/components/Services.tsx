"use client";

import { useTranslations } from "next-intl";
import { SlideIn } from "./SlideIn";

type Service = { index: string; title: string; text: string };

export function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as Service[];

  return (
    <section id="leistungen" className="section" tabIndex={-1}>
      <div className="wrap">
        <SlideIn from="left">
          <h2 className="section-title">{t("title")}</h2>
        </SlideIn>
        <div className="services-grid">
          {items.map((item, index) => (
            <SlideIn
              as="article"
              className="service"
              from={index % 2 === 0 ? "left" : "right"}
              key={item.index}
            >
              <p className="service-index">{item.index}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
