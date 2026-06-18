import type { Metadata } from "next";
import Link from "next/link";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import StickyCallBar from "@/components/StickyCallBar";
import { testimonials } from "@/lib/data/testimonials";
import { MAPS_URL } from "@/lib/site";

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
          badge="Patient Stories"
          headline="In our patients' own words"
          subheadline="Experience a world of difference — real stories from patients across Pasadena, Kent Island, and Anne Arundel County who trusted Global Pain Management with their care."
          primaryCta={{ label: "Request Appointment", href: "/contact" }}
        />

        <section className="bg-paper py-16 lg:py-24" aria-labelledby="testimonials-heading">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl mb-12">
              <p className="eyebrow mb-5">Patient Reviews</p>
              <h2
                id="testimonials-heading"
                className="text-3xl lg:text-[2.6rem] leading-[1.1] text-ink mb-4"
              >
                Hundreds of satisfied patients
              </h2>
              <p className="lead text-body">
                These are real stories from our community. We are grateful to every patient
                who has trusted us with their care and taken time to share their experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>

            <div className="mt-14 bg-navy text-paper rounded-[6px] p-8 lg:p-10 text-center">
              <h2 className="text-2xl lg:text-3xl text-paper mb-3">
                Ready to experience a world of difference?
              </h2>
              <p className="text-paper/70 mb-7 max-w-xl mx-auto text-[0.97rem] leading-relaxed">
                Join the thousands of patients in our community who have found meaningful
                relief through individualized pain management care.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn btn-clay">
                  Request Your Appointment
                </Link>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
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
