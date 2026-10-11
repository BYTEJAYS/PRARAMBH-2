import Link from "next/link";
import PageFrame from "@/components/PageFrame";
import { projects, completedProjects } from "@/lib/site-data";
import Breadcrumbs from "@/components/Breadcrumbs";
import SiteImage from "@/components/SiteImage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/projects");

export default function ProjectsPage() {
  return <PageFrame><main className="inner-page">
    <section className="inner-hero"><Breadcrumbs items={[{ name: "Projects", href: "/projects" }]} /><h1>Places with<br /><em>purpose.</em></h1><span>3 BHK duplex homes and mixed-use developments in Waghodia, Vadodara.</span></section>
    <section className="projects-archive section-pad">
      <div className="archive-head"><p>UPCOMING PROJECTS</p></div>
      {projects.map((project) => <Link className="archive-project" href={`/projects/${project.slug}`} key={project.slug}><span>{project.accent}</span><div><p>{project.type}</p><h2>{project.name}</h2><small>{project.location}</small></div><SiteImage src={project.hero} alt={`${project.name} in ${project.location}`} sizes="(max-width: 760px) 80vw, 320px" /><b>Explore ↗</b></Link>)}

      <div className="archive-head" style={{ marginTop: '120px' }}><p>COMPLETED PROJECTS</p></div>
      {completedProjects.map((project) => <div className="archive-project" key={project.slug}><span>{project.accent}</span><div><p>{project.type}</p><h2>{project.name}</h2><small>{project.location}</small></div><SiteImage src={project.hero} alt={project.name} sizes="(max-width: 760px) 80vw, 320px" className="w-full" style={{ height: 'auto', maxHeight: '350px', objectFit: 'contain' }} /></div>)}
    </section>
  </main></PageFrame>;
}
