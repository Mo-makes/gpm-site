"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-line">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const headingId = `faq-heading-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={index} className="border-b border-line">
            <h3>
              <button
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-start justify-between gap-5 py-5 text-left"
              >
                <span
                  className="font-fraunces text-[1.12rem] text-ink leading-snug"
                  style={{ fontWeight: 560 }}
                >
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 mt-0.5 text-clay text-2xl leading-none transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className="pb-6 -mt-1 text-[0.95rem] text-body leading-relaxed max-w-2xl"
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
