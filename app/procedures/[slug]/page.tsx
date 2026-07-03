import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { procedures } from "@/lib/data/procedures";
import { PHONE_DISPLAY, PHONE_HREF, ADDRESS } from "@/lib/site";

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
        {/* Masthead */}
        <div className="bg-navy text-paper py-12 lg:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <nav
              className="flex items-center gap-2 text-paper/55 text-[0.82rem] mb-5"
              aria-label="Breadcrumb"
            >
              <Link href="/procedures" className="hover:text-paper transition-colors">
                Procedures
              </Link>
              {parentProcedure && (
                <>
                  <span aria-hidden="true">›</span>
                  <Link
                    href={`/procedures/${parentProcedure.slug}`}
                    className="hover:text-paper transition-colors"
                  >
                    {parentProcedure.name}
                  </Link>
                </>
              )}
            </nav>
            <h1 className="text-4xl lg:text-[3.2rem] leading-[1.06] text-paper max-w-3xl">
              {procedure.name}
            </h1>
            <p className="mt-5 text-paper/75 text-lg max-w-2xl leading-relaxed">
              {procedure.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-clay">
                Request Appointment
              </Link>
              <a href={PHONE_HREF} className="btn btn-outline-light">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        <section className="bg-paper py-12 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_20rem] gap-12 lg:gap-16">
              {/* Article */}
              <article className="max-w-2xl">
                {procedure.fullDescription && (
                  <>
                    <h2 className="text-[1.7rem] text-ink mb-4" style={{ fontWeight: 560 }}>
                      About this procedure
                    </h2>
                    <p className="lead text-body dropcap">{procedure.fullDescription}</p>
                  </>
                )}

                {procedure.benefits && procedure.benefits.length > 0 && (
                  <>
                    <h2 className="text-[1.7rem] text-ink mt-12 mb-5" style={{ fontWeight: 560 }}>
                      Benefits
                    </h2>
                    <ul className="border-t border-line">
                      {procedure.benefits.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 py-3 border-b border-line text-body text-[0.97rem]"
                        >
                          <span className="text-sage-deep mt-0.5 shrink-0" aria-hidden="true">
                            ✓
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {procedure.whatToExpect && (
                  <>
                    <h2 className="text-[1.7rem] text-ink mt-12 mb-4" style={{ fontWeight: 560 }}>
                      What to expect
                    </h2>
                    <p className="text-body leading-relaxed">{procedure.whatToExpect}</p>
                  </>
                )}

                {/* CTA */}
                <div className="card p-8 mt-12">
                  <h2 className="text-xl text-ink mb-3" style={{ fontWeight: 560 }}>
                    Is {procedure.name.toLowerCase()} right for you?
                  </h2>
                  <p className="text-body text-[0.95rem] mb-6 leading-relaxed">
                    Schedule a comprehensive evaluation with our team to determine whether
                    this procedure is appropriate for your condition and goals.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="btn btn-clay">
                      Request Appointment
                    </Link>
                    <a href={PHONE_HREF} className="btn btn-outline">
                      Call {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-6 lg:sticky lg:top-28 self-start">
                <div className="bg-navy text-paper rounded-[5px] p-6">
                  <p className="eyebrow eyebrow--light mb-4">Schedule at Our Office</p>
                  <address className="not-italic text-paper/80 text-[0.92rem] space-y-1 leading-relaxed mb-5">
                    <p>{ADDRESS.line1}</p>
                    <p>
                      {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                    </p>
                  </address>
                  <Link href="/contact" className="btn btn-clay w-full text-[0.85rem] py-2.5">
                    Request Appointment
                  </Link>
                  <a href={PHONE_HREF} className="btn btn-outline-light w-full text-[0.85rem] py-2.5 mt-2.5">
                    {PHONE_DISPLAY}
                  </a>
                </div>

                {parentProcedure && (
                  <div className="card p-6">
                    <p className="eyebrow mb-3">Part of Our Program</p>
                    <p className="font-fraunces text-[1.05rem] text-ink mb-2" style={{ fontWeight: 560 }}>
                      {parentProcedure.name}
                    </p>
                    <p className="text-body text-[0.9rem] leading-relaxed mb-3">
                      {parentProcedure.shortDescription}
                    </p>
                    <Link
                      href={`/procedures/${parentProcedure.slug}`}
                      className="link-arrow text-[0.85rem]"
                    >
                      All injection procedures{" "}
                      <span className="arrow" aria-hidden="true">→</span>
                    </Link>
                  </div>
                )}

                <div className="card p-6">
                  <p className="eyebrow mb-4">All Procedures</p>
                  <ul className="space-y-2.5 text-[0.92rem]">
                    {procedures
                      .filter((p) => !p.parentSlug)
                      .map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/procedures/${p.slug}`}
                            className={`hover:underline ${
                              p.slug === procedure.slug
                                ? "text-ink font-semibold"
                                : "text-clay-deep"
                            }`}
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </aside>
            </div>

            <div className="mt-14 pt-8 border-t border-line">
              <Link href="/procedures" className="link-arrow">
                <span aria-hidden="true">←</span> Back to all procedures
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
