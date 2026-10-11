import Link from "next/link";
import PageFrame from "./PageFrame";
import type { Project } from "@/lib/site-data";
import ParallaxImage from "./ParallaxImage";
import Breadcrumbs from "./Breadcrumbs";
import JsonLd from "./JsonLd";
import { projectSchema } from "@/lib/seo";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <PageFrame>
      <JsonLd data={projectSchema(project)} />
      <main className="inner-page">
        <section className="project-hero">
          <ParallaxImage className="project-hero-media" src={project.hero} alt={`${project.name} ${project.type.toLowerCase()} in Vadodara`} preload />
          <div className="project-hero-shade" />
          <div className="project-hero-copy"><Breadcrumbs items={[{ name: "Projects", href: "/projects" }, { name: project.name, href: `/projects/${project.slug}` }]} /><p>{project.type}</p><h1>{project.name}</h1><span>{project.location}</span></div>
        </section>
        <section className="project-intro section-pad">
          <p className="section-index">Project {project.accent}</p>
          <div><h2>{project.description}</h2><p>{project.detail}</p></div>
        </section>
        <section className="project-facts section-pad">
          <div><span>Typology</span><strong>{project.type}</strong></div><div><span>Location</span><strong>{project.location}</strong></div><div><span>Information</span><strong>Brochure available</strong></div>
        </section>
        <section className="project-architecture">
          <div className="project-architecture-image"><ParallaxImage className="project-detail-parallax" src={project.square} alt={`${project.name} architectural detail`} /></div>
          <div className="project-architecture-copy"><p className="section-index">{project.featureLabel ?? "Architecture"}</p><h2>{project.featureTitle ? project.featureTitle : <>Material, light<br />and <em>everyday life.</em></>}</h2><p>{project.featureDetail ?? "The supplied architectural renders show a language of warm brick, carefully framed openings, shaded thresholds and landscape woven into the arrival experience."}</p><a className="solid-button" href={project.brochure} target="_blank" rel="noreferrer">View brochure <span>↗</span></a></div>
        </section>
        <section className="project-enquire"><p>Experience it in person.</p><h2>Walk through<br /><em>{project.name}.</em></h2><Link className="outline-button" href="/contact">Book a visit <span>↗</span></Link></section>
      </main>
    </PageFrame>
  );
}
