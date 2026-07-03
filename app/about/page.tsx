import type { Metadata } from "next";
import Link from "next/link";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TelemedicineSection from "@/components/TelemedicineSection";
import StickyCallBar from "@/components/StickyCallBar";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

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
    text: "The practice expands its interventional services, adding radiofrequency ablation and advanced spinal injection techniques.",
  },
  {
    year: "2018",
    text: "Telemedicine launches for established patients, improving access across Anne Arundel and surrounding counties.",
  },
  {
    year: "2024",
    text: "Recognized as a Maryland Top Doctor practice. The team grows to three dedicated providers serving thousands of patients annually.",
  },
];

const values = [
  {
    title: "Patient-first care",
    body: "We listen before we prescribe. Every plan begins with a thorough understanding of your pain, your goals, and your life.",
  },
  {
    title: "Evidence-based medicine",
    body: "We combine proven interventional techniques with current research to offer the most effective, minimally invasive options available.",
  },
  {
    title: "Community commitment",
    body: "As an independent practice, we are accountable to our patients and our community — not a health system or corporate parent.",
  },
  {
    title: "Whole-person approach",
    body: "Pain affects every dimension of life. We address physical, functional, and quality-of-life goals together with your full care team.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        <HeroSection
          badge="About the Practice"
          headline="The region's most trusted independent pain practice"
          subheadline="Experience a world of difference. Founded in 2013, we have served patients in Pasadena, Kent Island, Columbia, and across Maryland with board-certified, compassionate care."
          primaryCta={{ label: "Meet Our Team", href: "/about/team" }}
          secondaryCta={{ label: "Request Appointment", href: "/contact" }}
        />

        {/* Mission */}
        <section className="bg-paper py-12 lg:py-24" aria-labelledby="mission-heading">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="eyebrow mb-5">Our Mission</p>
                <h2
                  id="mission-heading"
                  className="text-3xl lg:text-[2.6rem] leading-[1.1] text-ink mb-6"
                >
                  Pain management that centers you
                </h2>
                <div className="space-y-4 text-body leading-relaxed">
                  <p className="lead text-body dropcap">
                    Chronic and acute pain can strip away independence, comfort, and joy.
                    At Global Pain Management, we exist to help our patients get those
                    things back.
                  </p>
                  <p>
                    Dr. Haddi Ogunsola founded this practice because she believed the
                    communities of Anne Arundel County deserved access to the kind of
                    board-certified, interventional pain care typically found only at
                    large academic centers. More than a decade later, that belief drives
                    everything we do.
                  </p>
                  <p>
                    We treat conditions ranging from everyday back and neck pain to complex
                    chronic conditions, workers&apos; compensation injuries, auto accident
                    trauma, and cancer pain. Whatever brought you to us, we are committed to
                    building a plan that meets you where you are.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 self-start">
                {values.map((v) => (
                  <div key={v.title} className="card p-6">
                    <h3 className="font-fraunces text-[1.15rem] text-ink mb-2.5" style={{ fontWeight: 560 }}>
                      {v.title}
                    </h3>
                    <p className="text-[0.9rem] text-body leading-relaxed">{v.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-sand py-12 lg:py-24" aria-labelledby="history-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 lg:mb-12">
              <p className="eyebrow mb-5">Our History</p>
              <h2
                id="history-heading"
                className="text-3xl lg:text-[2.6rem] leading-[1.1] text-ink"
              >
                Building a practice, building trust
              </h2>
            </div>
            <ol className="relative border-l border-line-strong space-y-9 pl-8">
              {milestones.map((m, i) => (
                <li key={i} className="relative">
                  <span
                    className="absolute -left-[37px] top-1 w-3.5 h-3.5 rounded-full bg-clay ring-4 ring-sand"
                    aria-hidden="true"
                  />
                  <p className="font-fraunces text-brass text-xl mb-1" style={{ fontWeight: 500 }}>
                    {m.year}
                  </p>
                  <p className="text-body leading-relaxed text-[0.97rem]">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Telemedicine */}
        <TelemedicineSection />

        {/* CTA */}
        <section className="bg-navy text-paper py-12 lg:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-[2.4rem] leading-[1.1] text-paper mb-4">
              Ready to start your pain management journey?
            </h2>
            <p className="text-paper/75 mb-8 leading-relaxed">
              Our team is accepting new patients. Contact us today to schedule your
              comprehensive pain evaluation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-clay">
                Request Appointment
              </Link>
              <a href={PHONE_HREF} className="btn btn-outline-light">
                Call {PHONE_DISPLAY}
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
