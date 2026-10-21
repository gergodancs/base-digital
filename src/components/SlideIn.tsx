"use client";

import { motion } from "framer-motion";
import { useLayoutEffect, useState, type ReactNode } from "react";
import { EASE } from "./motion";

const MOBILE = "(max-width: 767px)";
const SHIFT = 34;

const motionTag = {
  div: motion.div,
  article: motion.article,
} as const;

type SlideTag = keyof typeof motionTag;

export function SlideIn({
  from,
  as = "div",
  className,
  children,
}: {
  from: "left" | "right";
  as?: SlideTag;
  className?: string;
  children: ReactNode;
}) {
  const [slide, setSlide] = useState(false);

  useLayoutEffect(() => {
    const mobile = window.matchMedia(MOBILE);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSlide(mobile.matches && !reduce.matches);
    update();
    mobile.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  if (!slide) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const Comp = motionTag[as];

  return (
    <Comp
      className={className ? `m-slide ${className}` : "m-slide"}
      initial={{ x: from === "left" ? -SHIFT : SHIFT, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "tween", duration: 0.48, ease: EASE }}
    >
      {children}
    </Comp>
  );
}
