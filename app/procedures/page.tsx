import type { Metadata } from "next";
import Link from "next/link";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StickyCallBar from "@/components/StickyCallBar";
import { procedures } from "@/lib/data/procedures";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

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

function ProcedureCard({
  slug,
  name,
  shortDescription,
}: {
  slug: string;
  name: string;
  shortDescription: string;
}) {
  return (
    <Link href={`/procedures/${slug}`} className="card card-link group p-6 flex flex-col h-full">
      <h3 className="font-fraunces text-[1.22rem] text-ink leading-snug mb-2.5" style={{ fontWeight: 560 }}>
        {name}
      </h3>
      <p className="text-[0.9rem] text-body leading-relaxed flex-grow">{shortDescription}</p>
      <span className="link-arrow mt-5">
        Learn more <span className="arrow" aria-hidden="true">→</span>
      </span>
    </Link>
  );
}

export default function ProceduresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        <HeroSection
          badge="Procedures & Treatments"
          headline="Targeted relief, delivered with precision"
          subheadline="Experience a world of difference. From minimally invasive spinal injections to integrative therapies like acupuncture and biofeedback, we offer a full spectrum of interventional and supportive pain treatments."
          primaryCta={{ label: "Request Appointment", href: "/contact" }}
          secondaryCta={{ label: "View Conditions", href: "/conditions" }}
        />

        {/* Interventional */}
        <section className="bg-paper py-16 lg:py-24" aria-labelledby="interventional-heading">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl mb-12">
              <p className="eyebrow mb-5">Interventional</p>
              <h2
                id="interventional-heading"
                className="text-3xl lg:text-[2.6rem] leading-[1.1] text-ink mb-4"
              >
                Interventional pain procedures
              </h2>
              <p className="lead text-body">
                Our board-certified physician performs minimally invasive, injection-based
                procedures that deliver relief directly to the source of your pain.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {interventional.map((proc) => (
                <ProcedureCard key={proc.slug} {...proc} />
              ))}
            </div>
          </div>
        </section>

        {/* Other therapies */}
        <section className="bg-sand py-16 lg:py-24" aria-labelledby="therapies-heading">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl mb-12">
              <p className="eyebrow mb-5">Supportive Therapies</p>
              <h2
                id="therapies-heading"
                className="text-3xl lg:text-[2.6rem] leading-[1.1] text-ink mb-4"
              >
                Medication &amp; complementary therapies
              </h2>
              <p className="lead text-body">
                Beyond injections, we offer medication management protocols and integrative
                therapies that complement your overall treatment plan.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {nonInterventional.map((proc) => (
                <ProcedureCard key={proc.slug} {...proc} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy text-paper py-16 lg:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-[2.4rem] leading-[1.1] text-paper mb-4">
              Find out which treatment is right for you
            </h2>
            <p className="text-paper/75 mb-8 leading-relaxed">
              Every treatment plan begins with a comprehensive evaluation. Schedule yours
              today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-clay">
                Request Appointment
              </Link>
              <a href={PHONE_HREF} className="btn btn-outline-light">
                Call {PHONE_DISPLAY}
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
