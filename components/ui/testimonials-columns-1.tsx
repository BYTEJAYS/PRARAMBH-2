"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

type TestimonialsColumnProps = {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
  renderCard?: (testimonial: Testimonial, index: number) => ReactNode;
};

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 16,
  renderCard,
}: TestimonialsColumnProps) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-5 pb-5"
      >
        {[...testimonials, ...testimonials].map((testimonial, index) =>
          renderCard ? renderCard(testimonial, index) : <DefaultCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />,
        )}
      </motion.div>
    </div>
  );
}

function DefaultCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-3xl border border-border bg-background p-8 shadow-lg shadow-primary/10">
      <p>{testimonial.text}</p>
      <div className="mt-5 flex items-center gap-3">
        <img className="h-10 w-10 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} loading="lazy" decoding="async" />
        <div>
          <p className="font-medium leading-5">{testimonial.name}</p>
          <p className="leading-5 opacity-60">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
