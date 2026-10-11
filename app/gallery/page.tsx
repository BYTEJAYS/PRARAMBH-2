import PageFrame from "@/components/PageFrame";
import GalleryExperience from "@/components/GalleryExperience";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/gallery");

export default function GalleryPage() {
  return <PageFrame><main className="inner-page">
    <section className="inner-hero gallery-hero"><Breadcrumbs items={[{ name: "Gallery", href: "/gallery" }]} /><h1>Light. Material.<br /><em>Life.</em></h1><span>Architecture, landscape and amenities from PRARAMBH GROUP’s projects in Vadodara.</span></section>
    <section className="gallery-page section-pad"><GalleryExperience /></section>
  </main></PageFrame>;
}
