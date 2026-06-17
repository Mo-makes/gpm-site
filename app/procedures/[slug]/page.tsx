import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { procedures } from "@/lib/data/procedures";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return procedures.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const procedure = procedures.find((p) => p.slug === slug);
  if (!procedure) return {};

  return {
    title: `${procedure.name} | Pain Management in Pasadena, MD`,
    description:
      procedure.fullDescription?.substring(0, 155) ??
      `${procedure.shortDescription} Global Pain Management, Pasadena, MD.`,
    alternates: {
      canonical: `https://globalpainmd.com/procedures/${procedure.slug}`,
    },
  };
}

export default async function ProcedurePage({ params }: Props) {
  const { slug } = await params;
  const procedure = procedures.find((p) => p.slug === slug);

  if (!procedure) notFound();

  const parentProcedure = procedure.parentSlug
    ? procedures.find((p) => p.slug === procedure.parentSlug)
    : null;

  return (
    <>
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <div className="bg-brand-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-brand-blue-light text-sm mb-2">
              <Link href="/procedures" className="hover:text-white transition-colors">
                Procedures
              </Link>
              {parentProcedure && (
                <>
                  <span aria-hidden="true">›</span>
                  <Link
                    href={`/procedures/${parentProcedure.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {parentProcedure.name}
                  </Link>
                </>
              )}
            </div>
            <p className="text-blue-200/90 text-sm italic mb-3 max-w-2xl">
              Experience a world of difference
            </p>
            <h1
              className="text-3xl lg:text-5xl font-extrabold max-w-3xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {procedure.name}
            </h1>
            <p className="mt-4 text-blue-100 text-lg max-w-2xl leading-relaxed">
              {procedure.shortDescription}
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
                {procedure.fullDescription && (
                  <div>
                    <h2
                      className="text-2xl font-bold text-brand-navy mb-4"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      About This Procedure
                    </h2>
                    <p className="text-text-muted leading-relaxed">
                      {procedure.fullDescription}
                    </p>
                  </div>
                )}

                {procedure.benefits && procedure.benefits.length > 0 && (
                  <div>
                    <h2
                      className="text-2xl font-bold text-brand-navy mb-4"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Benefits
                    </h2>
                    <ul className="space-y-3">
                      {procedure.benefits.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-text-muted text-sm"
                        >
                          <span
                            className="text-brand-teal font-bold mt-0.5 flex-shrink-0"
                            aria-hidden="true"
                          >
                            ✓
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {procedure.whatToExpect && (
                  <div>
                    <h2
                      className="text-2xl font-bold text-brand-navy mb-4"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      What to Expect
                    </h2>
                    <p className="text-text-muted leading-relaxed">
                      {procedure.whatToExpect}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-brand-cream rounded-2xl p-8">
                  <h2
                    className="text-xl font-bold text-brand-navy mb-3"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Is {procedure.name} Right for You?
                  </h2>
                  <p className="text-text-muted text-sm mb-6 leading-relaxed">
                    Schedule a comprehensive evaluation with our team to
                    determine whether this procedure is appropriate for your
                    condition and goals.
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
                    Schedule at Our Office
                  </h3>
                  <address className="not-italic text-blue-100 text-sm space-y-1 leading-relaxed mb-4">
                    <p>8031 Ritchie Highway</p>
                    <p>Suite 100</p>
                    <p>Pasadena, MD 21122</p>
                  </address>
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-brand-blue text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
                  >
                    Request Appointment
                  </Link>
                  <a
                    href="tel:4438254050"
                    className="block w-full text-center border border-white text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-white hover:text-brand-navy transition-colors mt-2"
                  >
                    (443) 825-4050
                  </a>
                </div>

                {parentProcedure && (
                  <div className="bg-brand-cream rounded-xl p-6">
                    <h3
                      className="font-bold text-brand-navy text-base mb-3"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Part of Our {parentProcedure.name} Program
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-3">
                      {parentProcedure.shortDescription}
                    </p>
                    <Link
                      href={`/procedures/${parentProcedure.slug}`}
                      className="text-sm text-brand-blue font-semibold hover:underline"
                    >
                      Learn about all injection procedures →
                    </Link>
                  </div>
                )}

                <div className="bg-brand-cream rounded-xl p-6">
                  <h3
                    className="font-bold text-brand-navy text-base mb-3"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    All Procedures
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {procedures
                      .filter((p) => !p.parentSlug)
                      .map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/procedures/${p.slug}`}
                            className={`hover:underline ${
                              p.slug === procedure.slug
                                ? "text-brand-navy font-bold"
                                : "text-brand-blue"
                            }`}
                          >
                            {p.name}
                          </Link>
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
              href="/procedures"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline text-sm"
            >
              ← Back to All Procedures
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
