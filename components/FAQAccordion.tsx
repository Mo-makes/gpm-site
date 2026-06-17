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
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const headingId = `faq-heading-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <h3>
              <button
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-brand-blue-light transition-colors"
              >
                <span className="font-semibold text-brand-navy text-sm pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 text-brand-blue transition-transform duration-200 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className="px-5 py-4 bg-white border-t border-gray-100 text-sm text-text-muted leading-relaxed"
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
