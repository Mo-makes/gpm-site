import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { conditions } from "@/lib/data/conditions";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = conditions.find((c) => c.slug === slug);
  if (!condition) return {};

  return {
    title: `${condition.name} Treatment in Pasadena, Kent Island & Columbia, MD`,
    description:
      condition.fullContent?.intro.substring(0, 155) ??
      `${condition.shortDescription} Global Pain Management serves Pasadena, Kent Island, and Anne Arundel County, MD.`,
    alternates: {
      canonical: `https://globalpainmd.com/conditions/${condition.slug}`,
    },
  };
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const condition = conditions.find((c) => c.slug === slug);

  if (!condition) notFound();

  // For conditions with no full content, render a concise page
  if (!condition.fullContent) {
    return (
      <>
        <PatientPortalBanner />
        <Header />
        <main id="main-content">
          <div className="bg-brand-navy text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-brand-blue-light text-sm font-medium mb-2">
                Conditions We Treat
              </p>
              <p className="text-blue-200/90 text-sm italic mb-3 max-w-2xl">
                Experience a world of difference
              </p>
              <h1
                className="text-3xl lg:text-5xl font-extrabold"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {condition.name}
              </h1>
              <p className="mt-4 text-blue-100 text-lg max-w-2xl leading-relaxed">
                {condition.shortDescription}
              </p>
            </div>
          </div>

          <section className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-text-muted leading-relaxed mb-8">
                At Global Pain Management, we have extensive experience treating{" "}
                {condition.name.toLowerCase()}. Our board-certified pain
                management team will conduct a thorough evaluation to understand
                the nature and severity of your pain and develop an
                individualized treatment plan.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                Treatment options may include interventional procedures such as
                nerve blocks and injections, medication management, TENS
                therapy, acupuncture, and coordination with physical therapists
                — depending on your specific diagnosis and goals.
              </p>

              <div className="bg-brand-cream rounded-2xl p-8">
                <h2
                  className="text-xl font-bold text-brand-navy mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Ready to Get Help with Your{" "}
                  {condition.name.toLowerCase()}?
                </h2>
                <p className="text-text-muted mb-6 text-sm">
                  Contact our team today to schedule a comprehensive pain
                  evaluation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                  >
                    Request Appointment
                  </Link>
                  <a
                    href="tel:4438254050"
                    className="border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-colors text-sm"
                  >
                    Call (443) 825-4050
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/conditions"
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline text-sm"
                >
                  ← Back to All Conditions
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <StickyCallBar />
      </>
    );
  }

  const { intro, whatItIs, howWeTreat, symptoms, treatments } =
    condition.fullContent;

  const conditionJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: condition.name,
    description: intro,
    possibleTreatment: treatments?.map((t) => ({
      "@type": "MedicalTherapy",
      name: t,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionJsonLd) }}
      />
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <div className="bg-brand-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-blue-light text-sm font-medium mb-2">
              Conditions We Treat
            </p>
            <p className="text-blue-200/90 text-sm italic mb-3 max-w-2xl">
              Experience a world of difference
            </p>
            <h1
              className="text-3xl lg:text-5xl font-extrabold max-w-3xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {condition.name}
            </h1>
            <p className="mt-4 text-blue-100 text-lg max-w-2xl leading-relaxed">
              {condition.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
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
        </div>

        {/* Content */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <p className="text-text-muted leading-relaxed text-base">
                    {intro}
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-brand-navy mb-4"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    What Is {condition.name}?
                  </h2>
                  <p className="text-text-muted leading-relaxed">{whatItIs}</p>
                </div>

                {symptoms && symptoms.length > 0 && (
                  <div>
                    <h2
                      className="text-2xl font-bold text-brand-navy mb-4"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Common Symptoms
                    </h2>
                    <ul className="space-y-2">
                      {symptoms.map((s) => (
                        <li
                          key={s}
                          className="flex items-start gap-3 text-text-muted text-sm"
                        >
                          <span
                            className="text-brand-blue font-bold mt-0.5 flex-shrink-0"
                            aria-hidden="true"
                          >
                            ✓
                          </span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h2
                    className="text-2xl font-bold text-brand-navy mb-4"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    How We Treat {condition.name}
                  </h2>
                  <p className="text-text-muted leading-relaxed">
                    {howWeTreat}
                  </p>
                </div>

                {treatments && treatments.length > 0 && (
                  <div>
                    <h3
                      className="text-lg font-bold text-brand-navy mb-3"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Treatment Options We May Use
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {treatments.map((t) => (
                        <div
                          key={t}
                          className="flex items-center gap-2 bg-brand-blue-light rounded-lg px-4 py-2.5"
                        >
                          <span
                            className="text-brand-blue font-bold text-sm"
                            aria-hidden="true"
                          >
                            →
                          </span>
                          <span className="text-sm text-brand-navy font-medium">
                            {t}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-brand-cream rounded-2xl p-8">
                  <h2
                    className="text-xl font-bold text-brand-navy mb-3"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Ready to Address Your {condition.name}?
                  </h2>
                  <p className="text-text-muted text-sm mb-6 leading-relaxed">
                    Our team at Global Pain Management in Pasadena, MD is
                    accepting new patients. Call us or submit an appointment
                    request online.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                    >
                      Request Appointment
                    </Link>
                    <a
                      href="tel:4438254050"
                      className="border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-colors text-sm"
                    >
                      Call (443) 825-4050
                    </a>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-brand-navy text-white rounded-xl p-6">
                  <h3
                    className="font-bold text-lg mb-3"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Our Location
                  </h3>
                  <address className="not-italic text-blue-100 text-sm space-y-1 leading-relaxed">
                    <p>8031 Ritchie Highway</p>
                    <p>Suite 100</p>
                    <p>Pasadena, MD 21122</p>
                    <p className="mt-3">
                      <a
                        href="tel:4438254050"
                        className="text-brand-blue font-semibold hover:underline"
                      >
                        (443) 825-4050
                      </a>
                    </p>
                  </address>
                </div>

                <div className="bg-brand-cream rounded-xl p-6">
                  <h3
                    className="font-bold text-brand-navy text-base mb-3"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Related Procedures
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      { label: "Interventional Injections", href: "/procedures/interventional-injections" },
                      { label: "Radiofrequency Ablation", href: "/procedures/radiofrequency-ablation" },
                      { label: "Medication Management", href: "/procedures/medication-management" },
                      { label: "Physical Therapy", href: "/procedures/physical-therapy" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-brand-blue hover:underline"
                        >
                          {link.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-brand-cream rounded-xl p-6">
                  <h3
                    className="font-bold text-brand-navy text-base mb-3"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    We Serve
                  </h3>
                  <ul className="space-y-1 text-sm text-text-muted">
                    {[
                      "Pasadena, MD",
                      "Glen Burnie, MD",
                      "Kent Island, MD",
                      "Columbia, MD",
                      "Anne Arundel County",
                    ].map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <span className="text-brand-teal" aria-hidden="true">✓</span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white border-t border-gray-100 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/conditions"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline text-sm"
            >
              ← Back to All Conditions
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
