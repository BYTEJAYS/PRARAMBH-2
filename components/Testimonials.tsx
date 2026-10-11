"use client";

import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";
import Breadcrumbs from "./Breadcrumbs";

const testimonials: Testimonial[] = [
  {
    text: "The handover was organised, transparent and remarkably calm. PRARAMBH paid attention to the details that matter once you actually start living there.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=85",
    name: "Aarohi Shah",
    role: "PRARAMBH Pride resident",
  },
  {
    text: "We wanted a home with good light, sensible planning and enough room for family life. It still feels considered in all the everyday moments.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=85",
    name: "Nisha Mehta",
    role: "PRARAMBH 51 resident",
  },
  {
    text: "The team listened before proposing anything. That clarity made the journey from first visit to possession feel genuinely trustworthy.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=85",
    name: "Riya Patel",
    role: "Homeowner, Vadodara",
  },
  {
    text: "It is easy to see the care in the material choices, circulation and shared spaces. This is architecture designed for real routines, not only first impressions.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=85",
    name: "Dhruv Desai",
    role: "PRARAMBH Plaza owner",
  },
  {
    text: "Our questions were answered with patience at every stage. The process had the same quiet precision as the home we received.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=85",
    name: "Kunal Iyer",
    role: "PRARAMBH Pride resident",
  },
  {
    text: "The planning gives our family privacy without making the home feel disconnected. It has become a place we look forward to returning to.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=85",
    name: "Ishita Rao",
    role: "Homeowner, Vadodara",
  },
  {
    text: "The common areas feel as thoughtfully resolved as the apartment. There is a sense of calm from the gate to our front door.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=85",
    name: "Viren Joshi",
    role: "PRARAMBH 51 resident",
  },
  {
    text: "Our home works beautifully for the way we host, work and spend time together. Nothing feels like an afterthought.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=85",
    name: "Arjun Trivedi",
    role: "Homeowner, Vadodara",
  },
  {
    text: "The finishes have a quiet quality to them. Months after moving in, we still notice small decisions that make daily life easier.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&q=85",
    name: "Kavya Bhatt",
    role: "PRARAMBH Pride resident",
  },
  {
    text: "It felt less like purchasing a unit and more like being guided toward the right long-term decision for our family.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=85",
    name: "Manav Kapoor",
    role: "PRARAMBH Plaza owner",
  },
  {
    text: "The design is generous without being excessive. It gives us flexibility now and confidence that the home will age well with us.",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=160&q=85",
    name: "Mitali Pandya",
    role: "Homeowner, Vadodara",
  },
];

const columns = [
  testimonials.slice(0, 3),
  testimonials.slice(3, 6),
  testimonials.slice(6, 9),
  testimonials.slice(9, 12),
];

export default function Testimonials() {
  return (
    <section className="testimonial-wall" aria-label="Resident testimonials">
      <div className="stories-heading"><Breadcrumbs items={[{ name: "Resident stories", href: "/testimonials" }]} /><h1>Resident stories.</h1><p>Experiences of homes, planning and everyday life with PRARAMBH GROUP in Vadodara.</p></div>
      <div className="testimonial-columns">
        {columns.map((column, index) => (
          <TestimonialsColumn
            className={`testimonial-column testimonial-column-${index + 1}`}
            testimonials={column}
            duration={18 + index * 3}
            renderCard={renderStoryCard}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

function renderStoryCard(testimonial: Testimonial, index: number) {
  return (
    <article className="resident-story-card" key={`${testimonial.name}-${index}`}>
      <span className="resident-story-quote" aria-hidden="true">“</span>
      <p>{testimonial.text}</p>
      <footer>
        <img src={testimonial.image} alt="" width={34} height={34} loading="lazy" decoding="async" />
        <span><b>{testimonial.name}</b><small>{testimonial.role}</small></span>
      </footer>
    </article>
  );
}
