import type { Metadata } from "next";
import Image from "next/image";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import InsuranceSection from "@/components/InsuranceSection";
import OfficeHoursCard from "@/components/OfficeHoursCard";
import StickyCallBar from "@/components/StickyCallBar";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://globalpainmd.com" },
    { "@type": "ListItem", position: 2, name: "Contact & Appointment", item: "https://globalpainmd.com/contact" },
  ],
};

export const metadata: Metadata = {
  title: "Contact Us | Request Appointment | Global Pain Management",
  description:
    "Schedule a pain management appointment in Pasadena, MD. Call (443) 825-4050 or submit our online request form. Serving Pasadena, Kent Island, Columbia, and all of Anne Arundel County.",
  alternates: { canonical: "https://globalpainmd.com/contact" },
};

export default function ContactPage() {
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
          headline="Contact & Appointment Request"
          subheadline="Experience a world of difference. Ready to take the first step toward pain relief? Fill out the form below or call us directly at (443) 825-4050. We typically respond within one business day."
          primaryCta={{ label: "Call (443) 825-4050", href: "tel:4438254050" }}
        />

        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <span className="inline-block bg-brand-blue-light text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  Get in Touch
                </span>
                <h2
                  className="text-2xl font-bold text-brand-navy mb-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Request an Appointment
                </h2>
                <p className="text-text-muted mb-6 text-sm leading-relaxed">
                  Please fill out the form below and a member of our team will
                  contact you to schedule your appointment. For urgent concerns,
                  please call us directly.
                </p>
                <ContactForm />
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Address */}
                <div className="bg-brand-cream rounded-xl overflow-hidden">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/images/gpm-office-aerial.webp"
                      alt="Global Pain Management office building in Pasadena, MD"
                      fill
                      sizes="(max-width: 1024px) 100vw, 20rem"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                  <div className="mb-5 flex justify-center rounded-lg border border-gray-200 bg-white px-5 py-4 shadow-sm">
                    <Image
                      src="/global-logo.svg"
                      alt="Global Pain Management — GLOBAL"
                      width={674}
                      height={141}
                      unoptimized
                      className="h-12 w-auto max-w-full sm:h-14"
                    />
                  </div>
                  <h2
                    className="font-bold text-brand-navy text-base mb-4"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Our Office
                  </h2>
                  <address className="not-italic text-sm text-text-primary space-y-2 leading-relaxed">
                    <p className="font-semibold">Global Pain Management</p>
                    <p>8031 Ritchie Highway, Suite 100</p>
                    <p>Pasadena, MD 21122</p>
                    <div className="mt-4 space-y-1.5">
                      <p>
                        <a
                          href="tel:4438254050"
                          className="text-brand-blue font-semibold hover:underline"
                        >
                          (443) 825-4050
                        </a>
                      </p>
                      <p className="text-text-muted text-xs">
                        Fax: (443) 825-4051
                      </p>
                    </div>
                  </address>

                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href="https://www.google.com/maps?cid=12291003481097695559"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center border border-brand-blue text-brand-blue py-2 rounded-lg text-sm font-semibold hover:bg-brand-blue hover:text-white transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                  </div>
                </div>

                {/* Office Hours */}
                <OfficeHoursCard />

                {/* Patient Portal */}
                <div className="bg-brand-teal text-white rounded-xl p-6">
                  <h2
                    className="font-bold text-lg mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Existing Patient?
                  </h2>
                  <p className="text-teal-100 text-sm mb-4 leading-relaxed">
                    Access your health records, view visit summaries, and more
                    through our secure patient portal.
                  </p>
                  <a
                    href="https://www.yourhealthfile.com/portal/login.jsp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-white text-brand-teal py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-50 transition-colors"
                  >
                    Access Patient Portal
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Global Pain Management office location"
                src="https://maps.google.com/maps?q=8031+Ritchie+Hwy+Suite+100+Pasadena+MD+21122&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
        <InsuranceSection />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
