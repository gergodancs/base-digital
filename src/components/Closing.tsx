"use client";

import { useTranslations } from "next-intl";
import { SlideIn } from "./SlideIn";

export function Closing() {
  const t = useTranslations("closing");

  return (
    <section id="kontakt" className="closing" tabIndex={-1}>
      <div className="wrap closing-inner">
        <SlideIn from="left">
          <p className="closing-text">{t("text")}</p>
        </SlideIn>
        <a className="btn btn-on-forest" href="#kontakt">
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
