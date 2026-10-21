"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { EASE } from "./motion";
import { SlideIn } from "./SlideIn";

export function Hero() {
  const t = useTranslations("hero");
  const meta = useTranslations("meta");
  const reduce = useReducedMotion() === true;
  const [mobile, setMobile] = useState(false);
  const lines = t.raw("lines") as string[];
  const reveal = !reduce && !mobile;

  useLayoutEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <p className="eyebrow">{t("eyebrow")}</p>
          <SlideIn from="left">
            <h1 className="hero-title">
              {lines.map((line) => (
                <span className="line" key={line}>
                  <motion.span
                    className="reveal-line"
                    initial={reveal ? { y: "110%" } : false}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: reveal ? 0.85 : 0,
                      delay: reveal ? 0.08 + lines.indexOf(line) * 0.08 : 0,
                      ease: EASE,
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
            <p className="hero-body">{t("body")}</p>
          </SlideIn>
          <div className="hero-actions">
            <a className="btn" href="#kontakt">
              {t("primary")}
            </a>
            <a className="text-link" href="#pakete">
              {t("secondary")}
            </a>
          </div>
          <p className="audiences">{t("audiences")}</p>
        </div>
        <SlideIn from="right" className="hero-media">
          <Image
            src="/panka-portrait.png"
            alt={meta("portraitAlt")}
            width={724}
            height={1024}
            priority
            quality={90}
            sizes="(max-width: 800px) 100vw, 42vw"
            className="hero-photo"
          />
        </SlideIn>
      </div>
    </section>
  );
}
