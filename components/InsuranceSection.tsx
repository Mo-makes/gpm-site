import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export default function InsuranceSection() {
  return (
    <section className="bg-paper py-12 lg:py-24 border-t border-line">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="eyebrow eyebrow--center mb-5">Insurance &amp; Billing</p>
        <h2 className="text-3xl lg:text-[2.6rem] leading-[1.1] text-ink mb-5">
          We accept most major plans
        </h2>
        <p className="lead text-body">
          Global Pain Management works with most major insurance carriers, including
          Medicare and many Maryland Medicaid plans. We also treat workers&apos;
          compensation and personal injury patients.
        </p>

        <div className="mt-10 card p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-5 text-left">
          <div className="flex-1">
            <p className="font-fraunces text-[1.15rem] text-ink" style={{ fontWeight: 560 }}>
              Verify your coverage first
            </p>
            <p className="text-[0.92rem] text-body mt-1 leading-relaxed">
              Call our office with your insurance card handy and we&apos;ll confirm your
              specific plan before your visit.
            </p>
          </div>
          <a href={PHONE_HREF} className="btn btn-navy whitespace-nowrap shrink-0">
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
