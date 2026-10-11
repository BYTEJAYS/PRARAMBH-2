export type Project = {
  slug: string;
  name: string;
  type: string;
  location: string;
  description: string;
  hero: string;
  square: string;
  brochure: string;
  accent: string;
  detail: string;
  featureLabel?: string;
  featureTitle?: string;
  featureDetail?: string;
};

export const projects: Project[] = [
  {
    slug: "prarambh-51",
    name: "Prarambh 51",
    type: "3 BHK Lavish Duplex",
    location: "Waghodia Main Road, Vadodara",
    description: "A residential community shaped around generous homes, landscaped edges and a distinctive brick gateway.",
    hero: "/assets/build1.png",
    square: "/assets/buildsquare1.jpeg",
    brochure: "/assets/Brochure-1.pdf",
    accent: "01",
    detail: "Brick, shade and landscape come together in a calm arrival sequence that gives the community its identity.",
  },
  {
    slug: "prarambh-pride",
    name: "Prarambh Pride",
    type: "3 BHK Lavish Duplex",
    location: "Alva Road, Waghodia, Vadodara",
    description: "A considered duplex community with clean contemporary geometry, warm brick surfaces and landscaped open spaces.",
    hero: "/assets/build2.png",
    square: "/assets/buildsquare2.jpeg",
    brochure: "/assets/brochure-2.pdf",
    accent: "02",
    detail: "A measured architectural rhythm creates privacy, openness and a strong sense of neighbourhood.",
  },
  {
    slug: "prarambh-pragati",
    name: "Prarambh Pragati",
    type: "3 BHK Lavish Duplex",
    location: "Alva Road, Waghodia Road, Vadodara",
    description: "A generous duplex community designed around comfort, landscaped gathering spaces and a fuller way of living.",
    hero: "/assets/prarambh-pragati-homes.jpg",
    square: "/assets/prarambh-pragati-amenities.jpg",
    brochure: "/assets/prarambh-pragati-brochure.pdf",
    accent: "03",
    detail: "Fifty-three residences are arranged around a landscaped common plot, bringing private family homes and shared recreation into one considered neighbourhood.",
    featureLabel: "Amenities",
    featureTitle: "Space to gather and slow down.",
    featureDetail: "A lotus pond, multi-storey clubhouse, swimming pool, gym, library, gazebo, children's play area and senior seating create room for every generation.",
  },
  {
    slug: "prarambh-plaza",
    name: "Prarambh Plaza",
    type: "Mixed-use Development",
    location: "Alva Road, Waghodia, Vadodara",
    description: "A mixed-use address bringing everyday commerce and compact residences into one clear architectural composition.",
    hero: "/assets/build4.png",
    square: "/assets/buildsquare4.jpeg",
    brochure: "/assets/brochure-4.pdf",
    accent: "04",
    detail: "A street-facing commercial base anchors a disciplined residential facade above.",
  },
];

export const completedProjects: Project[] = [
  { slug: "asha-enclave", name: "Asha Enclave", type: "Residential", location: "Vadodara", description: "", hero: "/assets/asha-enclave.png", square: "", brochure: "", accent: "05", detail: "" },
  { slug: "shree-hari-complex", name: "Shree Hari Complex", type: "Commercial & Residential", location: "Vadodara", description: "", hero: "/assets/shree-hari-complex.png", square: "", brochure: "", accent: "06", detail: "" },
  { slug: "amadius-elite", name: "Amadius Elite", type: "Premium Apartments", location: "Vadodara", description: "", hero: "/assets/amadius-elite.png", square: "", brochure: "", accent: "07", detail: "" },
  { slug: "swastik-residency", name: "Swastik Residency", type: "Residential", location: "Vadodara", description: "", hero: "/assets/swastik-residency.png", square: "", brochure: "", accent: "08", detail: "" },
  { slug: "vinayak-residency", name: "Vinayak Residency", type: "Residential", location: "Vadodara", description: "", hero: "/assets/vinayak-residency.png", square: "", brochure: "", accent: "09", detail: "" },
];

export const galleryImages = [
  { src: "/assets/build3.png", project: "Prarambh 51", category: "Architecture" },
  { src: "/assets/buildsquare2.jpeg", project: "Prarambh Pride", category: "Arrival" },
  { src: "/assets/prarambh-pragati-homes.jpg", project: "Prarambh Pragati", category: "Architecture" },
  { src: "/assets/build4.png", project: "Prarambh Plaza", category: "Architecture" },
  { src: "/assets/build2.png", project: "Prarambh Pride", category: "Landscape" },
  { src: "/assets/prarambh-pragati-amenities.jpg", project: "Prarambh Pragati", category: "Amenities" },
  { src: "/assets/buildsquare1.jpeg", project: "Prarambh 51", category: "Arrival" },
  { src: "/assets/buildsquare4.jpeg", project: "Prarambh Plaza", category: "Architecture" },
  { src: "/assets/gallery1.png", project: "Prarambh Pragati", category: "Amenities" },
  { src: "/assets/gallery2.png", project: "Prarambh Pragati", category: "Architecture" },
  { src: "/assets/gallery3.jpg", project: "Prarambh Pragati", category: "Amenities" },
  { src: "/assets/gallery4.png", project: "Prarambh Pragati", category: "Landscape" },
  { src: "/assets/gallery5.jpg", project: "Prarambh Pragati", category: "Amenities" },
];
