"use client";

import Image from "next/image";

export default function StickyCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-brand-navy border-t border-brand-slate shadow-2xl">
      <a
        href="tel:4438254050"
        className="flex items-center justify-center gap-3 py-4 text-white font-bold text-base"
        aria-label="Call Global Pain Management at (443) 825-4050"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-md">
          <Image
            src="/logo-icon.svg"
            alt=""
            width={132}
            height={132}
            unoptimized
            className="h-7 w-7"
          />
        </span>
        Call (443) 825-4050
      </a>
    </div>
  );
}
