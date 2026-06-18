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
    <div className="relative flex min-h-dvh flex-col bg-paper">
      <header className="shrink-0 border-b border-line bg-paper-raised px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-4">
          <span className="flex items-center rounded-[4px] bg-navy px-3 py-2">
            <Image
              src="/global-logo.svg"
              alt="Global Pain Management"
              width={180}
              height={48}
              priority
              unoptimized
              className="h-8 w-auto brightness-0 invert sm:h-9"
            />
          </span>
          <div className="hidden h-9 w-px bg-line-strong sm:block" aria-hidden />
          <div className="text-center sm:text-left">
            <p className="font-fraunces text-lg text-ink sm:text-xl" style={{ fontWeight: 560 }}>
              Patient Check-In
            </p>
            <p className="text-sm text-muted">Please complete the form below</p>
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
            className="absolute inset-0 z-20 flex items-center justify-center bg-navy/90 px-6"
            role="alertdialog"
            aria-live="assertive"
            aria-labelledby="check-in-success-title"
            aria-describedby="check-in-success-desc"
          >
            <div className="w-full max-w-md rounded-[6px] bg-paper-raised p-8 text-center shadow-2xl animate-fade-in">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-sage-soft">
                <svg
                  className="h-8 w-8 text-sage-deep"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2
                id="check-in-success-title"
                className="mb-2 font-fraunces text-2xl text-ink"
                style={{ fontWeight: 560 }}
              >
                Check-in complete
              </h2>
              <p id="check-in-success-desc" className="mb-6 text-body">
                Thank you. The next patient can check in shortly.
              </p>

              <div
                className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-clay font-fraunces text-4xl text-paper"
                aria-label={`Refreshing in ${countdown} seconds`}
              >
                {countdown}
              </div>
              <p className="mt-4 text-sm text-muted">Preparing form for next patient…</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
