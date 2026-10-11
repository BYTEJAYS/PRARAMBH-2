"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

const revealSelectors = [
  ".section-index",
  "section h2",
  ".statement-aside",
  ".story-copy > p:not(.section-index)",
  ".stats-row > div",
  ".project-row",
  ".future-drawing",
  ".gallery-tile",
  ".principles-grid li",
  ".archive-project",
  ".project-facts > div",
  ".timeline article",
  ".team-silhouette",
  ".exhibit",
  ".contact-form label",
  ".contact-details > div",
  ".footer-links",
  ".footer-contact",
].join(",");

export default function MotionSystem({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: .35 });

  useEffect(() => {
    if (reduceMotion) return;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        const siblings = element.parentElement ? Array.from(element.parentElement.children) : [];
        const order = Math.max(0, siblings.indexOf(element));
        element.animate([
          { opacity: 0, transform: "translate3d(0, 34px, 0)", filter: "blur(5px)" },
          { opacity: 1, transform: "translate3d(0, 0, 0)", filter: "blur(0)" },
        ], {
          duration: 780,
          delay: Math.min(order * 70, 280),
          easing: "cubic-bezier(.22, 1, .36, 1)",
          fill: "both",
        });
        observer.unobserve(element);
      }
    }, { threshold: .12, rootMargin: "0px 0px -7% 0px" });
    nodes.forEach((node) => observer.observe(node));

    const interactive = Array.from(document.querySelectorAll<HTMLElement>(".project-row, .archive-project, .gallery-tile, .exhibit"));
    const cleanups = interactive.map((element) => {
      let rect: DOMRect | null = null;
      const onEnter = () => { rect = element.getBoundingClientRect(); };
      const onMove = (event: PointerEvent) => {
        if (event.pointerType === "touch" || !rect) return;
        element.style.setProperty("--motion-x", `${((event.clientX - rect.left) / rect.width - .5) * 10}px`);
        element.style.setProperty("--motion-y", `${((event.clientY - rect.top) / rect.height - .5) * 8}px`);
      };
      const onLeave = () => { rect = null; element.style.setProperty("--motion-x", "0px"); element.style.setProperty("--motion-y", "0px"); };
      element.addEventListener("pointerenter", onEnter);
      element.addEventListener("pointermove", onMove);
      element.addEventListener("pointerleave", onLeave);
      return () => { element.removeEventListener("pointerenter", onEnter); element.removeEventListener("pointermove", onMove); element.removeEventListener("pointerleave", onLeave); };
    });
    return () => { observer.disconnect(); cleanups.forEach((cleanup) => cleanup()); };
  }, [reduceMotion]);

  return (
    <>
      {!reduceMotion && <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />}
      <div className="motion-root">{children}</div>
    </>
  );
}
