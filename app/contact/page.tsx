import type { Metadata } from "next";
import Image from "next/image";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import InsuranceSection from "@/components/InsuranceSection";
import OfficeHoursCard from "@/components/OfficeHoursCard";
import OfficeLocations from "@/components/OfficeLocations";
import StickyCallBar from "@/components/StickyCallBar";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  FAX_DISPLAY,
  EMAIL_DISPLAY,
  EMAIL_HREF,
  LOCATIONS,
  PATIENT_PORTAL_URL,
} from "@/lib/site";

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        <HeroSection
          badge="Contact & Appointments"
          headline="Take the first step toward relief"
          subheadline="Experience a world of difference. Fill out the form below or call us directly at (443) 825-4050. We typically respond within one business day."
          primaryCta={{ label: `Call ${PHONE_DISPLAY}`, href: PHONE_HREF }}
        />

        <section className="bg-paper py-12 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_22rem] gap-12 lg:gap-16">
              {/* Form */}
              <div>
                <p className="eyebrow mb-5">Get in Touch</p>
                <h2 className="text-3xl lg:text-[2.2rem] leading-[1.1] text-ink mb-3">
                  Request an appointment
                </h2>
                <p className="text-body mb-8 leading-relaxed">
                  Please fill out the form below and a member of our team will contact you
                  to schedule your appointment. For urgent concerns, please call us
                  directly.
                </p>
                <ContactForm />
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="card overflow-hidden">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/images/gpm-office-aerial.webp"
                      alt="Global Pain Management office building in Pasadena, MD"
                      fill
                      sizes="(max-width: 1024px) 100vw, 22rem"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <p className="eyebrow mb-4">Our Offices</p>
                    <div className="space-y-1">
                      <p className="font-fraunces text-lg text-ink mb-3" style={{ fontWeight: 560 }}>
                        Global Pain Management
                      </p>
                      <OfficeLocations showLabels />
                    </div>
                    <div className="pt-3 space-y-1 text-[0.95rem] text-body">
                        <p>
                          <a href={PHONE_HREF} className="text-clay-deep font-semibold hover:underline">
                            {PHONE_DISPLAY}
                          </a>
                        </p>
                        <p className="text-muted text-[0.85rem]">Fax: {FAX_DISPLAY}</p>
                        <p className="text-muted text-[0.85rem]">
                          <a href={EMAIL_HREF} className="text-clay-deep hover:underline">
                            {EMAIL_DISPLAY}
                          </a>
                        </p>
                      </div>
                    <div className="mt-5 flex flex-col gap-2.5">
                      {LOCATIONS.map((location) => (
                        <a
                          key={location.id}
                          href={location.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline w-full text-[0.85rem] py-2.5"
                        >
                          Directions — {location.label.replace(" Office", "")}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <OfficeHoursCard />

                <div className="bg-sage-soft border border-sage/25 rounded-[5px] p-6">
                  <p className="font-fraunces text-lg text-sage-deep mb-2" style={{ fontWeight: 560 }}>
                    Existing patient?
                  </p>
                  <p className="text-body text-[0.9rem] mb-4 leading-relaxed">
                    Access your health records, view visit summaries, and more through our
                    secure patient portal.
                  </p>
                  <a
                    href={PATIENT_PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-navy w-full text-[0.85rem] py-2.5"
                  >
                    Access Patient Portal
                  </a>
                </div>
              </aside>
            </div>

            {/* Maps */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {LOCATIONS.map((location) => (
                <div key={location.id}>
                  <p className="eyebrow mb-3">{location.label}</p>
                  <div className="plate" style={{ aspectRatio: "21 / 9" }}>
                    <iframe
                      title={`Global Pain Management — ${location.label}`}
                      src={`https://maps.google.com/maps?q=${location.mapsEmbedQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                      className="w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              ))}
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
