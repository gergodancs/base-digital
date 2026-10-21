"use client";

import { useTranslations } from "next-intl";
import { SlideIn } from "./SlideIn";

type PackageItem = {
  title: string;
  text: string;
  points: string[];
  cadence: string;
  price: string;
  cta: string;
  featured: boolean;
};

export function Packages() {
  const t = useTranslations("packages");
  const items = t.raw("items") as PackageItem[];

  return (
    <section id="pakete" className="section packages" tabIndex={-1}>
      <div className="wrap">
        <SlideIn from="left">
          <h2 className="section-title">{t("title")}</h2>
          <p className="lede">{t("intro")}</p>
        </SlideIn>
        <div className="package-grid">
          {items.map((item, index) => (
            <SlideIn
              as="article"
              className={item.featured ? "package is-featured" : "package"}
              from={index % 2 === 0 ? "left" : "right"}
              key={item.title}
            >
              <h3>{item.title}</h3>
              <p className="package-text">{item.text}</p>
              <ul className="points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="package-foot">
                <p className="cadence">{item.cadence}</p>
                <p className="price">{item.price}</p>
                <a className={item.featured ? "btn btn-block btn-on-forest" : "btn btn-block"} href="#kontakt">
                  {item.cta}
                </a>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
