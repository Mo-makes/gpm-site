import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { providers } from "@/lib/data/providers";

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
    title: `${provider.name}, ${provider.credentials} | Pain Management Provider`,
    description: `Meet ${provider.name}, ${provider.credentials}, ${provider.title} at Global Pain Management in Pasadena, MD. Specializing in comprehensive pain management care.`,
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
    name: `${provider.name}, ${provider.credentials}`,
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
      { "@type": "ListItem", position: 4, name: `${provider.name}, ${provider.credentials}`, item: `https://globalpainmd.com/about/team/${provider.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(providerJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <div className="bg-brand-navy text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              {/* Photo */}
              <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-brand-blue/30 flex-shrink-0 bg-brand-slate">
                {provider.imageSrc ? (
                  <Image
                    src={provider.imageSrc}
                    alt={provider.imageAlt}
                    width={176}
                    height={176}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl font-bold text-brand-blue" aria-hidden="true">
                      {provider.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <p className="text-brand-blue-light text-sm font-medium mb-2">
                  {provider.title}
                </p>
                <h1
                  className="text-3xl lg:text-5xl font-extrabold mb-1"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {provider.name}
                </h1>
                <p className="text-2xl text-brand-blue font-bold">
                  {provider.credentials}
                </p>
                <p className="text-blue-100 text-sm italic mt-3 max-w-xl">
                  Experience a world of difference
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={provider.telemedicineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-teal text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
                  >
                    Join Telemedicine Visit
                  </a>
                  <Link
                    href="/contact"
                    className="bg-brand-blue text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Request Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main bio */}
              <div className="lg:col-span-2">
                <h2
                  className="text-2xl font-bold text-brand-navy mb-6"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  About {provider.name}
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  {provider.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {provider.education && provider.education.length > 0 && (
                  <div className="mt-10">
                    <h3
                      className="text-lg font-bold text-brand-navy mb-4"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Education & Training
                    </h3>
                    <ul className="space-y-2">
                      {provider.education.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-text-muted"
                        >
                          <span
                            className="text-brand-teal font-bold mt-0.5"
                            aria-hidden="true"
                          >
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Specialties */}
                <div className="bg-brand-cream rounded-xl p-6">
                  <h3
                    className="font-bold text-brand-navy text-base mb-4"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Areas of Focus
                  </h3>
                  <ul className="space-y-2">
                    {provider.specialties.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2 text-sm text-text-muted"
                      >
                        <span
                          className="text-brand-blue font-bold mt-0.5"
                          aria-hidden="true"
                        >
                          •
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Telemedicine CTA */}
                <div className="bg-brand-teal text-white rounded-xl p-6">
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Telemedicine Available
                  </h3>
                  <p className="text-teal-100 text-sm mb-4 leading-relaxed">
                    Established patients with a scheduled appointment can join
                    a virtual visit with {provider.name.split(" ")[0]} using
                    the link below.
                  </p>
                  <a
                    href={provider.telemedicineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-white text-brand-teal py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-50 transition-colors"
                  >
                    Join Telemedicine Visit
                  </a>
                </div>

                {/* Schedule */}
                <div className="bg-brand-navy text-white rounded-xl p-6">
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Schedule an Appointment
                  </h3>
                  <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                    Ready to be seen? Request an appointment with our team today.
                  </p>
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
                    Call (443) 825-4050
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to team */}
        <div className="bg-brand-cream py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/about/team"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline text-sm"
            >
              ← Back to Our Team
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
