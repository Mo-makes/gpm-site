import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export default function StickyCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-clay border-t border-clay-deep shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.45)]">
      <a
        href={PHONE_HREF}
        className="flex items-center justify-center gap-2.5 py-3.5 text-white font-semibold text-[1.02rem] tracking-wide"
        aria-label={`Call Global Pain Management at ${PHONE_DISPLAY}`}
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call {PHONE_DISPLAY}
      </a>
    </div>
  );
}
