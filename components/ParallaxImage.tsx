"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxImage({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-4%", "4%"]);
  const scale = useTransform(scrollYProgress, [0, .5, 1], reduceMotion ? [1, 1, 1] : [1.07, 1.02, 1.07]);
  return (
    <div ref={ref} className={`parallax-frame ${className}`}>
      <motion.img 
        src={src} 
        alt={alt} 
        style={{ y, scale }} 
        {...(priority ? {} : { loading: "lazy", decoding: "async" })} 
      />
    </div>
  );
}
