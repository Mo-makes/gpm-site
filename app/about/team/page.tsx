import type { Metadata } from "next";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProviderCard from "@/components/ProviderCard";
import StickyCallBar from "@/components/StickyCallBar";
import { providers } from "@/lib/data/providers";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

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
          badge="Our Care Team"
          headline="Meet the people behind your care"
          subheadline="Experience a world of difference. Our providers bring board-certified expertise, genuine compassion, and years of experience to every patient encounter."
          primaryCta={{ label: "Request Appointment", href: "/contact" }}
        />

        <section className="bg-paper py-16 lg:py-24" aria-labelledby="team-heading">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl mb-12">
              <p className="eyebrow mb-5">Our Providers</p>
              <h2
                id="team-heading"
                className="text-3xl lg:text-[2.6rem] leading-[1.1] text-ink"
              >
                Experienced. Compassionate. Board-certified.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              {providers.map((provider) => (
                <ProviderCard key={provider.slug} provider={provider} />
              ))}
            </div>

            <div className="mt-14 bg-navy text-paper rounded-[6px] p-8 lg:p-10 text-center">
              <p className="eyebrow eyebrow--light eyebrow--center mb-4">Now Accepting</p>
              <h3 className="text-2xl lg:text-3xl text-paper mb-3">
                New patients welcome
              </h3>
              <p className="text-paper/70 mb-7 max-w-xl mx-auto text-[0.97rem] leading-relaxed">
                Our practice is currently welcoming new patients for pain management
                evaluations. Contact us to schedule your first appointment.
              </p>
              <a href={PHONE_HREF} className="btn btn-clay">
                Call {PHONE_DISPLAY} to Schedule
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
