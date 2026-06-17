import { providers } from "@/lib/data/providers";

export default function TelemedicineSection() {
  return (
    <section className="bg-brand-cream py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-blue-light text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
            Telemedicine
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Virtual Visits for Established Patients
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
            Our telemedicine portal allows established patients with scheduled
            appointments to connect with their provider from the comfort of home.
            No app or software download required — just a device with a camera.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2 text-sm text-yellow-800 font-medium">
            <svg className="w-4 h-4 flex-shrink-0 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
            </svg>
            For established patients with a scheduled appointment only.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {providers.map((provider) => (
            <div
              key={provider.slug}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition-shadow"
            >
              <div
                className="w-16 h-16 rounded-full bg-brand-blue-light flex items-center justify-center mx-auto mb-3"
                aria-hidden="true"
              >
                <span className="text-2xl font-bold text-brand-navy">
                  {provider.name.charAt(0)}
                </span>
              </div>
              <h3
                className="font-bold text-brand-navy text-sm leading-tight"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {provider.name}
              </h3>
              <p className="text-xs text-text-muted mt-1 mb-4">
                {provider.credentials} · {provider.title.split(" ").slice(-2).join(" ")}
              </p>
              <a
                href={provider.telemedicineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-brand-teal text-white py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
                aria-label={`Join telemedicine visit with ${provider.name}`}
              >
                Join Visit
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
