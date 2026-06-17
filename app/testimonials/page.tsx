import type { Metadata } from "next";
import Link from "next/link";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import StickyCallBar from "@/components/StickyCallBar";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Patient Testimonials | Global Pain Management",
  description:
    "Read what patients are saying about their experience at Global Pain Management in Pasadena, MD. Real reviews from patients in Anne Arundel County and surrounding Maryland communities.",
  alternates: { canonical: "https://globalpainmd.com/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        <HeroSection
          headline="What Our Patients Are Saying"
          subheadline="Experience a world of difference — real stories from patients across Pasadena, Kent Island, and Anne Arundel County who trusted Global Pain Management with their care."
          primaryCta={{ label: "Request Appointment", href: "/contact" }}
        />

        <section className="bg-white py-16 lg:py-20" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-brand-blue-light text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Patient Reviews
              </span>
              <h2
                id="testimonials-heading"
                className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Hundreds of Satisfied Patients
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
                These are real stories from our community. We are grateful to
                every patient who has trusted us with their care and taken time
                to share their experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>

            <div className="mt-16 bg-brand-cream rounded-2xl p-8 text-center">
              <h2
                className="text-2xl font-bold text-brand-navy mb-3"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Ready to experience a world of difference?
              </h2>
              <p className="text-text-muted mb-6 max-w-xl mx-auto text-sm leading-relaxed">
                Join the thousands of patients in our community who have found
                meaningful relief through individualized pain management care.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  Request Your Appointment
                </Link>
                <a
                  href="https://www.google.com/maps?cid=12291003481097695559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-colors text-sm"
                >
                  Leave a Google Review
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
