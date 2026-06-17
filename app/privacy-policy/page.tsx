import type { Metadata } from "next";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

export const metadata: Metadata = {
  title: "Privacy Policy | Global Pain Management",
  description:
    "Privacy policy for Global Pain Management, 8031 Ritchie Highway, Suite 100, Pasadena, MD 21122.",
  alternates: { canonical: "https://globalpainmd.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PatientPortalBanner />
      <Header />
      <main id="main-content" className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <h1
            className="text-3xl lg:text-4xl font-bold text-brand-navy mb-2"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-text-muted text-sm mb-10">
            Last updated: January 2025
          </p>

          <div className="prose prose-sm max-w-none space-y-8 text-text-primary leading-relaxed">
            <section aria-labelledby="intro-heading">
              <h2
                id="intro-heading"
                className="text-xl font-bold text-brand-navy mb-3"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Introduction
              </h2>
              <p>
                Global Pain Management (&quot;we,&quot; &quot;our,&quot; or
                &quot;the practice&quot;) is committed to protecting your
                privacy. This Privacy Policy describes how we collect, use, and
                protect information gathered through our website,
                globalpainmd.com, and our contact form. It does not govern the
                handling of your protected health information (PHI), which is
                governed by our HIPAA Notice of Privacy Practices provided to
                patients separately.
              </p>
            </section>

            <section aria-labelledby="collect-heading">
              <h2
                id="collect-heading"
                className="text-xl font-bold text-brand-navy mb-3"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Information We Collect
              </h2>
              <p>
                We collect information you voluntarily provide through our
                website contact form, including your name, phone number, email
                address, and the message you submit. We may also collect
                non-personal, anonymized data about how visitors use our
                website through analytics tools (such as Vercel Analytics) to
                understand site performance and improve the user experience.
              </p>
              <p className="mt-3">
                <strong>Important:</strong> Our website contact form is not a
                secure channel for protected health information. Please do not
                submit personal medical details, diagnoses, or treatment
                information through the contact form. For clinical questions,
                call our office directly at (443) 825-4050.
              </p>
            </section>

            <section aria-labelledby="use-heading">
              <h2
                id="use-heading"
                className="text-xl font-bold text-brand-navy mb-3"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                How We Use Your Information
              </h2>
              <p>Information submitted through our website is used to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-text-muted">
                <li>Respond to your inquiry or appointment request</li>
                <li>Schedule appointments and coordinate care</li>
                <li>Contact you with information relevant to your inquiry</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or share your information with third
                parties for marketing purposes.
              </p>
            </section>

            <section aria-labelledby="hipaa-heading">
              <h2
                id="hipaa-heading"
                className="text-xl font-bold text-brand-navy mb-3"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                HIPAA and Patient Health Information
              </h2>
              <p>
                Global Pain Management is a covered entity under the Health
                Insurance Portability and Accountability Act (HIPAA). Your
                protected health information — including medical records,
                diagnoses, treatment history, and billing information — is
                handled in accordance with our HIPAA Notice of Privacy
                Practices. You will receive this notice at your first
                appointment. For questions about how your health information is
                used and protected, contact our office at (443) 825-4050.
              </p>
            </section>

            <section aria-labelledby="security-heading">
              <h2
                id="security-heading"
                className="text-xl font-bold text-brand-navy mb-3"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Website Security
              </h2>
              <p>
                Our website uses industry-standard security measures including
                HTTPS encryption for all data transmitted between your browser
                and our servers. However, no internet transmission is completely
                secure. We encourage you not to submit sensitive health
                information through our website contact form.
              </p>
            </section>

            <section aria-labelledby="cookies-heading">
              <h2
                id="cookies-heading"
                className="text-xl font-bold text-brand-navy mb-3"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Cookies and Analytics
              </h2>
              <p>
                Our website may use privacy-friendly, anonymized web analytics
                to understand how visitors use the site. We do not use
                third-party advertising cookies or tracking pixels. Analytics
                data does not personally identify you.
              </p>
            </section>

            <section aria-labelledby="links-heading">
              <h2
                id="links-heading"
                className="text-xl font-bold text-brand-navy mb-3"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Third-Party Links
              </h2>
              <p>
                Our website contains links to third-party websites including our
                patient portal (yourhealthfile.com), Google Maps, and Facebook.
                These sites have their own privacy policies, and we are not
                responsible for their content or practices. We encourage you to
                review their policies before providing any personal information.
              </p>
            </section>

            <section aria-labelledby="changes-heading">
              <h2
                id="changes-heading"
                className="text-xl font-bold text-brand-navy mb-3"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. The
                &quot;Last updated&quot; date at the top of this page reflects
                the most recent revision. We encourage you to review this policy
                periodically.
              </p>
            </section>

            <section aria-labelledby="contact-privacy-heading">
              <h2
                id="contact-privacy-heading"
                className="text-xl font-bold text-brand-navy mb-3"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or how we handle
                your information, please contact us:
              </p>
              <address className="not-italic mt-3 text-text-muted text-sm space-y-1">
                <p className="font-semibold text-text-primary">
                  Global Pain Management
                </p>
                <p>8031 Ritchie Highway, Suite 100</p>
                <p>Pasadena, MD 21122</p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:4438254050"
                    className="text-brand-blue hover:underline"
                  >
                    (443) 825-4050
                  </a>
                </p>
              </address>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
