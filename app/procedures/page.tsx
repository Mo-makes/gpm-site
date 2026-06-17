import type { Metadata } from "next";
import Link from "next/link";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StickyCallBar from "@/components/StickyCallBar";
import { procedures } from "@/lib/data/procedures";

export const metadata: Metadata = {
  title: "Pain Management Procedures & Treatments | Pasadena, MD",
  description:
    "Interventional injections, radiofrequency ablation, trigger point injections, medication management, TENS therapy, acupuncture, biofeedback, and more at Global Pain Management.",
  alternates: { canonical: "https://globalpainmd.com/procedures" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://globalpainmd.com" },
    { "@type": "ListItem", position: 2, name: "Procedures & Treatments", item: "https://globalpainmd.com/procedures" },
  ],
};

const interventional = procedures.filter((p) => p.category === "interventional");
const nonInterventional = procedures.filter((p) => p.category !== "interventional");

export default function ProceduresPage() {
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
          headline="Procedures & Treatments"
          subheadline="Experience a world of difference. We offer a comprehensive range of interventional and supportive pain management therapies — from targeted spinal injections to acupuncture and biofeedback."
          primaryCta={{ label: "Request Appointment", href: "/contact" }}
          secondaryCta={{ label: "View Conditions", href: "/conditions" }}
        />

        {/* Interventional */}
        <section className="bg-white py-16 lg:py-20" aria-labelledby="interventional-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-brand-blue-light text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Interventional
              </span>
              <h2
                id="interventional-heading"
                className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Interventional Pain Procedures
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
                Our board-certified pain physician performs minimally invasive
                injection-based procedures that deliver targeted relief directly
                to the source of your pain.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interventional.map((proc) => (
                <Link
                  key={proc.slug}
                  href={`/procedures/${proc.slug}`}
                  className="group bg-brand-cream rounded-xl p-6 border border-gray-100 hover:border-brand-blue/30 hover:shadow-md transition-all"
                >
                  <h3
                    className="font-bold text-brand-navy group-hover:text-brand-blue transition-colors text-base mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {proc.name}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-3">
                    {proc.shortDescription}
                  </p>
                  <span className="text-xs font-semibold text-brand-blue">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other therapies */}
        <section className="bg-brand-cream py-16 lg:py-20" aria-labelledby="therapies-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-brand-blue-light text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Supportive Therapies
              </span>
              <h2
                id="therapies-heading"
                className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Medication & Complementary Therapies
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
                Beyond injections, we offer a range of medication management
                protocols and integrative therapies that complement your overall
                treatment plan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nonInterventional.map((proc) => (
                <Link
                  key={proc.slug}
                  href={`/procedures/${proc.slug}`}
                  className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-brand-blue/30 hover:shadow-md transition-all"
                >
                  <h3
                    className="font-bold text-brand-navy group-hover:text-brand-blue transition-colors text-base mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {proc.name}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-3">
                    {proc.shortDescription}
                  </p>
                  <span className="text-xs font-semibold text-brand-blue">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-navy text-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Find Out Which Treatment Is Right for You
            </h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Every treatment plan at Global Pain Management begins with a
              comprehensive evaluation. Schedule yours today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
              >
                Request Appointment
              </Link>
              <a
                href="tel:4438254050"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-navy transition-colors text-sm"
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
