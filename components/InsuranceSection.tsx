export default function InsuranceSection() {
  return (
    <section className="bg-brand-cream py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-brand-blue-light text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
          Insurance
        </span>
        <h2
          className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          We Accept Most Insurance Plans
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto leading-relaxed mb-8">
          Global Pain Management works with most major insurance carriers,
          including Medicare and many Maryland Medicaid plans. We also treat
          workers&apos; compensation and personal injury patients. Please call
          our office at{" "}
          <a
            href="tel:4438254050"
            className="text-brand-blue font-semibold hover:underline"
          >
            (443) 825-4050
          </a>{" "}
          to verify your specific plan prior to your visit.
        </p>
        <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-sm">
          <div className="w-1 self-stretch rounded-full bg-brand-blue flex-shrink-0" aria-hidden="true" />
          <div className="text-left">
            <p className="font-semibold text-brand-navy text-sm">
              Insurance Verification
            </p>
            <p className="text-xs text-text-muted mt-0.5">
              Call us to confirm your coverage before your appointment
            </p>
          </div>
          <a
            href="tel:4438254050"
            className="ml-4 bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            (443) 825-4050
          </a>
        </div>
      </div>
    </section>
  );
}
