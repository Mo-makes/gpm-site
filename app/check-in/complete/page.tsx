"use client";

import { useEffect } from "react";

export default function CheckInCompletePage() {
  useEffect(() => {
    window.parent.postMessage({ type: "check-in-submitted" }, "*");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-8 text-center">
      <p className="text-lg text-brand-navy">Check-in submitted successfully.</p>
    </div>
  );
}
