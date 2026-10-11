import Link from "next/link";
import PageFrame from "@/components/PageFrame";
import { projects } from "@/lib/site-data";
import Breadcrumbs from "@/components/Breadcrumbs";
import SiteImage from "@/components/SiteImage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/projects");

export default function ProjectsPage() {
  return <PageFrame><main className="inner-page">
    <section className="inner-hero"><Breadcrumbs items={[{ name: "Projects", href: "/projects" }]} /><h1>Places with<br /><em>purpose.</em></h1><span>3 BHK duplex homes and mixed-use developments in Waghodia, Vadodara.</span></section>
    <section className="projects-archive section-pad">
      <div className="archive-head"><p>Compare our Vadodara communities, explore the architecture and amenities, and download the brochure for the project that interests you.</p></div>
      {projects.map((project) => <Link className="archive-project" href={`/projects/${project.slug}`} key={project.slug}><span>{project.accent}</span><div><p>{project.type}</p><h2>{project.name}</h2><small>{project.location}</small></div><SiteImage src={project.hero} alt={`${project.name} in ${project.location}`} sizes="(max-width: 760px) 80vw, 320px" /><b>Explore ↗</b></Link>)}
    </section>
  </main></PageFrame>;
}
