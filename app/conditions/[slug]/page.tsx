import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { conditions } from "@/lib/data/conditions";
import { PHONE_DISPLAY, PHONE_HREF, ADDRESS } from "@/lib/site";

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

function Masthead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="bg-navy text-paper py-12 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <p className="eyebrow eyebrow--light mb-5">{eyebrow}</p>
        <h1 className="text-4xl lg:text-[3.4rem] leading-[1.05] text-paper max-w-3xl">
          {title}
        </h1>
        <p className="mt-5 text-paper/75 text-lg max-w-2xl leading-relaxed">
          {intro}
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
  );
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const condition = conditions.find((c) => c.slug === slug);

  if (!condition) notFound();

  // Concise page for conditions without full content
  if (!condition.fullContent) {
    return (
      <>
        <PatientPortalBanner />
        <Header />
        <main id="main-content">
          <Masthead
            eyebrow="Conditions We Treat"
            title={condition.name}
            intro={condition.shortDescription}
          />
          <section className="bg-paper py-12 lg:py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="lead text-body dropcap mb-7">
                At Global Pain Management, we have extensive experience treating{" "}
                {condition.name.toLowerCase()}. Our board-certified team conducts a
                thorough evaluation to understand the nature and severity of your pain
                and develops an individualized treatment plan.
              </p>
              <p className="text-body leading-relaxed mb-10">
                Treatment options may include interventional procedures such as nerve
                blocks and injections, medication management, TENS therapy, acupuncture,
                and coordination with physical therapists — depending on your specific
                diagnosis and goals.
              </p>
              <div className="card p-8">
                <h2
                  className="text-xl text-ink mb-3"
                  style={{ fontWeight: 560 }}
                >
                  Ready to get help with your {condition.name.toLowerCase()}?
                </h2>
                <p className="text-body text-[0.95rem] mb-6 leading-relaxed">
                  Contact our team today to schedule a comprehensive pain evaluation.
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
              <div className="mt-10">
                <Link href="/conditions" className="link-arrow">
                  <span aria-hidden="true">←</span> Back to all conditions
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
        <Masthead
          eyebrow="Conditions We Treat"
          title={condition.name}
          intro={condition.shortDescription}
        />

        <section className="bg-paper py-12 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_20rem] gap-12 lg:gap-16">
              {/* Article */}
              <article className="max-w-2xl">
                <p className="lead text-body dropcap">{intro}</p>

                <h2 className="text-[1.7rem] text-ink mt-12 mb-4" style={{ fontWeight: 560 }}>
                  What is {condition.name.toLowerCase()}?
                </h2>
                <p className="text-body leading-relaxed">{whatItIs}</p>

                {symptoms && symptoms.length > 0 && (
                  <>
                    <h2 className="text-[1.7rem] text-ink mt-12 mb-5" style={{ fontWeight: 560 }}>
                      Common symptoms
                    </h2>
                    <ul className="border-t border-line">
                      {symptoms.map((s) => (
                        <li
                          key={s}
                          className="flex items-start gap-3 py-3 border-b border-line text-body text-[0.97rem]"
                        >
                          <span className="text-clay mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0" aria-hidden="true" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <h2 className="text-[1.7rem] text-ink mt-12 mb-4" style={{ fontWeight: 560 }}>
                  How we treat {condition.name.toLowerCase()}
                </h2>
                <p className="text-body leading-relaxed">{howWeTreat}</p>

                {treatments && treatments.length > 0 && (
                  <>
                    <h3 className="font-fraunces text-xl text-ink mt-10 mb-4" style={{ fontWeight: 560 }}>
                      Treatment options we may use
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {treatments.map((t) => (
                        <div
                          key={t}
                          className="flex items-center gap-2.5 bg-sage-soft/60 border border-sage/20 rounded-[4px] px-4 py-3"
                        >
                          <span className="text-sage-deep" aria-hidden="true">
                            ✳
                          </span>
                          <span className="text-[0.9rem] text-ink">{t}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* CTA */}
                <div className="card p-8 mt-12">
                  <h2 className="text-xl text-ink mb-3" style={{ fontWeight: 560 }}>
                    Ready to address your {condition.name.toLowerCase()}?
                  </h2>
                  <p className="text-body text-[0.95rem] mb-6 leading-relaxed">
                    Our team in Pasadena, MD is accepting new patients. Call us or submit
                    an appointment request online.
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
                  <p className="eyebrow eyebrow--light mb-4">Our Location</p>
                  <address className="not-italic text-paper/80 text-[0.92rem] space-y-1 leading-relaxed">
                    <p>{ADDRESS.line1}</p>
                    <p>
                      {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                    </p>
                    <p className="pt-3">
                      <a href={PHONE_HREF} className="font-semibold text-brass hover:underline">
                        {PHONE_DISPLAY}
                      </a>
                    </p>
                  </address>
                </div>

                <div className="card p-6">
                  <p className="eyebrow mb-4">Related Procedures</p>
                  <ul className="space-y-2.5 text-[0.92rem]">
                    {[
                      { label: "Interventional Injections", href: "/procedures/interventional-injections" },
                      { label: "Radiofrequency Ablation", href: "/procedures/radiofrequency-ablation" },
                      { label: "Medication Management", href: "/procedures/medication-management" },
                      { label: "Physical Therapy", href: "/procedures/physical-therapy" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-clay-deep hover:underline">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card p-6">
                  <p className="eyebrow mb-4">We Serve</p>
                  <ul className="space-y-2 text-[0.92rem] text-body">
                    {["Pasadena, MD", "Glen Burnie, MD", "Kent Island, MD", "Columbia, MD", "Anne Arundel County"].map(
                      (area) => (
                        <li key={area} className="flex items-center gap-2.5">
                          <span className="text-sage h-1 w-1 rounded-full bg-current" aria-hidden="true" />
                          {area}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </aside>
            </div>

            <div className="mt-14 pt-8 border-t border-line">
              <Link href="/conditions" className="link-arrow">
                <span aria-hidden="true">←</span> Back to all conditions
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
