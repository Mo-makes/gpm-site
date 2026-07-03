import type { Metadata } from "next";
import Link from "next/link";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StickyCallBar from "@/components/StickyCallBar";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

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
      "Our Kent Island office at 130 Love Point Rd, Suite 106 in Stevensville brings board-certified pain management to Queen Anne's County — no Bay Bridge crossing required for local patients.",
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
          badge="Service Area"
          headline="Pain management serving central Maryland"
          subheadline="Experience a world of difference. With offices in Pasadena and on Kent Island, we serve patients from Stevensville, Columbia, and across Anne Arundel, Queen Anne's, and Howard Counties."
          primaryCta={{ label: "Request Appointment", href: "/contact" }}
        />

        <section className="bg-paper py-12 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl mb-8 lg:mb-12">
              <p className="eyebrow mb-5">Communities We Serve</p>
              <h2 className="text-3xl lg:text-[2.6rem] leading-[1.1] text-ink mb-4">
                Convenient to all of central Maryland
              </h2>
              <p className="lead text-body">
                Our Pasadena location makes us accessible to patients throughout the
                region. Established patients anywhere in Maryland can also use our
                telemedicine follow-up program.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className={`rounded-[5px] p-6 ${
                    area.highlight
                      ? "bg-navy text-paper"
                      : "card"
                  }`}
                >
                  <h3
                    className={`font-fraunces text-[1.2rem] mb-2.5 ${
                      area.highlight ? "text-paper" : "text-ink"
                    }`}
                    style={{ fontWeight: 560 }}
                  >
                    {area.name}
                  </h3>
                  <p
                    className={`text-[0.92rem] leading-relaxed ${
                      area.highlight ? "text-paper/75" : "text-body"
                    }`}
                  >
                    {area.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 bg-sand border border-line-strong rounded-[6px] p-8 lg:p-10 text-center">
              <h2 className="text-2xl lg:text-3xl text-ink mb-3">
                Not sure if we serve your area?
              </h2>
              <p className="text-body mb-7 max-w-xl mx-auto text-[0.97rem] leading-relaxed">
                Give us a call — if we cannot help you directly, we will do our best to
                point you toward the right care in your community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={PHONE_HREF} className="btn btn-clay">
                  Call {PHONE_DISPLAY}
                </a>
                <Link href="/contact" className="btn btn-outline">
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
