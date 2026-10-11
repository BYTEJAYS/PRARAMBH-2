"use client";
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import SiteImage from './SiteImage';

const oldProjects = [
  { id: 0, title: 'PRARAMBH 51', copy: 'Aura of peaceful living\n3 BHK LAVISH DUPLEX', img: '/old-assets/build1.jpg', alt: 'PRARAMBH landscaped entrance', slug: 'prarambh-51', logo: '/old-assets/logo1.png' },
  { id: 1, title: 'PRARAMBH PRIDE', copy: 'An Adobe Of Peace & Serenity\n3 BHK LAVISH DUPLEX', img: '/old-assets/build2.jpg', alt: 'PRARAMBH residential architecture', slug: 'prarambh-pride', logo: '/old-assets/logo2_3.png' },
  { id: 2, title: 'PRARAMBH PRAGATI', copy: 'Live The Luxurious Life You Deserve\n3 BHK LAVISH DUPLEX', img: '/old-assets/prarambh_pragati.jpeg', alt: 'PRARAMBH Pragati duplex residences', slug: 'prarambh-pragati', logo: '/old-assets/logo2_3.png' },
  { id: 3, title: 'PRARAMBH PLAZA', copy: 'An Adobe like a Paradise\nLAVISH APARTMENTS', img: '/old-assets/build4.jpg', alt: 'PRARAMBH development view', slug: 'prarambh-plaza', logo: '/old-assets/logo4.png' }
];

export default function HybridHero() {
  const [open, setOpen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollPending = false;
    function syncScrollScene() {
      scrollPending = false;
      if (!stageRef.current) return;
      const offset = -stageRef.current.getBoundingClientRect().top;
      const shouldBeOpen = offset > window.innerHeight * 0.16;
      setOpen(shouldBeOpen);
    }
    const onScroll = () => {
      if (!scrollPending) { scrollPending = true; requestAnimationFrame(syncScrollScene); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    syncScrollScene();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="home-scroll-stage" ref={stageRef}>
      <div id="home" className="site-shell" data-open={open}>
        
        {/* The Old Selection Cards */}
        <section className="selection" id="work" aria-label="Our selection" inert={!open ? true : undefined}>
          {oldProjects.map((p) => (
            <Link
              key={p.id} 
              className="panel" 
              data-project={p.id}
              href={`/projects/${p.slug}`}
            >
              <SiteImage src={p.logo} alt={`${p.title} logo`} className="panel-center-logo" sizes="(max-width: 760px) 100px, 160px" />
              <span className="panel-title">{p.title}</span>
              <span className="panel-copy">
                {p.copy.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i === 0 && <br />}
                  </React.Fragment>
                ))}
              </span>
              <SiteImage src={p.img} alt={p.alt} sizes="(max-width: 760px) 90vw, 25vw" />
            </Link>
          ))}
        </section>

        {/* The Old Hero */}
        <div className="home-page" onClick={(e) => { if (open) { e.stopPropagation(); setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); } }}>

          <SiteImage src="/assets/flower_left.png" alt="" sizes="(max-width: 1250px) 28vw, 350px" style={{ position: 'absolute', bottom: 0, left: 0, width: 'min(28vw, 350px)', height: 'auto', pointerEvents: 'none', zIndex: 10, opacity: 0.85, mixBlendMode: 'multiply' }} />
          <SiteImage src="/assets/flower_right.png" alt="" sizes="(max-width: 1250px) 28vw, 350px" style={{ position: 'absolute', bottom: 0, right: 0, width: 'min(28vw, 350px)', height: 'auto', pointerEvents: 'none', zIndex: 10, opacity: 0.85, mixBlendMode: 'multiply' }} />

          <section className="hero" aria-label="PRARAMBH introduction">
            <div className="marquee" aria-hidden="true">
              <div className="marquee-track">
                <div className="marquee-group">
                  <span>PRARAMBH</span><span>PRARAMBH</span><span>PRARAMBH</span><span>PRARAMBH</span>
                </div>
                <div className="marquee-group" aria-hidden="true">
                  <span>PRARAMBH</span><span>PRARAMBH</span><span>PRARAMBH</span><span>PRARAMBH</span>
                </div>
              </div>
            </div>
            <button className="hero-image" aria-label="Explore PRARAMBH properties" onClick={(e) => { e.stopPropagation(); window.scrollBy({ top: window.innerHeight * 0.5, behavior: 'smooth' }); }}>
              <SiteImage src="/assets/homepage.jpeg" alt="PRARAMBH residential entrance and landscaped gardens in Vadodara" sizes="(max-width: 760px) 80vw, 50vw" preload />
            </button>
          </section>

          <footer className="bottom-bar">
            <div className="actions">
              <button className="selection-toggle" aria-expanded={open} aria-controls="work" onClick={(e) => { e.stopPropagation(); window.scrollBy({ top: window.innerHeight * (open ? -1 : 0.5), behavior: 'smooth' }); }}>
                Our Selection <span className="dot-grid" aria-hidden="true">⠿</span>
              </button>
            </div>
          </footer>
        </div>

      </div>
    </div>
  );
}
