"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SiteImage from "./SiteImage";

export default function ParallaxImage({ src, alt, className = "", sizes = "(max-width: 760px) 100vw, 60vw", preload = false }: { src: string; alt: string; className?: string; sizes?: string; preload?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-4%", "4%"]);
  const scale = useTransform(scrollYProgress, [0, .5, 1], reduceMotion ? [1, 1, 1] : [1.07, 1.02, 1.07]);
  return <div ref={ref} className={`parallax-frame ${className}`}><motion.div className="parallax-media" style={{ y, scale }}><SiteImage src={src} alt={alt} fill sizes={preload ? "100vw" : sizes} preload={preload} style={{ objectFit: "cover" }} /></motion.div></div>;
}
