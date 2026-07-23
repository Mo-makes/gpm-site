"use client";

import { useState, useEffect, useLayoutEffect, useCallback } from "react";
import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "@/lib/data/testimonials";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);

  useLayoutEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1
      );
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] gap-6"
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}% - ${
              (currentIndex * 24) / visibleCount
            }px))`,
          }}
          aria-live="polite"
          aria-atomic="true"
        >
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              aria-hidden={idx < currentIndex || idx >= currentIndex + visibleCount}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-5 mt-10">
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full border border-line-strong text-navy flex items-center justify-center hover:bg-navy hover:text-paper hover:border-navy transition-colors text-lg"
          aria-label="Previous testimonial"
        >
          ‹
        </button>
        <div className="flex gap-2.5" role="tablist" aria-label="Testimonial pagination">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className="p-2 flex items-center justify-center"
            >
              <span
                className={`h-2 rounded-full transition-all block ${
                  i === currentIndex ? "w-6 bg-clay" : "w-2 bg-line-strong"
                }`}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
        <button
          onClick={next}
          className="w-11 h-11 rounded-full border border-line-strong text-navy flex items-center justify-center hover:bg-navy hover:text-paper hover:border-navy transition-colors text-lg"
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </div>
  );
}
