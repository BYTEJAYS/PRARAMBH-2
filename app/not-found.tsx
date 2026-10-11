import Link from "next/link";
import PageFrame from "@/components/PageFrame";

export const metadata = {
  title: "Page Not Found | PRARAMBH GROUP",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <PageFrame><main className="inner-page">
    <section className="inner-hero">
      <p>404</p><h1>Page not found.</h1>
      <span>Explore our Vadodara projects or contact the team to find what you are looking for.</span>
      <Link className="outline-button" href="/projects">Explore projects <span>↗</span></Link>
      <Link className="text-link" href="/">Return home <span>↗</span></Link>
    </section>
  </main></PageFrame>;
}
