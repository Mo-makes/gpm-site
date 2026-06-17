"use client";

import React, { useEffect, useRef, type ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  /** CSS class that controls the reveal direction: reveal | reveal-left | reveal-right | reveal-scale */
  variant?: "reveal" | "reveal-left" | "reveal-right" | "reveal-scale";
  /** Delay before the animation fires (ms) */
  delay?: number;
  /** IntersectionObserver threshold (0–1) */
  threshold?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function AnimateOnScroll({
  children,
  className = "",
  variant = "reveal",
  delay = 0,
  threshold = 0.12,
  as: Tag = "div",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add("is-visible"), delay);
          } else {
            el.classList.add("is-visible");
          }
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    // @ts-expect-error polymorphic ref
    <Tag ref={ref} className={`${variant} ${className}`}>
      {children}
    </Tag>
  );
}
