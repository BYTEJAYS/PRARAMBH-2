import PageFrame from "@/components/PageFrame";
import ParallaxImage from "@/components/ParallaxImage";
import TextRollStats from "@/components/TextRollStats";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/about");

export default function AboutPage() {
  return <PageFrame><main className="inner-page">
    <section className="inner-hero about-hero"><Breadcrumbs items={[{ name: "About", href: "/about" }]} /><h1>Experience<br /><em>with intention.</em></h1><span>PRARAMBH GROUP: 15+ years of shaping homes and mixed-use spaces in and around Vadodara.</span></section>
    <section className="about-manifesto section-pad"><h2>A local understanding.<br />A long view.</h2><div><p>PRARAMBH GROUP’s work begins with the realities of place — the land, climate, neighbourhood and the lives that will unfold there.</p><p>Across more than fifteen years, that foundation has grown into a body of residential and mixed-use work grounded in trust, clarity and enduring value.</p></div></section>
    <section className="about-image"><ParallaxImage className="about-parallax" src="/assets/build1.png" alt="Prarambh 51 entrance" /><p>We do not merely create buildings. We shape the threshold between architecture and everyday life.</p></section>
    <TextRollStats />
    <section className="philosophy section-pad"><h2>Real estate<br /><em>as craft.</em></h2><div><p>Understand before drawing.</p><p>Build for the life beyond handover.</p><p>Let detail carry the promise.</p></div></section>
  </main></PageFrame>;
}
