import type { Metadata } from "next";
import Link from "next/link";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FAQAccordion from "@/components/FAQAccordion";
import OfficeHoursCard from "@/components/OfficeHoursCard";
import StickyCallBar from "@/components/StickyCallBar";
import { PHONE_DISPLAY, PHONE_HREF, PATIENT_PORTAL_URL, MAPS_URL, ADDRESS } from "@/lib/site";

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

const quickLinks = [
  {
    title: "Patient Portal",
    desc: "Access records, lab results, and messages",
    href: PATIENT_PORTAL_URL,
    external: true,
    cta: "Log in",
  },
  {
    title: "Call the Office",
    desc: "Speak with our front desk team",
    href: PHONE_HREF,
    external: false,
    cta: PHONE_DISPLAY,
  },
  {
    title: "Get Directions",
    desc: `${ADDRESS.line1}, ${ADDRESS.city}`,
    href: MAPS_URL,
    external: true,
    cta: "View on Maps",
  },
  {
    title: "Telemedicine",
    desc: "Join your scheduled virtual visit",
    href: "/about/team",
    external: false,
    cta: "Find your provider",
  },
];

export default function PatientResourcesPage() {
  return (
    <>
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        <HeroSection
          badge="Patient Resources"
          headline="Everything you need before your visit"
          subheadline="Experience a world of difference. Prepare for your appointment, access your records, and get the most from your care at Global Pain Management."
          primaryCta={{ label: "Request Appointment", href: "/contact" }}
        />

        <section className="bg-paper py-12 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_20rem] gap-12 lg:gap-16">
              {/* Main */}
              <div className="space-y-14">
                {/* Quick links */}
                <div>
                  <p className="eyebrow mb-5">Quick Links</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {quickLinks.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="card card-link group p-5"
                      >
                        <p className="font-fraunces text-[1.08rem] text-ink group-hover:text-clay-deep transition-colors" style={{ fontWeight: 560 }}>
                          {item.title}
                        </p>
                        <p className="text-[0.85rem] text-muted mt-1">{item.desc}</p>
                        <p className="link-arrow mt-3 text-[0.85rem]">
                          {item.cta} <span className="arrow" aria-hidden="true">→</span>
                        </p>
                      </a>
                    ))}
                  </div>
                </div>

                {/* What to expect */}
                <div>
                  <p className="eyebrow mb-5">Before You Arrive</p>
                  <h2 className="text-[1.8rem] text-ink mb-5" style={{ fontWeight: 560 }}>
                    What to expect at your first visit
                  </h2>
                  <div className="space-y-4 text-body leading-relaxed">
                    <p className="lead text-body dropcap">
                      Your first appointment at Global Pain Management is a comprehensive
                      pain evaluation. We review your complete medical history, the nature
                      and duration of your pain, previous treatments you have tried, and any
                      imaging or specialist reports you bring.
                    </p>
                    <p>
                      A physical examination appropriate to your condition will be
                      performed. Afterward, your provider will discuss their findings and
                      recommend a treatment plan tailored to your condition and goals. You
                      are encouraged to ask questions at every step.
                    </p>
                    <p>
                      Please plan to arrive 15–20 minutes early to complete intake
                      paperwork. Bring a photo ID, your insurance card, a full medication
                      list, and any relevant imaging.
                    </p>
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <p className="eyebrow mb-5">Common Questions</p>
                  <h2 className="text-[1.8rem] text-ink mb-6" style={{ fontWeight: 560 }}>
                    Frequently asked questions
                  </h2>
                  <FAQAccordion faqs={faqs} />
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6 lg:sticky lg:top-28 self-start">
                <OfficeHoursCard />
                <div className="bg-navy text-paper rounded-[5px] p-6">
                  <p className="font-fraunces text-lg text-paper mb-2" style={{ fontWeight: 560 }}>
                    Questions?
                  </p>
                  <p className="text-paper/70 text-[0.9rem] mb-4 leading-relaxed">
                    Our front desk is here to help with scheduling, insurance verification,
                    and any questions about your care.
                  </p>
                  <a href={PHONE_HREF} className="btn btn-clay w-full text-[0.85rem] py-2.5">
                    Call {PHONE_DISPLAY}
                  </a>
                  <Link href="/contact" className="btn btn-outline-light w-full text-[0.85rem] py-2.5 mt-2.5">
                    Send a Message
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
