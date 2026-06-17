import Link from "next/link";
import Image from "next/image";
import type { Provider } from "@/lib/data/providers";

interface ProviderCardProps {
  provider: Provider;
}

const gradients = [
  "from-brand-blue/80 to-brand-navy",
  "from-brand-teal/80 to-brand-navy",
  "from-[#1A5FA8]/80 to-brand-navy",
  "from-[#14766A]/80 to-brand-navy",
];

const accentColors = [
  "bg-brand-blue",
  "bg-brand-teal",
  "bg-[#1A5FA8]",
  "bg-[#14766A]",
];

/** Stable index from slug so each card gets a consistent color */
function slugIndex(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return Math.abs(h) % gradients.length;
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  const idx = slugIndex(provider.slug);
  const gradient = gradients[idx];
  const accent = accentColors[idx];

  return (
    <div className="card-lift bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col group">
      {/* Photo */}
      <div className="relative h-64 overflow-hidden">
        {provider.imageSrc ? (
          <>
            <Image
              src={provider.imageSrc}
              alt={provider.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              priority={provider.slug === "haddi-ogunsola-md"}
            />
            {/* Subtle gradient at bottom for text legibility */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-navy/50 to-transparent" />
          </>
        ) : (
          <>
            {/* Shimmer + gradient placeholder */}
            <div className="absolute inset-0 img-placeholder" />
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className={`w-20 h-20 rounded-full ${accent} flex items-center justify-center shadow-lg ring-4 ring-white/20`}>
                <span
                  className="text-3xl font-extrabold text-white"
                  aria-hidden="true"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {provider.name.charAt(0)}
                </span>
              </div>
              <span className="text-white/60 text-xs font-medium tracking-wide">Photo coming soon</span>
            </div>
          </>
        )}

        {/* Credentials badge — top right */}
        <div className="absolute top-3 right-3 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-bold px-2.5 py-1 rounded-full">
          {provider.credentials}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3
          className="text-base font-bold text-brand-navy leading-snug mb-1"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          {provider.name}
        </h3>
        {provider.specialties.length > 0 && (
          <p className="text-xs text-text-muted leading-relaxed mb-4 line-clamp-2">
            {provider.specialties.slice(0, 2).join(" · ")}
          </p>
        )}

        <div className="mt-auto flex flex-col gap-2">
          <a
            href={provider.telemedicineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-brand-teal text-white py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
            aria-label={`Join telemedicine visit with ${provider.name}`}
          >
            Join Telemedicine Visit
          </a>
          <Link
            href={`/about/team/${provider.slug}`}
            className="w-full text-center border border-brand-blue text-brand-blue py-2 rounded-lg text-sm font-semibold hover:bg-brand-blue hover:text-white transition-colors"
          >
            View Full Bio →
          </Link>
        </div>
      </div>
    </div>
  );
}
