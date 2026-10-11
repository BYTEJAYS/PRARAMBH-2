import PageFrame from "@/components/PageFrame";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/team");

export default function TeamPage() {
  return <PageFrame><main className="inner-page">
    <section className="inner-hero team-hero"><Breadcrumbs items={[{ name: "Team", href: "/team" }]} /><h1>Human judgment.<br /><em>Shared purpose.</em></h1><span>Real team profiles will be added when approved.</span></section>
    <section className="team-placeholder section-pad"><div className="team-silhouette"><span>01</span><div><h2>Leadership profile</h2><p>Name, role, portrait and biography coming soon.</p></div></div><div className="team-silhouette"><span>02</span><div><h2>Design & development</h2><p>Verified team information coming soon.</p></div></div><div className="team-silhouette"><span>03</span><div><h2>Client relationships</h2><p>Verified team information coming soon.</p></div></div></section>
  </main></PageFrame>;
}
