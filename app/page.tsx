import Link from "next/link";
import PageFrame from "@/components/PageFrame";
import BlueprintReveal from "@/components/BlueprintReveal";
import ParallaxImage from "@/components/ParallaxImage";
import HybridHero from "@/components/HybridHero";
import SiteImage from "@/components/SiteImage";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, websiteSchema } from "@/lib/seo";
import { galleryImages } from "@/lib/site-data";
import "./old-home.css"; // Ensure old CSS is loaded

export const metadata = pageMetadata("/");

export default function Home() {
  return (
    <PageFrame>
      <JsonLd data={websiteSchema} />
      <main>
        
        {/* OLD PRARAMBH HERO & CARDS */}
        <HybridHero />

        {/* REST OF PRARAMBH 2.0 (FROM DOWNWARDS) */}
        <section className="statement section-pad">
          <div className="statement-grid">
            <h1 className="home-search-heading">Real estate developers<br /><em>in Vadodara.</em></h1>
            <div className="statement-aside"><span className="lotus-mark">✦</span><p>For more than 15 years, PRARAMBH GROUP has shaped homes and mixed-use spaces in Vadodara. Explore our 3 BHK duplex communities and commercial addresses around Waghodia.</p><Link className="text-link" href="/projects">Explore our projects <span>↗</span></Link></div>
          </div>
        </section>

        <section className="story-split">
          <div className="story-image"><ParallaxImage className="story-parallax" src="/assets/temple_pool.jpg" alt="Prarambh temple architecture" /></div>
          <div className="story-copy"><h2>Every project begins with a simple belief.</h2><p>The spaces we build become part of people’s lives. That responsibility asks for care at every scale — from the first line on paper to the feeling of arriving home.</p></div>
        </section>

        <section className="legacy section-pad">
          <div className="legacy-top"><h2>Experience gives<br /><em>form to trust.</em></h2><p>Measured not in noise, but in relationships sustained, neighbourhoods shaped and the quiet confidence to keep evolving.</p></div>
          <div className="stats-row"><div><strong>15<span>+</span></strong><p>Years of<br />experience</p></div><div><strong>1000<span>+</span></strong><p>Clients<br />served</p></div><div><strong>04</strong><p>Documented<br />developments</p></div><div><strong>01</strong><p>Shared<br />standard</p></div></div>
        </section>



        <BlueprintReveal />

        <section className="future section-pad">
          <div className="future-copy"><h2>The next chapter is<br /><em>being drawn.</em></h2><p>Future PRARAMBH developments will be revealed here when their plans and materials are ready to share.</p></div>
          <div className="future-drawing" aria-label="Upcoming project concept"><span className="drawing-floor f1" /><span className="drawing-floor f2" /><span className="drawing-floor f3" /><span className="drawing-floor f4" /><b>Details coming soon</b></div>
        </section>

        <section className="gallery-preview section-pad">
          <div className="gallery-head"><div><h2>Made to be<br /><em>experienced.</em></h2></div></div>
          <div className="gallery-strip">{galleryImages.slice(0, 4).map((image, index) => <figure key={image.src} className={`gallery-tile tile-${index + 1}`}><SiteImage src={image.src} alt={`${image.project} ${image.category.toLowerCase()} in Vadodara`} sizes="(max-width: 760px) 90vw, 35vw" /><figcaption><span>{image.project}</span><b>{image.category}</b></figcaption></figure>)}</div>
        </section>

        <section className="principles section-pad">
          <div className="principles-grid"><h2>Why<br /><em>PRARAMBH.</em></h2><ol><li><span>01</span><div><h3>Experience, applied.</h3><p>15+ years of learning translated into clearer decisions and considered delivery.</p></div></li><li><span>02</span><div><h3>Attention at every scale.</h3><p>From neighbourhood planning to the detail you touch every day.</p></div></li><li><span>03</span><div><h3>Built for real life.</h3><p>Architecture that makes room for people, routines and generations.</p></div></li></ol></div>
        </section>

        <section className="final-cta"><h2>Let’s build<br /><em>what comes next.</em></h2><p>Tell us what you’re looking for.</p><Link className="outline-button" href="/contact">Start a conversation <span>↗</span></Link></section>
      </main>
    </PageFrame>
  );
}
