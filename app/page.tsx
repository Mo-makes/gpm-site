import type { Metadata } from "next";
import Link from "next/link";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProviderCard from "@/components/ProviderCard";
import ConditionCard from "@/components/ConditionCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactForm from "@/components/ContactForm";
import StickyCallBar from "@/components/StickyCallBar";
import { providers } from "@/lib/data/providers";
import { conditions } from "@/lib/data/conditions";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Pain Management in Pasadena, MD | Global Pain Management",
  description:
    "Board-certified pain management specialists serving Pasadena, Kent Island, and Columbia, MD since 2013. Experience a world of difference. Call (443) 825-4050.",
  alternates: { canonical: "https://globalpainmd.com" },
  openGraph: {
    title: "Pain Management in Pasadena, MD | Global Pain Management",
    description:
      "Board-certified pain management specialists serving Pasadena, Kent Island, and Columbia, MD since 2013. Experience a world of difference.",
    url: "https://globalpainmd.com",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Global Pain Management — Pasadena, MD" }],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://globalpainmd.com/#organization",
  name: "Global Pain Management",
  alternateName: "GPM",
  slogan: "Experience a world of difference",
  description:
    "Board-certified interventional pain management specialists in Pasadena, Maryland, founded in 2013. Offering spinal injections, radiofrequency ablation, medication management, and integrative therapies for acute and chronic pain.",
  url: "https://globalpainmd.com",
  telephone: "+14438254050",
  faxNumber: "+14438254051",
  foundingDate: "2013",
  logo: "https://globalpainmd.com/global-logo.svg",
  image: "https://globalpainmd.com/images/gpm-office-aerial.webp",
  medicalSpecialty: "https://schema.org/PainManagement",
  hasMap: "https://www.google.com/maps?cid=12291003481097695559",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Insurance, Cash, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8031 Ritchie Highway, Suite 100",
    addressLocality: "Pasadena",
    addressRegion: "MD",
    postalCode: "21122",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.11940,
    longitude: -76.57370,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "16:30",
    },
  ],
  sameAs: [
    "https://www.facebook.com/GlobalPainMD/",
    "https://www.google.com/maps?cid=12291003481097695559",
  ],
  areaServed: [
    { "@type": "City", name: "Pasadena", containedInPlace: { "@type": "State", name: "Maryland" } },
    { "@type": "City", name: "Columbia", containedInPlace: { "@type": "State", name: "Maryland" } },
    { "@type": "City", name: "Kent Island", containedInPlace: { "@type": "State", name: "Maryland" } },
    { "@type": "AdministrativeArea", name: "Anne Arundel County, Maryland" },
    { "@type": "AdministrativeArea", name: "Queen Anne's County, Maryland" },
    { "@type": "AdministrativeArea", name: "Howard County, Maryland" },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://globalpainmd.com/#website",
  url: "https://globalpainmd.com",
  name: "Global Pain Management",
  description:
    "Board-certified pain management in Pasadena, Kent Island, and Columbia, MD. Serving Maryland since 2013.",
  publisher: { "@id": "https://globalpainmd.com/#organization" },
};

const valueProps = [
  {
    title: "Personalized Treatment Plans",
    description:
      "Every patient receives a customized care plan built around their specific condition, goals, and lifestyle.",
  },
  {
    title: "Board-Certified Physicians",
    description:
      "Our founding physician is board-certified in pain management with fellowship training in interventional techniques.",
  },
  {
    title: "Locally Owned Since 2013",
    description:
      "A community-rooted practice founded by Dr. Haddi Ogunsola to serve Pasadena, Kent Island, Columbia, and Maryland's surrounding counties.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <HeroSection
          headline="Pain Management Specialists in Pasadena, MD"
          subheadline="Experience a world of difference. Board-certified, fellowship-trained care for chronic and acute pain — serving Pasadena, Kent Island, Columbia, and all of Maryland since 2013."
          primaryCta={{ label: "Request an Appointment", href: "/contact" }}
          secondaryCta={{ label: "Meet Our Team", href: "/about/team" }}
          showTrustBadges
          showVisual
          badge="Serving Maryland Since 2013"
        />

        {/* Value strip */}
        <section className="bg-white py-12 border-b border-gray-100" aria-label="Why choose us">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valueProps.map((prop) => (
                <div key={prop.title} className="flex items-start gap-4">
                  <div
                    className="w-1 flex-shrink-0 self-stretch rounded-full bg-brand-blue mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <h2
                      className="font-bold text-brand-navy text-base mb-1"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {prop.title}
                    </h2>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="bg-brand-cream py-16 lg:py-20" aria-labelledby="conditions-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-brand-blue-light text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Conditions We Treat
              </span>
              <h2
                id="conditions-heading"
                className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Comprehensive Pain Management Care
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
                From neck and back pain to arthritis, cancer pain, and auto
                accident injuries — our specialists treat a wide range of acute
                and chronic pain conditions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {conditions.slice(0, 9).map((condition) => (
                <ConditionCard key={condition.slug} condition={condition} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/conditions"
                className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-colors text-sm"
              >
                View All Conditions →
              </Link>
            </div>
          </div>
        </section>

        {/* Providers */}
        <section className="bg-white py-16 lg:py-20" aria-labelledby="providers-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-brand-blue-light text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Our Team
              </span>
              <h2
                id="providers-heading"
                className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Meet Your Care Team
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
                Our experienced providers are dedicated to understanding your
                unique pain experience and building a treatment plan that works
                for your life.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {providers.map((provider) => (
                <ProviderCard key={provider.slug} provider={provider} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/about/team"
                className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline"
              >
                Full team bios and credentials →
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-brand-cream py-16 lg:py-20" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-brand-blue-light text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Patient Stories
              </span>
              <h2
                id="testimonials-heading"
                className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                What Our Patients Are Saying
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
                Real experiences from patients in Pasadena, Kent Island, Columbia,
                and across Anne Arundel County.
              </p>
            </div>
            <TestimonialCarousel testimonials={testimonials} />
            <div className="text-center mt-8">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline"
              >
                Read all patient testimonials →
              </Link>
            </div>
          </div>
        </section>

        {/* About / Practice History */}
        <section
          className="bg-brand-navy text-white py-16 lg:py-20"
          aria-labelledby="about-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-brand-blue/30 text-brand-blue-light text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  Our Story
                </span>
                <h2
                  id="about-heading"
                  className="text-3xl lg:text-4xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Rooted in Our Community Since 2013
                </h2>
                <div className="space-y-4 text-blue-100 leading-relaxed">
                  <p>
                    Global Pain Management was founded in 2013 by Dr. Haddi
                    Ogunsola with a clear mission: to provide the people of
                    Pasadena, Kent Island, Columbia, and Anne Arundel County with access
                    to the same quality of interventional pain care found at
                    major academic medical centers — close to home.
                  </p>
                  <p>
                    Over more than fifteen years, we have helped thousands of
                    patients manage chronic and acute pain conditions, recover
                    from work and auto accidents, and regain the quality of life
                    that pain had stolen from them. We believe pain management
                    is deeply personal work, and we are committed to treating
                    every patient as an individual — not a diagnosis.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                  >
                    Learn About Us
                  </Link>
                  <Link
                    href="/about/team"
                    className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-navy transition-colors text-sm"
                  >
                    Meet the Team
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2013", label: "Year Founded" },
                  { value: "15+", label: "Years Serving Maryland" },
                  { value: "3", label: "Experienced Providers" },
                  { value: "1000s", label: "Patients Treated" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-brand-slate rounded-xl p-6 text-center"
                  >
                    <p
                      className="text-4xl font-extrabold text-brand-blue mb-2"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-blue-200 text-sm font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Map */}
        <section className="bg-white py-16 lg:py-20" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <span className="inline-block bg-brand-blue-light text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  Get in Touch
                </span>
                <h2
                  id="contact-heading"
                  className="text-3xl font-bold text-brand-navy mb-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Request an Appointment
                </h2>
                <p className="text-text-muted mb-6 text-sm leading-relaxed">
                  Fill out the form and a member of our team will reach out
                  within one business day to schedule your visit.
                </p>
                <ContactForm />
              </div>
              <div className="space-y-6">
                <div className="bg-brand-cream rounded-xl p-6">
                  <h3
                    className="font-bold text-brand-navy text-lg mb-4"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Our Location
                  </h3>
                  <address className="not-italic text-sm text-text-primary space-y-2 leading-relaxed">
                    <p className="font-semibold">Global Pain Management</p>
                    <p>8031 Ritchie Highway, Suite 100</p>
                    <p>Pasadena, MD 21122</p>
                    <div className="mt-4 space-y-1">
                      <p>
                        <a
                          href="tel:4438254050"
                          className="text-brand-blue font-semibold hover:underline"
                        >
                          (443) 825-4050
                        </a>{" "}
                        — Phone
                      </p>
                      <p className="text-text-muted">(443) 825-4051 — Fax</p>
                    </div>
                  </address>
                </div>
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <iframe
                    title="Global Pain Management location on Google Maps"
                    src="https://maps.google.com/maps?q=8031+Ritchie+Hwy+Suite+100+Pasadena+MD+21122&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
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
