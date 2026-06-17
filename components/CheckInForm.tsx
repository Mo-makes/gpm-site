"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const FORM_URL =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=hTKJag05w0ie2NTHtDg90ajdjoGj03lBnArRqm3iwK9UOFNOWEZMSlU3V0owQTNQM0hXVVVMU0tRMy4u&embed=true";

const COUNTDOWN_SECONDS = 3;

export default function CheckInForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // true after the initial form load; subsequent loads = submission
  const initialLoadDoneRef = useRef(false);
  const handledRef = useRef(false);
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);

  const handleSubmission = useCallback(() => {
    if (handledRef.current) return;
    handledRef.current = true;
    setSubmitted(true);
    setCountdown(COUNTDOWN_SECONDS);
  }, []);

  // Primary detection: iframe navigates to the thank-you page after submit,
  // which fires a second onLoad. The first onLoad is the blank form loading.
  const handleIframeLoad = useCallback(() => {
    if (!initialLoadDoneRef.current) {
      initialLoadDoneRef.current = true;
      return;
    }
    handleSubmission();
  }, [handleSubmission]);

  // Backup detection via postMessage (fires on some form configs)
  useEffect(() => {
    const debug = new URLSearchParams(window.location.search).has("debug");

    function onMessage(event: MessageEvent) {
      if (debug) {
        console.info("[check-in] postMessage", event.origin, event.data);
      }
      const trusted =
        event.origin === "https://forms.office.com" ||
        event.origin === "https://forms.cloud.microsoft" ||
        /^https:\/\/([a-z0-9-]+\.)*office\.com$/i.test(event.origin);

      if (!trusted) return;

      const serialized = JSON.stringify(event.data).toLowerCase();
      if (
        serialized.includes("submit") ||
        serialized.includes("thank") ||
        serialized.includes("completed") ||
        serialized.includes("formresponse")
      ) {
        handleSubmission();
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [handleSubmission]);

  useEffect(() => {
    if (!submitted) return;

    if (countdown <= 0) {
      // Reset state and reload just the iframe — not the whole page
      handledRef.current = false;
      initialLoadDoneRef.current = false;
      setSubmitted(false);
      setCountdown(COUNTDOWN_SECONDS);
      if (iframeRef.current) {
        iframeRef.current.src = FORM_URL;
      }
      return;
    }

    const timer = window.setTimeout(() => {
      setCountdown((c) => c - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [submitted, countdown]);

  return (
    <div className="relative flex min-h-dvh flex-col bg-brand-cream">
      <header className="shrink-0 border-b border-brand-blue/10 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-4">
          <Image
            src="/global-logo.svg"
            alt="Global Pain Management"
            width={180}
            height={48}
            priority
            className="h-10 w-auto sm:h-12"
          />
          <div className="hidden h-8 w-px bg-brand-blue/20 sm:block" aria-hidden />
          <div className="text-center sm:text-left">
            <p
              className="text-lg font-bold text-brand-navy sm:text-xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Patient Check-In
            </p>
            <p className="text-sm text-text-muted">
              Please complete the form below
            </p>
          </div>
        </div>
      </header>

      <main className="relative flex flex-1 flex-col">
        <iframe
          ref={iframeRef}
          title="Patient check-in form"
          src={FORM_URL}
          onLoad={handleIframeLoad}
          className="h-full min-h-[70dvh] w-full flex-1 border-0 bg-white"
          allowFullScreen
        />

        {submitted && (
          <div
            className="absolute inset-0 z-20 flex items-center justify-center bg-brand-navy/85 px-6 backdrop-blur-sm"
            role="alertdialog"
            aria-live="assertive"
            aria-labelledby="check-in-success-title"
            aria-describedby="check-in-success-desc"
          >
            <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl animate-scale-in">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal/10">
                <svg
                  className="h-8 w-8 text-brand-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2
                id="check-in-success-title"
                className="mb-2 text-2xl font-bold text-brand-navy"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Check-In Complete
              </h2>
              <p id="check-in-success-desc" className="mb-6 text-text-muted">
                Thank you. The next patient can check in shortly.
              </p>

              <div
                className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-montserrat)" }}
                aria-label={`Refreshing in ${countdown} seconds`}
              >
                {countdown}
              </div>
              <p className="mt-4 text-sm text-text-muted">
                Preparing form for next patient…
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
