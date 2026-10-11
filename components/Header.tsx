"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SiteImage from "./SiteImage";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 42);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  const close = () => setOpen(false);
  return (
    <>
      <motion.header
        className={`site-header ${scrolled ? "is-scrolled" : ""}`}
        initial={reduceMotion ? false : { y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .9, delay: .45, ease: [.22, 1, .36, 1] }}
      >
        <Link className="brand" href="/" aria-label="PRARAMBH GROUP home" onClick={close}>
          <SiteImage src="/assets/logo.png" alt="" sizes="84px" loading="eager" />
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/projects">Projects</Link><Link href="/about">About</Link><Link href="/testimonials">Stories</Link><Link href="/team">Team</Link><Link href="/gallery">Gallery</Link><Link href="/contact">Contact</Link>
        </nav>

        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"><i /><i /></button>
      </motion.header>
      <AnimatePresence>
        {open && <motion.div
          className="mobile-menu is-open"
          aria-hidden={!open}
          initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: .62, ease: [.76, 0, .24, 1] }}
        >
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .24 }}>Explore PRARAMBH</motion.p>
          <nav aria-label="Mobile navigation">
            {[ ["01", "Projects", "/projects"], ["02", "About", "/about"], ["03", "Stories", "/testimonials"], ["04", "Team", "/team"], ["05", "Gallery", "/gallery"], ["06", "Contact", "/contact"] ].map(([number, label, href], index) => (
              <motion.div key={href} initial={reduceMotion ? false : { opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .18 + index * .06, duration: .55, ease: [.22, 1, .36, 1] }}>
                <Link onClick={close} href={href}><span>{number}</span>{label}</Link>
              </motion.div>
            ))}
          </nav>
          <motion.small initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>Vadodara, Gujarat · +91 99789 48105</motion.small>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}
