import type { Metadata } from "next";
import Link from "next/link";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TelemedicineSection from "@/components/TelemedicineSection";
import StickyCallBar from "@/components/StickyCallBar";

export const metadata: Metadata = {
  title: "About Global Pain Management | Pasadena, MD",
  description:
    "Learn about Global Pain Management, founded in 2013 by Dr. Haddi Ogunsola. Serving Pasadena, Kent Island, and Anne Arundel County with compassionate, board-certified pain care.",
  alternates: { canonical: "https://globalpainmd.com/about" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://globalpainmd.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://globalpainmd.com/about" },
  ],
};

const milestones = [
  {
    year: "2013",
    text: "Dr. Haddi Ogunsola founds Global Pain Management in Pasadena, MD with a mission to bring interventional pain care to the local community.",
  },
  {
    year: "2013",
    text: "Practice expands its interventional services, adding radiofrequency ablation and advanced spinal injection techniques.",
  },
  {
    year: "2018",
    text: "Telemedicine program launched for established patients, improving access for patients across Anne Arundel and surrounding counties.",
  },
  {
    year: "2024",
    text: "Recognized as a Maryland Top Doctor practice. Team grows to three dedicated providers serving thousands of patients annually.",
  },
];

const values = [
  {
    title: "Patient-First Care",
    body: "We listen before we prescribe. Every treatment plan begins with a thorough understanding of your unique pain experience, goals, and lifestyle.",
  },
  {
    title: "Evidence-Based Medicine",
    body: "We combine proven interventional techniques with current research to offer our patients the most effective, minimally invasive options available.",
  },
  {
    title: "Community Commitment",
    body: "As a locally owned, independent practice, we are accountable to our patients and our community — not a health system or corporate parent.",
  },
  {
    title: "Whole-Person Approach",
    body: "Pain affects every dimension of life. We address physical, functional, and quality-of-life goals together, coordinating with your full care team.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        <HeroSection
          headline="About Global Pain Management"
          subheadline="Experience a world of difference. Founded in 2013, we have been the region's trusted independent pain management practice — serving patients in Pasadena, Kent Island, Columbia, and across Maryland with board-certified, compassionate care."
          primaryCta={{ label: "Meet Our Team", href: "/about/team" }}
          secondaryCta={{ label: "Request Appointment", href: "/contact" }}
        />

        {/* Mission */}
        <section className="bg-white py-16 lg:py-20" aria-labelledby="mission-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-brand-blue-light text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  Our Mission
                </span>
                <h2
                  id="mission-heading"
                  className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Pain Management That Centers You
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Chronic and acute pain can strip away independence, comfort,
                    and joy. At Global Pain Management, we exist to help our
                    patients get those things back. Since our founding in 2013,
                    our mission has been unchanged: provide expert, individualized
                    pain care in a setting where every patient feels heard,
                    respected, and supported.
                  </p>
                  <p>
                    Dr. Haddi Ogunsola founded this practice because she believed
                    that the communities of Anne Arundel County deserved access
                    to the kind of board-certified, interventional pain care
                    typically found only at large academic centers. More than
                    fifteen years later, that belief drives everything we do.
                  </p>
                  <p>
                    We treat conditions ranging from everyday back and neck pain
                    to complex chronic conditions, workers&apos; compensation
                    injuries, auto accident trauma, and cancer pain. Whatever
                    brought you to us, we are committed to building a plan that
                    meets you where you are.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="bg-brand-cream rounded-xl p-5 border-l-4 border-brand-blue"
                  >
                    <h3
                      className="font-bold text-brand-navy mb-2 text-sm"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">{v.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-brand-cream py-16 lg:py-20" aria-labelledby="history-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-brand-blue-light text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Our History
              </span>
              <h2
                id="history-heading"
                className="text-3xl lg:text-4xl font-bold text-brand-navy"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Building a Practice, Building Trust
              </h2>
            </div>
            <ol className="relative border-l-2 border-brand-blue/30 space-y-10 pl-6">
              {milestones.map((m) => (
                <li key={m.year} className="relative">
                  <span className="absolute -left-[29px] w-4 h-4 rounded-full bg-brand-blue border-4 border-brand-blue-light" aria-hidden="true" />
                  <p
                    className="text-brand-blue font-bold text-lg mb-1"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {m.year}
                  </p>
                  <p className="text-text-muted leading-relaxed text-sm">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Telemedicine */}
        <TelemedicineSection />

        {/* CTA */}
        <section className="bg-brand-navy text-white py-16" aria-labelledby="about-cta-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              id="about-cta-heading"
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Ready to Start Your Pain Management Journey?
            </h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Our team is accepting new patients. Contact us today to schedule
              your comprehensive pain evaluation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Request Appointment
              </Link>
              <a
                href="tel:4438254050"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-navy transition-colors"
              >
                Call (443) 825-4050
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
