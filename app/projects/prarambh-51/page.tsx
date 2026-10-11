import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/lib/site-data";
import { projectMetadata } from "@/lib/seo";

export const metadata = projectMetadata(projects[0]);

export default function Page() { return <ProjectDetail project={projects[0]} />; }
