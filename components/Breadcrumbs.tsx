import Link from "next/link";
import JsonLd from "./JsonLd";
import { SITE_URL } from "@/lib/site-config";

export default function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const trail = [{ name: "Home", href: "/" }, ...items];
  return <>
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>{trail.map((item, index) => <li key={item.href}>
        {index === trail.length - 1 ? <span aria-current="page">{item.name}</span> : <Link href={item.href}>{item.name}</Link>}
      </li>)}</ol>
    </nav>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: trail.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: new URL(item.href, SITE_URL).href,
      })),
    }} />
  </>;
}
