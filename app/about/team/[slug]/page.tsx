import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { providers, providerDisplayName } from "@/lib/data/providers";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const provider = providers.find((p) => p.slug === slug);
  if (!provider) return {};

  return {
    title: `${providerDisplayName(provider)} | Pain Management Provider`,
    description: `Meet ${providerDisplayName(provider)}, ${provider.title} at Global Pain Management in Pasadena and Kent Island, MD. Specializing in comprehensive pain management care.`,
    alternates: {
      canonical: `https://globalpainmd.com/about/team/${provider.slug}`,
    },
  };
}

export default async function ProviderPage({ params }: Props) {
  const { slug } = await params;
  const provider = providers.find((p) => p.slug === slug);

  if (!provider) notFound();

  const providerJsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `https://globalpainmd.com/about/team/${provider.slug}#provider`,
    name: providerDisplayName(provider),
    givenName: provider.name.split(" ")[0],
    familyName: provider.name.split(" ").slice(1).join(" "),
    jobTitle: provider.title,
    description: provider.bio[0],
    url: `https://globalpainmd.com/about/team/${provider.slug}`,
    medicalSpecialty: "https://schema.org/PainManagement",
    knowsAbout: provider.specialties,
    ...(provider.slug === "haddi-ogunsola-md" && {
      award: ["Maryland Top Doctor 2024", "Women in Medicine Honoree 2023"],
      alumniOf: [
        { "@type": "EducationalOrganization", name: "Medical College of Georgia" },
        { "@type": "EducationalOrganization", name: "Virginia Commonwealth University Health Center" },
        { "@type": "EducationalOrganization", name: "University of Maryland Medical Center / R Adams Cowley Shock Trauma Center" },
      ],
    }),
    worksFor: {
      "@type": "MedicalClinic",
      "@id": "https://globalpainmd.com/#organization",
      name: "Global Pain Management",
      url: "https://globalpainmd.com",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://globalpainmd.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://globalpainmd.com/about" },
      { "@type": "ListItem", position: 3, name: "Our Team", item: "https://globalpainmd.com/about/team" },
      { "@type": "ListItem", position: 4, name: providerDisplayName(provider), item: `https://globalpainmd.com/about/team/${provider.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(providerJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        {/* Masthead */}
        <div className="bg-navy text-paper py-12 lg:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col sm:flex-row items-start gap-8 lg:gap-12">
              <div className="w-40 h-48 sm:w-44 sm:h-56 shrink-0 overflow-hidden rounded-[5px] border border-paper/15 bg-navy-soft">
                {provider.imageSrc ? (
                  <Image
                    src={provider.imageSrc}
                    alt={provider.imageAlt}
                    width={220}
                    height={280}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-fraunces text-5xl text-paper/30" aria-hidden="true">
                      {provider.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="pt-1">
                {provider.isFounder && (
                  <p className="eyebrow eyebrow--light mb-4">Founder &amp; Medical Director</p>
                )}
                <h1 className="text-4xl lg:text-[3.2rem] leading-[1.04] text-paper">
                  {providerDisplayName(provider)}
                </h1>
                <p className="mt-2 text-paper/65 text-[0.95rem]">{provider.title}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={provider.telemedicineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-clay text-[0.85rem] px-5 py-2.5"
                  >
                    Join Telemedicine Visit
                  </a>
                  <Link href="/contact" className="btn btn-outline-light text-[0.85rem] px-5 py-2.5">
                    Request Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <section className="bg-paper py-12 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_20rem] gap-12 lg:gap-16">
              <article className="max-w-2xl">
                <h2 className="text-[1.7rem] text-ink mb-6" style={{ fontWeight: 560 }}>
                  About {providerDisplayName(provider)}
                </h2>
                <div className="space-y-5 text-body leading-relaxed">
                  {provider.bio.map((paragraph, i) => (
                    <p key={i} className={i === 0 ? "lead text-body" : undefined}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {provider.education && provider.education.length > 0 && (
                  <div className="mt-12">
                    <h3 className="font-fraunces text-xl text-ink mb-5" style={{ fontWeight: 560 }}>
                      Education &amp; Training
                    </h3>
                    <ul className="border-t border-line">
                      {provider.education.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 py-3.5 border-b border-line text-[0.95rem] text-body"
                        >
                          <span className="text-clay mt-0.5 shrink-0" aria-hidden="true">
                            ✳
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>

              {/* Sidebar */}
              <aside className="space-y-6 lg:sticky lg:top-28 self-start">
                <div className="card p-6">
                  <p className="eyebrow mb-4">Areas of Focus</p>
                  <ul className="space-y-2.5">
                    {provider.specialties.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-[0.92rem] text-body">
                        <span className="text-sage mt-1.5 h-1 w-1 rounded-full bg-current shrink-0" aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-sage-soft border border-sage/25 rounded-[5px] p-6">
                  <p className="font-fraunces text-lg text-sage-deep mb-2" style={{ fontWeight: 560 }}>
                    Telemedicine available
                  </p>
                  <p className="text-body text-[0.9rem] mb-4 leading-relaxed">
                    Established patients with a scheduled appointment can join a virtual
                    visit with {provider.name.split(" ")[0]} using the link below.
                  </p>
                  <a
                    href={provider.telemedicineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-navy w-full text-[0.85rem] py-2.5"
                  >
                    Join Telemedicine Visit
                  </a>
                </div>

                <div className="bg-navy text-paper rounded-[5px] p-6">
                  <p className="font-fraunces text-lg text-paper mb-2" style={{ fontWeight: 560 }}>
                    Schedule an appointment
                  </p>
                  <p className="text-paper/70 text-[0.9rem] mb-4 leading-relaxed">
                    Ready to be seen? Request an appointment with our team today.
                  </p>
                  <Link href="/contact" className="btn btn-clay w-full text-[0.85rem] py-2.5">
                    Request Appointment
                  </Link>
                  <a href={PHONE_HREF} className="btn btn-outline-light w-full text-[0.85rem] py-2.5 mt-2.5">
                    Call {PHONE_DISPLAY}
                  </a>
                </div>
              </aside>
            </div>

            <div className="mt-14 pt-8 border-t border-line">
              <Link href="/about/team" className="link-arrow">
                <span aria-hidden="true">←</span> Back to our team
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
