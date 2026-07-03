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
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: conditionFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ConditionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        <HeroSection
          badge="Conditions We Treat"
          headline="A comprehensive range of pain conditions"
          subheadline="Experience a world of difference. Our board-certified team treats acute and chronic pain — from everyday back pain to complex, long-term conditions that have resisted other treatment."
          primaryCta={{ label: "Request Appointment", href: "/contact" }}
          secondaryCta={{ label: "View Procedures", href: "/procedures" }}
        />

        <section className="bg-paper py-12 lg:py-24" aria-labelledby="conditions-list-heading">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl mb-8 lg:mb-12">
              <p className="eyebrow mb-5">All Conditions</p>
              <h2
                id="conditions-list-heading"
                className="text-3xl lg:text-[2.6rem] leading-[1.1] text-ink mb-4"
              >
                Select a condition to learn more
              </h2>
              <p className="lead text-body">
                Each page explains how we diagnose and treat the condition, the symptoms
                we look for, and the options that may be part of your plan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {conditions.map((condition) => (
                <ConditionCard key={condition.slug} condition={condition} />
              ))}
            </div>

            <div className="mt-12 card p-8 text-center">
              <p className="text-body mb-5 text-[0.97rem] leading-relaxed max-w-xl mx-auto">
                Don&apos;t see your condition listed? We treat many additional pain
                conditions. Call us to discuss whether we can help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={PHONE_HREF} className="btn btn-clay">
                  Call {PHONE_DISPLAY}
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Request Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-sand py-12 lg:py-24" aria-labelledby="conditions-faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="eyebrow mb-5">Common Questions</p>
              <h2
                id="conditions-faq-heading"
                className="text-3xl lg:text-[2.4rem] leading-[1.1] text-ink"
              >
                Frequently asked questions
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
