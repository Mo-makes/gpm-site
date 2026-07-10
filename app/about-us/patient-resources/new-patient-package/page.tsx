"use client";

import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export default function NewPatientPackagePage() {

  return (
    <>
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        {/* Masthead */}
        <section className="bg-navy text-paper py-12 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="eyebrow eyebrow--light eyebrow--center mb-5">Patient Resources</p>
            <h1 className="text-4xl lg:text-[3.2rem] leading-[1.06] text-paper">
              New Patient Packet
            </h1>
            <p className="mt-5 text-paper/75 text-lg max-w-2xl mx-auto leading-relaxed">
              Please complete the form below before your first visit. This information
              helps us prepare for your appointment and ensure we have everything we need
              to provide you the best possible care.
            </p>
          </div>
        </section>

        {/* Instructions strip */}
        <div className="bg-sand border-b border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-[0.88rem] text-body justify-center">
              {[
                "Save and continue later if needed",
                "Your information is encrypted and secure",
                `Questions? Call ${PHONE_DISPLAY}`,
              ].map((tip) => (
                <li key={tip} className="flex items-center gap-2">
                  <span className="text-sage-deep font-bold" aria-hidden="true">
                    ✓
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form area */}
        <section className="bg-paper py-12 lg:py-16 min-h-[600px]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <iframe
              width="100%"
              height="600"
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=hTKJag05w0ie2NTHtDg90SbLaATEj_lCtyVfbtrzSQ9UNVVNWDk2NkZCSUE0NENZSEVEV0FLMURMUy4u&embed=true"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
              allowFullScreen
              title="New Patient Registration Form"
              className="w-full"
            />
          </div>
        </section>

        {/* Footer note */}
        <div className="bg-sand border-t border-line py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-body text-[0.9rem]">
              Having trouble with the form?{" "}
              <a href={PHONE_HREF} className="text-clay-deep font-medium hover:underline">
                Call our office at {PHONE_DISPLAY}
              </a>{" "}
              and we can assist you or mail paperwork directly.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
