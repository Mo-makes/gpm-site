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
import OfficeHoursCard from "@/components/OfficeHoursCard";
import OfficeLocations from "@/components/OfficeLocations";
import StickyCallBar from "@/components/StickyCallBar";
import { providers } from "@/lib/data/providers";
import { conditions } from "@/lib/data/conditions";
import { testimonials } from "@/lib/data/testimonials";
import {
  yearsInService,
  PHONE_DISPLAY,
  PHONE_HREF,
  FAX_DISPLAY,
  LOCATIONS,
  MAPS_URL,
} from "@/lib/site";

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
    streetAddress: LOCATIONS[0].address.line1,
    addressLocality: LOCATIONS[0].address.city,
    addressRegion: LOCATIONS[0].address.state,
    postalCode: LOCATIONS[0].address.zip,
    addressCountry: "US",
  },
  location: LOCATIONS.map((loc) => ({
    "@type": "Place",
    name: loc.label,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address.line1,
      addressLocality: loc.address.city,
      addressRegion: loc.address.state,
      postalCode: loc.address.zip,
      addressCountry: "US",
    },
    hasMap: loc.mapsUrl,
  })),
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.1194,
    longitude: -76.5737,
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

const principles = [
  {
    n: "01",
    title: "Individualized treatment plans",
    body: "Every plan is built around your diagnosis, your goals, and your life — never a template. We listen before we prescribe.",
  },
  {
    n: "02",
    title: "Board-certified, fellowship-trained",
    body: "Our founding physician is dual board-certified in pain medicine and anesthesiology, with interventional fellowship training at UMD Shock Trauma.",
  },
  {
    n: "03",
    title: "Independent since 2013",
    body: "A locally owned practice accountable to its patients and community — not a health system or a corporate parent.",
  },
];

export default function HomePage() {
  const years = yearsInService();
  const stats = [
    { value: "2013", label: "Year founded" },
    { value: `${years}`, label: "Years serving Maryland" },
    { value: "3", label: "Dedicated providers" },
    { value: "Thousands", label: "Patients treated" },
  ];

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

        {/* Practice in brief */}
        <section className="bg-sand py-12 lg:py-24" aria-labelledby="brief-heading">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl mb-8 lg:mb-16">
              <p className="eyebrow mb-5">Why Global Pain Management</p>
              <h2
                id="brief-heading"
                className="text-3xl lg:text-[2.7rem] leading-[1.1] text-ink"
              >
                Specialist pain care, delivered with intention.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
              {principles.map((p) => (
                <div key={p.n} className="border-t border-line-strong pt-6">
                  <p className="font-fraunces text-clay text-2xl mb-3" style={{ fontWeight: 500 }}>
                    {p.n}
                  </p>
                  <h3 className="font-fraunces text-[1.3rem] text-ink mb-2.5" style={{ fontWeight: 560 }}>
                    {p.title}
                  </h3>
                  <p className="text-[0.95rem] text-body leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="bg-paper py-12 lg:py-24" aria-labelledby="conditions-heading">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 lg:mb-12">
              <div className="max-w-2xl">
                <p className="eyebrow mb-5">Conditions We Treat</p>
                <h2
                  id="conditions-heading"
                  className="text-3xl lg:text-[2.7rem] leading-[1.1] text-ink mb-4"
                >
                  From everyday back pain to the most complex cases
                </h2>
                <p className="lead text-body">
                  Our board-certified team treats a comprehensive range of acute and
                  chronic pain conditions — including many that have resisted other
                  treatment.
                </p>
              </div>
              <Link href="/conditions" className="link-arrow shrink-0 lg:pb-2">
                View all conditions <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {conditions.slice(0, 9).map((condition, i) => (
                <ConditionCard
                  key={condition.slug}
                  condition={condition}
                  className={i >= 6 ? "hidden sm:flex" : ""}
                />
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/conditions" className="btn btn-outline">
                All Conditions
              </Link>
              <Link href="/procedures" className="btn btn-outline">
                Explore Procedures
              </Link>
            </div>
          </div>
        </section>

        {/* Providers */}
        <section className="bg-sand py-12 lg:py-24" aria-labelledby="providers-heading">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl mb-8 lg:mb-12">
              <p className="eyebrow mb-5">Your Care Team</p>
              <h2
                id="providers-heading"
                className="text-3xl lg:text-[2.7rem] leading-[1.1] text-ink mb-4"
              >
                The people behind your care
              </h2>
              <p className="lead text-body">
                Experienced providers dedicated to understanding your pain and building a
                plan that fits your life.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              {providers.map((provider) => (
                <ProviderCard key={provider.slug} provider={provider} />
              ))}
            </div>
            <div className="mt-10">
              <Link href="/about/team" className="link-arrow">
                Full team bios &amp; credentials{" "}
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Story / stats — navy */}
        <section className="bg-navy text-paper py-12 lg:py-24" aria-labelledby="about-heading">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <p className="eyebrow eyebrow--light mb-5">Our Story</p>
                <h2
                  id="about-heading"
                  className="text-3xl lg:text-[2.7rem] leading-[1.1] text-paper mb-6"
                >
                  Rooted in this community since 2013
                </h2>
                <div className="space-y-4 text-paper/75 leading-relaxed">
                  <p>
                    Haddi Ogunsola, M.D. founded Global Pain Management with a clear
                    mission: to give the people of Pasadena, Kent Island, Columbia, and
                    Anne Arundel County access to the same interventional pain care found
                    at major academic medical centers — close to home.
                  </p>
                  <p>
                    For more than a decade we have helped thousands of patients manage
                    chronic and acute pain, recover from work and auto injuries, and
                    regain the quality of life that pain had taken. We treat every patient
                    as an individual — not a diagnosis.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/about" className="btn btn-clay">
                    Learn About Us
                  </Link>
                  <Link href="/about/team" className="btn btn-outline-light">
                    Meet the Team
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-px bg-paper/12 border border-paper/12 rounded-[5px] overflow-hidden">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-navy p-7 text-center">
                    <p
                      className="font-fraunces text-2xl sm:text-3xl lg:text-4xl xl:text-[2.9rem] text-brass leading-none mb-2"
                      style={{ fontWeight: 500 }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-paper/60 text-[0.8rem] uppercase tracking-[0.12em]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-paper py-12 lg:py-24" aria-labelledby="testimonials-heading">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl mb-8 lg:mb-12">
              <p className="eyebrow mb-5">Patient Stories</p>
              <h2
                id="testimonials-heading"
                className="text-3xl lg:text-[2.7rem] leading-[1.1] text-ink mb-4"
              >
                In our patients&apos; own words
              </h2>
              <p className="lead text-body">
                Real experiences from patients across Pasadena, Kent Island, Columbia, and
                Anne Arundel County.
              </p>
            </div>
            <TestimonialCarousel testimonials={testimonials} />
            <div className="text-center mt-10">
              <Link href="/testimonials" className="link-arrow">
                Read all patient testimonials{" "}
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact + location */}
        <section className="bg-sand py-12 lg:py-24" aria-labelledby="contact-heading">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="eyebrow mb-5">Get in Touch</p>
                <h2
                  id="contact-heading"
                  className="text-3xl lg:text-[2.4rem] leading-[1.1] text-ink mb-3"
                >
                  Request an appointment
                </h2>
                <p className="text-body mb-8 leading-relaxed">
                  Fill out the form and a member of our team will reach out within one
                  business day to schedule your visit.
                </p>
                <ContactForm />
              </div>
              <div className="space-y-6">
                <div className="card p-7">
                  <p className="eyebrow mb-4">Our Offices</p>
                  <div className="text-[0.97rem] text-body space-y-1.5 leading-relaxed">
                    <p className="font-fraunces text-lg text-ink mb-3" style={{ fontWeight: 560 }}>
                      Global Pain Management
                    </p>
                    <OfficeLocations showLabels />
                    <div className="pt-3 space-y-1">
                      <p>
                        <a href={PHONE_HREF} className="text-clay-deep font-semibold hover:underline">
                          {PHONE_DISPLAY}
                        </a>
                        <span className="text-muted"> · phone</span>
                      </p>
                      <p className="text-muted text-[0.88rem]">{FAX_DISPLAY} · fax</p>
                    </div>
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
                <OfficeHoursCard />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {LOCATIONS.map((location) => (
                    <div key={location.id} className="plate" style={{ aspectRatio: "16 / 10" }}>
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
                  ))}
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
