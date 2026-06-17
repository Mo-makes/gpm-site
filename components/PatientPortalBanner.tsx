export default function PatientPortalBanner() {
  return (
    <div className="bg-brand-teal text-white py-2 px-4 text-center text-sm font-medium">
      <span className="mr-1">Current patient?</span>
      <a
        href="https://www.yourhealthfile.com/portal/login.jsp"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 hover:no-underline font-semibold"
      >
        Access your patient portal here →
      </a>
    </div>
  );
}
