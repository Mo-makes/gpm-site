import type { Metadata } from "next";
import Link from "next/link";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ConditionCard from "@/components/ConditionCard";
import FAQAccordion from "@/components/FAQAccordion";
import StickyCallBar from "@/components/StickyCallBar";
import { conditions } from "@/lib/data/conditions";

export const metadata: Metadata = {
  title: "Conditions We Treat | Pain Management Pasadena, MD",
  description:
    "Global Pain Management treats back pain, neck pain, arthritis, sciatica, headaches, cancer pain, workers' comp injuries, auto accident injuries, and more. Serving Pasadena, Kent Island, and Columbia, MD.",
  alternates: { canonical: "https://globalpainmd.com/conditions" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://globalpainmd.com" },
    { "@type": "ListItem", position: 2, name: "Conditions We Treat", item: "https://globalpainmd.com/conditions" },
  ],
};

const conditionFaqs = [
  {
    question: "What types of pain do pain management specialists treat?",
    answer:
      "Pain management specialists treat a broad spectrum of acute and chronic pain conditions — including back and neck pain, herniated discs, arthritis, sciatica, headaches and migraines, nerve pain, muscle pain, cancer pain, fibromyalgia, and pain resulting from injuries such as auto accidents and workplace incidents.",
  },
  {
    question: "When should I see a pain management specialist?",
    answer:
      "You should consider seeing a pain management specialist when your pain has lasted more than a few weeks, has not responded to primary care treatment, is limiting your daily activities or sleep, or requires stronger pain management than your primary care provider can offer. Specialist care is also appropriate after surgery, following an injury, or when a specific diagnosis (like a herniated disc or arthritis) needs targeted treatment.",
  },
  {
    question: "Can a pain management doctor help with nerve pain?",
    answer:
      "Yes. Nerve pain (neuropathy, sciatica, radiculopathy) is one of the most common conditions treated by pain management specialists. We offer nerve blocks, epidural steroid injections, radiofrequency ablation, and medication management targeted at nerve-related pain.",
  },
  {
    question: "Do you treat patients with opioid prescriptions from another doctor?",
    answer:
      "We evaluate each patient individually. If you are currently managed on opioid medications by another provider, we will review your history and determine the appropriate course of care. We prioritize using the least restrictive, most effective treatment options for each patient.",
  },
  {
    question: "Is pain management only for older adults?",
    answer:
      "Not at all. Pain management care is appropriate for adults of any age who are experiencing acute or chronic pain. We see patients across a wide age range for conditions including sports injuries, occupational injuries, degenerative conditions, and more.",
  },
];

// FAQ JSON-LD for conditions page
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: conditionFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ConditionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        <HeroSection
          headline="Conditions We Treat"
          subheadline="Experience a world of difference. Our board-certified team treats a comprehensive range of acute and chronic pain conditions — from everyday back pain to complex, long-term conditions that have resisted other treatment."
          primaryCta={{ label: "Request Appointment", href: "/contact" }}
          secondaryCta={{ label: "View Procedures", href: "/procedures" }}
        />

        <section className="bg-white py-16 lg:py-20" aria-labelledby="conditions-list-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-brand-blue-light text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
                All Conditions
              </span>
              <h2
                id="conditions-list-heading"
                className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Comprehensive Pain Management Care
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
                Select a condition below to learn more about how we diagnose
                and treat it.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {conditions.map((condition) => (
                <ConditionCard key={condition.slug} condition={condition} />
              ))}
            </div>

            <div className="mt-12 bg-brand-cream rounded-2xl p-8 text-center">
              <p className="text-text-muted mb-4 text-sm leading-relaxed">
                Don&apos;t see your condition listed? We treat many additional
                pain conditions not listed here. Call us to discuss whether we
                can help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:4438254050"
                  className="bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  Call (443) 825-4050
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-brand-blue text-brand-blue px-5 py-2.5 rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-colors text-sm"
                >
                  Request Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-brand-cream py-16 lg:py-20" aria-labelledby="conditions-faq-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2
                id="conditions-faq-heading"
                className="text-3xl font-bold text-brand-navy"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion faqs={conditionFaqs} />
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
