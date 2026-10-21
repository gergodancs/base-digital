"use client";

import { useTranslations } from "next-intl";
import { SlideIn } from "./SlideIn";

export function About() {
  const t = useTranslations("about");

  return (
    <section id="ueber-mich" className="section about" tabIndex={-1}>
      <div className="wrap about-grid">
        <SlideIn from="left">
          <h2 className="section-title">{t("title")}</h2>
        </SlideIn>
        <SlideIn from="right">
          <p className="about-body">{t("body")}</p>
        </SlideIn>
      </div>
    </section>
  );
}
