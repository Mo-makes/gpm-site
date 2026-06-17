import type { Testimonial } from "@/lib/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const formattedDate = testimonial.date
    ? new Date(testimonial.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
    : null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 flex flex-col h-full">
      <StarRating rating={testimonial.rating} />
      <blockquote className="mt-4 text-text-primary leading-relaxed text-sm flex-grow">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="text-white text-xs font-bold">
              {testimonial.reviewerInitials}
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-navy">
              {testimonial.reviewerDisplay}
            </p>
            {formattedDate && (
              <p className="text-xs text-text-muted">{formattedDate}</p>
            )}
          </div>
        </div>
        {testimonial.source && (
          <span className="text-xs font-medium text-text-muted bg-gray-50 px-2 py-1 rounded">
            {testimonial.source}
          </span>
        )}
      </div>
    </div>
  );
}
