"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SiteImage from "./SiteImage";

export default function BlueprintReveal() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const raw = (window.innerHeight - rect.top) / (window.innerHeight + rect.height * .45);
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <section className="blueprint" ref={ref}>
      <div className="blueprint-sticky">
        <div className="blueprint-media">
          <SiteImage className="blueprint-base" src="/assets/build2.png" alt="Prarambh Pride duplex architecture in Vadodara" sizes="(max-width: 760px) 100vw, 60vw" />
          <div className="blueprint-final" style={{ clipPath: `inset(0 ${100 - progress * 100}% 0 0)` }}><SiteImage src="/assets/build2.png" alt="" sizes="(max-width: 760px) 100vw, 60vw" /></div>
          <div className="blueprint-grid" />
        </div>
        <div className="blueprint-copy">
          <h2>From line.<br /><em>To life.</em></h2>
          <div className="blueprint-meter"><span style={{ width: `${progress * 100}%` }} /></div>
          <p>Every home begins as a measured idea. Scroll to move from architectural intent to a place made for living.</p>
        </div>
      </div>
    </section>
  );
}
