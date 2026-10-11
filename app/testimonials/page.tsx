import PageFrame from "@/components/PageFrame";
import Testimonials from "@/components/Testimonials";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/testimonials");

export default function TestimonialsPage() {
  return <PageFrame><main><Testimonials /></main></PageFrame>;
}
