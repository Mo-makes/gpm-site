import { PATIENT_PORTAL_URL } from "@/lib/site";

export default function PatientPortalBanner() {
  return (
    <div className="bg-navy-deep text-paper/85 text-center text-[0.78rem] tracking-wide py-2 px-4">
      <span className="text-paper/65">Already a patient?</span>{" "}
      <a
        href={PATIENT_PORTAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-paper underline decoration-clay decoration-2 underline-offset-[3px] hover:decoration-brass transition-colors"
      >
        Enter the patient portal
      </a>
    </div>
  );
}
