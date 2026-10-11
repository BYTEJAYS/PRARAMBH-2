import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, business } from "./site-config";
import type { Project } from "./site-data";

type PageDetails = { title: string; description: string; index?: boolean };

export const seoPages: Record<string, PageDetails> = {
  "/": {
    title: "PRARAMBH GROUP | Real Estate Developers in Vadodara",
    description: "Explore PRARAMBH GROUP’s 3 BHK duplex homes and mixed-use projects in Waghodia, Vadodara. View project details, brochures and arrange a site visit.",
  },
  "/about": {
    title: "About PRARAMBH GROUP | Vadodara Property Developers",
    description: "Discover PRARAMBH GROUP’s 15+ years of residential and mixed-use development in Vadodara, with a focus on thoughtful planning and lasting value.",
  },
  "/contact": {
    title: "Contact PRARAMBH GROUP | Property Enquiries in Vadodara",
    description: "Contact PRARAMBH GROUP in Waghodia, Vadodara for home and commercial property enquiries. Call +91 99789 48105 or arrange a project site visit.",
  },
  "/gallery": {
    title: "Project Gallery | PRARAMBH GROUP, Vadodara",
    description: "View architecture, landscaped spaces and amenities across Prarambh 51, Pride, Pragati and Plaza in Waghodia, Vadodara.",
  },
  "/projects": {
    title: "Duplex Homes & Property Projects in Vadodara | PRARAMBH GROUP",
    description: "Explore Prarambh 51, Pride, Pragati and Plaza: 3 BHK duplex homes and mixed-use developments in Waghodia, Vadodara. View details and brochures.",
  },
  "/team": {
    title: "Our Team | PRARAMBH GROUP, Vadodara",
    description: "Meet the people behind PRARAMBH GROUP’s real estate developments in Vadodara. Team profiles are being prepared.",
    index: false,
  },
  "/testimonials": {
    title: "Resident Stories | PRARAMBH GROUP, Vadodara",
    description: "Read resident and property owner experiences from Prarambh 51, Pride and Plaza, with stories of homes, planning and life in Vadodara.",
  },
};

function createMetadata(path: string, details: PageDetails): Metadata {
  const url = new URL(path, SITE_URL).href;
  const image = `${SITE_URL}/opengraph-image`;
  return {
    title: details.title,
    description: details.description,
    alternates: { canonical: url },
    ...(details.index === false ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      url,
      title: details.title,
      description: details.description,
      images: [{ url: image, width: 1200, height: 630, alt: "PRARAMBH GROUP — Real estate developers in Vadodara" }],
    },
    twitter: {
      card: "summary_large_image",
      title: details.title,
      description: details.description,
      images: [image],
    },
  };
}

export function pageMetadata(path: keyof typeof seoPages): Metadata {
  return createMetadata(path, seoPages[path]);
}

export function projectMetadata(project: Project): Metadata {
  const propertyType = project.type.startsWith("3 BHK") ? "3 BHK Duplex" : "Mixed-use Property";
  return createMetadata(`/projects/${project.slug}`, {
    title: `${project.name} | ${propertyType} in Vadodara`,
    description: `Explore ${project.name}, ${project.type.toLowerCase()} on ${project.location}. View details, download the brochure and arrange a site visit.`,
  });
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/logo.png`, width: 500, height: 360 },
  description: seoPages["/"].description,
  telephone: business.telephone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.streetAddress,
    addressLocality: business.city,
    addressRegion: business.region,
    addressCountry: business.country,
  },
  areaServed: { "@type": "City", name: business.city },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Property enquiries",
    telephone: business.telephone,
    email: business.email,
    areaServed: "IN",
    availableLanguage: "English",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: "Prarambh Group Vadodara",
  url: SITE_URL,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function projectSchema(project: Project) {
  const url = `${SITE_URL}/projects/${project.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${url}#project`,
    name: project.name,
    description: `${project.type}. ${project.description} ${project.detail}`,
    url,
    image: `${SITE_URL}${project.hero}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: project.location.split(",")[0],
      addressLocality: business.city,
      addressRegion: business.region,
      addressCountry: business.country,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}
