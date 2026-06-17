import type { Metadata } from "next";
import Link from "next/link";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FAQAccordion from "@/components/FAQAccordion";
import OfficeHoursCard from "@/components/OfficeHoursCard";
import StickyCallBar from "@/components/StickyCallBar";

export const metadata: Metadata = {
  title: "Patient Resources | Global Pain Management",
  description:
    "Patient portal access, office hours, what to expect at your visit, FAQs, and telemedicine information for Global Pain Management patients in Pasadena, MD.",
  alternates: { canonical: "https://globalpainmd.com/about/patient-resources" },
};

const faqs = [
  {
    question: "Do I need a referral to see a pain management specialist?",
    answer:
      "In many cases, a referral is not required — however, your insurance plan may require one. We recommend calling your insurance company to verify your benefits before scheduling. Our front desk can also help answer coverage questions. Call us at (443) 825-4050.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring a valid photo ID, your insurance card(s), a list of all current medications (including supplements), any relevant imaging such as X-rays or MRI reports, and the names of any other providers treating you. Arriving 15–20 minutes early helps us gather your information before your appointment.",
  },
  {
    question: "How long will my first appointment take?",
    answer:
      "New patient evaluations are typically 45–60 minutes. We take time to thoroughly review your history, understand the nature of your pain, and discuss treatment options before making any recommendations.",
  },
  {
    question: "Does Global Pain Management offer telemedicine?",
    answer:
      "Yes — we offer telemedicine follow-up visits for established patients with a scheduled appointment. Telemedicine is not currently available for new patient evaluations. Use your provider's personal doxy.me link at your scheduled appointment time. No app download is required.",
  },
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept most major insurance plans, including Medicare and many Maryland Medicaid plans. We also treat workers' compensation and personal injury cases. Please call our office at (443) 825-4050 or have your insurance card ready when you call so we can verify your specific plan.",
  },
  {
    question: "How long before I feel relief after an injection?",
    answer:
      "It depends on the type of injection. Local anesthetic components may provide immediate, temporary relief. Corticosteroids typically take 3–7 days to reach full effect and may provide relief for weeks to months. Radiofrequency ablation results often take 2–3 weeks to fully develop but can last 6 months to 2 years or more.",
  },
  {
    question: "Can I drive myself home after an injection procedure?",
    answer:
      "We recommend having a driver for most injection procedures, especially if sedation or significant numbing medication is used. Ask your provider at your pre-procedure visit what to expect for your specific procedure.",
  },
  {
    question: "How do I access the patient portal?",
    answer:
      "You can access your patient portal at any time through our secure portal at yourhealthfile.com. If you need help logging in or setting up your account, call our office at (443) 825-4050.",
  },
];

export default function PatientResourcesPage() {
  return (
    <>
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        <HeroSection
          headline="Patient Resources"
          subheadline="Experience a world of difference. Everything you need to prepare for your visit, access your records, and get the most from your care at Global Pain Management."
          primaryCta={{ label: "Request Appointment", href: "/contact" }}
        />

        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Quick links */}
                <div>
                  <h2
                    className="text-2xl font-bold text-brand-navy mb-6"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Quick Links
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Patient Portal",
                        desc: "Access records, lab results, and messages",
                        href: "https://www.yourhealthfile.com/portal/login.jsp",
                        external: true,
                        cta: "Log In →",
                      },
                      {
                        title: "Call the Office",
                        desc: "Speak with our front desk team",
                        href: "tel:4438254050",
                        external: false,
                        cta: "(443) 825-4050",
                      },
                      {
                        title: "Get Directions",
                        desc: "8031 Ritchie Hwy, Suite 100, Pasadena",
                        href: "https://www.google.com/maps?cid=12291003481097695559",
                        external: true,
                        cta: "View on Maps →",
                      },
                      {
                        title: "Telemedicine",
                        desc: "Join your scheduled virtual visit",
                        href: "/about/team",
                        external: false,
                        cta: "Find Your Provider →",
                      },
                    ].map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 bg-brand-cream rounded-xl p-5 hover:bg-brand-blue-light transition-colors group border-l-4 border-brand-blue/30 hover:border-brand-blue"
                      >
                        <div>
                          <p className="font-bold text-brand-navy text-sm group-hover:text-brand-blue transition-colors">
                            {item.title}
                          </p>
                          <p className="text-xs text-text-muted mt-0.5">
                            {item.desc}
                          </p>
                          <p className="text-xs font-semibold text-brand-blue mt-2">
                            {item.cta}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* What to expect */}
                <div>
                  <h2
                    className="text-2xl font-bold text-brand-navy mb-4"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    What to Expect at Your First Visit
                  </h2>
                  <div className="prose prose-sm max-w-none text-text-muted space-y-3 leading-relaxed">
                    <p>
                      Your first appointment at Global Pain Management is a
                      comprehensive pain evaluation. We will review your complete
                      medical history, the nature and duration of your pain,
                      previous treatments you have tried, and any imaging or
                      specialist reports you bring.
                    </p>
                    <p>
                      A physical examination appropriate to your condition will
                      be performed. After the evaluation, your provider will
                      discuss their findings and recommend a treatment plan
                      tailored to your condition and goals. You are encouraged
                      to ask questions at every step.
                    </p>
                    <p>
                      Please plan to arrive 15–20 minutes early to complete
                      intake paperwork. Bring a photo ID, your insurance card,
                      a full medication list, and any relevant imaging.
                    </p>
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h2
                    className="text-2xl font-bold text-brand-navy mb-6"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Frequently Asked Questions
                  </h2>
                  <FAQAccordion faqs={faqs} />
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <OfficeHoursCard />

                <div className="bg-brand-navy text-white rounded-xl p-6">
                  <h3
                    className="font-bold text-lg mb-3"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Questions?
                  </h3>
                  <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                    Our front desk team is here to help with scheduling,
                    insurance verification, and any questions about your care.
                  </p>
                  <a
                    href="tel:4438254050"
                    className="block w-full text-center bg-brand-blue text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
                  >
                    Call (443) 825-4050
                  </a>
                  <Link
                    href="/contact"
                    className="block w-full text-center border border-white text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-white hover:text-brand-navy transition-colors mt-2"
                  >
                    Send a Message
                  </Link>
                </div>
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
