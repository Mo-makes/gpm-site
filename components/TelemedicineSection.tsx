import { providers, providerDisplayName } from "@/lib/data/providers";

export default function TelemedicineSection() {
  return (
    <section className="bg-sand py-12 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-8 lg:mb-12">
          <p className="eyebrow mb-5">Telemedicine</p>
          <h2 className="text-3xl lg:text-[2.6rem] leading-[1.1] text-ink mb-5">
            Virtual visits for established patients
          </h2>
          <p className="lead text-body">
            Established patients with a scheduled appointment can connect with their
            provider from home. No app or software to download — just a device with a
            camera.
          </p>
          <p className="mt-5 inline-flex items-start gap-2.5 text-[0.88rem] text-clay-deep">
            <span aria-hidden="true" className="mt-0.5">
              ✳
            </span>
            For established patients with a scheduled appointment only.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider) => (
            <div key={provider.slug} className="card p-7 flex flex-col items-start">
              <span
                className="w-12 h-12 rounded-full bg-navy text-paper flex items-center justify-center font-fraunces text-xl mb-5"
                aria-hidden="true"
              >
                {provider.name.charAt(0)}
              </span>
              <h3
                className="font-fraunces text-[1.2rem] text-ink leading-tight"
                style={{ fontWeight: 560 }}
              >
                {providerDisplayName(provider)}
              </h3>
              <p className="text-[0.74rem] uppercase tracking-[0.1em] text-sage-deep mt-1.5 mb-6">
                {provider.title}
              </p>
              <a
                href={provider.telemedicineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-clay w-full mt-auto text-[0.85rem] py-2.5"
                aria-label={`Join telemedicine visit with ${providerDisplayName(provider)}`}
              >
                Join visit
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
