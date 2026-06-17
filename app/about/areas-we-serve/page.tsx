import type { Metadata } from "next";
import Link from "next/link";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StickyCallBar from "@/components/StickyCallBar";

export const metadata: Metadata = {
  title: "Areas We Serve | Pasadena, Kent Island & Columbia Pain Management",
  description:
    "Global Pain Management serves patients in Pasadena, Kent Island, Columbia, and communities throughout Anne Arundel, Queen Anne's, and Howard Counties, MD.",
  alternates: { canonical: "https://globalpainmd.com/about/areas-we-serve" },
};

const areas = [
  {
    name: "Pasadena, MD",
    description:
      "Our home community and the location of our practice at 8031 Ritchie Highway, Suite 100. We are proud to serve the families and workers of Pasadena with comprehensive, board-certified pain management close to home.",
    highlight: true,
  },
  {
    name: "Kent Island, MD",
    description:
      "We regularly see patients from Kent Island and the Eastern Shore who make the trip across the Bay Bridge for specialized pain care they cannot access locally.",
    highlight: true,
  },
  {
    name: "Columbia, MD",
    description:
      "Patients from Howard County and Columbia find our practice accessible via the MD-100 corridor, with telemedicine options for established patients.",
    highlight: true,
  },
  {
    name: "Anne Arundel County",
    description:
      "As a practice rooted in Anne Arundel County, we serve communities throughout the county including Glen Burnie, Severna Park, Arnold, Millersville, Odenton, Crofton, and more.",
    highlight: false,
  },
  {
    name: "Queen Anne's County",
    description:
      "Patients from Centreville, Queenstown, Chester, and other Queen Anne's County communities regularly visit us for pain management care not available locally.",
    highlight: false,
  },
  {
    name: "Howard County",
    description:
      "Residents of Ellicott City, Laurel, Jessup, and other Howard County communities have access to our practice via major commuting routes.",
    highlight: false,
  },
  {
    name: "All of Maryland",
    description:
      "Established patients anywhere in Maryland can access follow-up care through our telemedicine program — no travel required.",
    highlight: false,
  },
];

export default function AreasWeServePage() {
  return (
    <>
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        <HeroSection
          headline="Pain Management Serving Central Maryland"
          subheadline="Experience a world of difference. Conveniently located on Ritchie Highway in Pasadena, we serve patients from Pasadena, Kent Island, Columbia, and across Anne Arundel, Queen Anne's, and Howard Counties."
          primaryCta={{ label: "Request Appointment", href: "/contact" }}
        />

        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-brand-blue-light text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Service Area
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Communities We Serve
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
                Our convenient Pasadena location makes us accessible to patients
                throughout central Maryland. We also offer telemedicine follow-up
                visits for established patients anywhere in Maryland.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className={`rounded-xl p-6 border ${
                    area.highlight
                      ? "bg-brand-blue text-white border-brand-blue"
                      : "bg-brand-cream border-gray-100"
                  }`}
                >
                  <h3
                    className={`font-bold text-lg mb-2 ${
                      area.highlight ? "text-white" : "text-brand-navy"
                    }`}
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {area.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      area.highlight ? "text-blue-100" : "text-text-muted"
                    }`}
                  >
                    {area.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-brand-navy text-white rounded-2xl p-8 text-center">
              <h2
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Not Sure If We Serve Your Area?
              </h2>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
                Give us a call — if we cannot help you directly, we will do
                our best to point you toward the right care in your community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:4438254050"
                  className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  Call (443) 825-4050
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-navy transition-colors text-sm"
                >
                  Send Us a Message
                </Link>
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
