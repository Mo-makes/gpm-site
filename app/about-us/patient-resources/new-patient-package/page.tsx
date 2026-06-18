"use client";

import Script from "next/script";
import PatientPortalBanner from "@/components/PatientPortalBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

// TODO: Replace with your Tally form ID once you've created the form at tally.so
// e.g. if your form URL is https://tally.so/r/abc123, the ID is "abc123"
const TALLY_FORM_ID = "";

export default function NewPatientPackagePage() {
  const hasForm = Boolean(TALLY_FORM_ID);

  return (
    <>
      <PatientPortalBanner />
      <Header />
      <main id="main-content">
        {/* Masthead */}
        <section className="bg-navy text-paper py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="eyebrow eyebrow--light eyebrow--center mb-5">Patient Resources</p>
            <h1 className="text-4xl lg:text-[3.2rem] leading-[1.06] text-paper">
              New Patient Package
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
                "Takes about 10–15 minutes",
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
            {hasForm ? (
              <iframe
                data-tally-src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
                loading="lazy"
                width="100%"
                height="800"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="New Patient Registration Form"
                className="w-full"
              />
            ) : (
              <div className="rounded-[6px] border border-dashed border-line-strong bg-paper-raised p-12 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-full bg-sage-soft flex items-center justify-center mx-auto mb-5">
                    <svg
                      className="w-8 h-8 text-sage-deep"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="font-fraunces text-xl text-ink mb-2" style={{ fontWeight: 560 }}>
                    New patient form — coming soon
                  </h2>
                  <p className="text-body text-[0.95rem] leading-relaxed mb-6">
                    Our online intake form is being set up. In the meantime, please call
                    our office and we can send you the paperwork directly or have it ready
                    when you arrive.
                  </p>
                  <a href={PHONE_HREF} className="btn btn-clay">
                    Call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            )}
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

      {/* Tally embed widget script — only loads when a form ID is set */}
      {hasForm && (
        <Script
          id="tally-embed"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var d=document,w="https://tally.so/widgets/embed.js",
              v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){e.src=e.dataset.tallySrc})};
              if("undefined"!=typeof Tally)v();
              else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w;s.onload=v;s.onerror=v;d.body.appendChild(s)}
            `,
          }}
        />
      )}
    </>
  );
}
