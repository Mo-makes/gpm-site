import type { Testimonial } from "@/lib/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="card p-7 flex flex-col h-full">
      <span
        className="font-fraunces text-clay text-[3.5rem] leading-[0.4] h-7 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <blockquote className="mt-4 text-body leading-relaxed text-[0.97rem] flex-grow">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 pt-5 border-t border-line flex items-center gap-3">
        <span
          className="w-10 h-10 rounded-full bg-navy text-paper flex items-center justify-center font-hanken text-[0.78rem] font-semibold shrink-0"
          aria-hidden="true"
        >
          {testimonial.reviewerInitials}
        </span>
        <div>
          <p className="font-hanken text-[0.9rem] font-semibold text-ink">
            {testimonial.reviewerDisplay}
          </p>
          <p className="text-[0.7rem] uppercase tracking-[0.13em] text-brass-ink">
            Verified patient
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
