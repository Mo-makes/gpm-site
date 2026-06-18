import type { Metadata } from "next";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { PHONE_DISPLAY, PHONE_HREF, ADDRESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Global Pain Management",
  description:
    "Privacy policy for Global Pain Management, 8031 Ritchie Highway, Suite 100, Pasadena, MD 21122.",
  alternates: { canonical: "https://globalpainmd.com/privacy-policy" },
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="font-fraunces text-[1.45rem] text-ink mb-3" style={{ fontWeight: 560 }}>
        {title}
      </h2>
      <div className="space-y-3 text-body leading-relaxed text-[0.97rem]">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PatientPortalBanner />
      <Header />
      <main id="main-content" className="bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <p className="eyebrow mb-5">Legal</p>
          <h1 className="text-4xl lg:text-[3rem] leading-[1.05] text-ink mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted text-[0.9rem] mb-12">Last updated: January 2025</p>

          <div className="space-y-10">
            <Section id="intro-heading" title="Introduction">
              <p>
                Global Pain Management (&quot;we,&quot; &quot;our,&quot; or &quot;the
                practice&quot;) is committed to protecting your privacy. This Privacy
                Policy describes how we collect, use, and protect information gathered
                through our website, globalpainmd.com, and our contact form. It does not
                govern the handling of your protected health information (PHI), which is
                governed by our HIPAA Notice of Privacy Practices provided to patients
                separately.
              </p>
            </Section>

            <Section id="collect-heading" title="Information We Collect">
              <p>
                We collect information you voluntarily provide through our website contact
                form, including your name, phone number, email address, and the message you
                submit. We may also collect non-personal, anonymized data about how visitors
                use our website through analytics tools (such as Vercel Analytics) to
                understand site performance and improve the user experience.
              </p>
              <p>
                <strong className="text-ink">Important:</strong> Our website contact form is
                not a secure channel for protected health information. Please do not submit
                personal medical details, diagnoses, or treatment information through the
                contact form. For clinical questions, call our office directly at{" "}
                {PHONE_DISPLAY}.
              </p>
            </Section>

            <Section id="use-heading" title="How We Use Your Information">
              <p>Information submitted through our website is used to:</p>
              <ul className="list-disc pl-6 space-y-1 text-body">
                <li>Respond to your inquiry or appointment request</li>
                <li>Schedule appointments and coordinate care</li>
                <li>Contact you with information relevant to your inquiry</li>
              </ul>
              <p>
                We do not sell, rent, or share your information with third parties for
                marketing purposes.
              </p>
            </Section>

            <Section id="hipaa-heading" title="HIPAA and Patient Health Information">
              <p>
                Global Pain Management is a covered entity under the Health Insurance
                Portability and Accountability Act (HIPAA). Your protected health
                information — including medical records, diagnoses, treatment history, and
                billing information — is handled in accordance with our HIPAA Notice of
                Privacy Practices. You will receive this notice at your first appointment.
                For questions about how your health information is used and protected,
                contact our office at {PHONE_DISPLAY}.
              </p>
            </Section>

            <Section id="security-heading" title="Website Security">
              <p>
                Our website uses industry-standard security measures including HTTPS
                encryption for all data transmitted between your browser and our servers.
                However, no internet transmission is completely secure. We encourage you
                not to submit sensitive health information through our website contact form.
              </p>
            </Section>

            <Section id="cookies-heading" title="Cookies and Analytics">
              <p>
                Our website may use privacy-friendly, anonymized web analytics to understand
                how visitors use the site. We do not use third-party advertising cookies or
                tracking pixels. Analytics data does not personally identify you.
              </p>
            </Section>

            <Section id="links-heading" title="Third-Party Links">
              <p>
                Our website contains links to third-party websites including our patient
                portal (yourhealthfile.com), Google Maps, and Facebook. These sites have
                their own privacy policies, and we are not responsible for their content or
                practices. We encourage you to review their policies before providing any
                personal information.
              </p>
            </Section>

            <Section id="changes-heading" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. The &quot;Last
                updated&quot; date at the top of this page reflects the most recent
                revision. We encourage you to review this policy periodically.
              </p>
            </Section>

            <Section id="contact-privacy-heading" title="Contact Us">
              <p>
                If you have questions about this Privacy Policy or how we handle your
                information, please contact us:
              </p>
              <address className="not-italic text-body text-[0.95rem] space-y-1">
                <p className="font-fraunces text-ink text-[1.05rem]" style={{ fontWeight: 560 }}>
                  Global Pain Management
                </p>
                <p>{ADDRESS.line1}</p>
                <p>
                  {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                </p>
                <p>
                  Phone:{" "}
                  <a href={PHONE_HREF} className="text-clay-deep hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </address>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
