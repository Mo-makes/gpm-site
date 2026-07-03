import Link from "next/link";
import Image from "next/image";
import type { Provider } from "@/lib/data/providers";
import { providerDisplayName } from "@/lib/data/providers";

interface ProviderCardProps {
  provider: Provider;
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <div className="card card-link group overflow-hidden flex flex-col">
      {/* Portrait */}
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        {provider.imageSrc ? (
          <Image
            src={provider.imageSrc}
            alt={provider.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ objectPosition: provider.imageObjectPosition ?? "center top" }}
            priority={provider.slug === "haddi-ogunsola-md"}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-fraunces text-5xl text-navy/25" aria-hidden="true">
              {provider.name.charAt(0)}
            </span>
          </div>
        )}
        <span className="absolute top-3 right-3 bg-paper/92 text-navy text-[0.7rem] font-semibold tracking-wide px-2.5 py-1 rounded-[3px] border border-line">
          {provider.credentials}
        </span>
      </div>

      {/* Detail */}
      <div className="p-5 flex flex-col flex-grow">
        {provider.isFounder && (
          <p className="text-[0.66rem] uppercase tracking-[0.16em] text-brass mb-1.5">
            Founder
          </p>
        )}
        <h3
          className="font-fraunces text-[1.28rem] text-ink leading-tight"
          style={{ fontWeight: 560 }}
        >
          {providerDisplayName(provider)}
        </h3>
        <p className="text-[0.76rem] uppercase tracking-[0.1em] text-sage-deep mt-1.5">
          {provider.title}
        </p>
        <p className="text-[0.88rem] text-body leading-relaxed mt-3 mb-5 flex-grow">
          {provider.specialties.slice(0, 2).join(" · ")}
        </p>

        <div className="mt-auto flex flex-col gap-2.5">
          <Link
            href={`/about/team/${provider.slug}`}
            className="btn btn-navy w-full text-[0.85rem] py-2.5"
          >
            View full profile
          </Link>
          <a
            href={provider.telemedicineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline w-full text-[0.85rem] py-2.5"
            aria-label={`Join telemedicine visit with ${providerDisplayName(provider)}`}
          >
            Telemedicine visit
          </a>
        </div>
      </div>
    </div>
  );
}
