import type { Metadata } from "next";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProviderCard from "@/components/ProviderCard";
import StickyCallBar from "@/components/StickyCallBar";
import { providers } from "@/lib/data/providers";

export const metadata: Metadata = {
  title: "Our Medical Team | Pain Management Providers in Pasadena, MD",
  description:
    "Meet the board-certified pain management providers at Global Pain Management — Dr. Haddi Ogunsola and our team of experienced nurse practitioners serving Pasadena, Kent Island, and Columbia, MD.",
  alternates: { canonical: "https://globalpainmd.com/about/team" },
};

export default function TeamPage() {
  return (
    <>
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        <HeroSection
          headline="Meet Our Care Team"
          subheadline="Experience a world of difference. Our providers bring board-certified expertise, genuine compassion, and years of experience to every patient encounter. Get to know the people behind your care."
          primaryCta={{ label: "Request Appointment", href: "/contact" }}
        />

        <section className="bg-white py-16 lg:py-20" aria-labelledby="team-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-brand-blue-light text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Our Providers
              </span>
              <h2
                id="team-heading"
                className="text-3xl lg:text-4xl font-bold text-brand-navy"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Experienced. Compassionate. Board-Certified.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {providers.map((provider) => (
                <ProviderCard key={provider.slug} provider={provider} />
              ))}
            </div>

            <div className="mt-16 bg-brand-cream rounded-2xl p-8 text-center">
              <h3
                className="text-xl font-bold text-brand-navy mb-3"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Accepting New Patients
              </h3>
              <p className="text-text-muted mb-6 max-w-xl mx-auto text-sm leading-relaxed">
                Our practice is currently welcoming new patients for pain
                management evaluations. Contact us to schedule your first
                appointment with a member of our team.
              </p>
              <a
                href="tel:4438254050"
                className="inline-flex items-center bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
              >
                Call (443) 825-4050 to Schedule
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
