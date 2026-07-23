import Link from "next/link";
import Image from "next/image";
import type { Provider } from "@/lib/data/providers";
import { providerDisplayName } from "@/lib/data/providers";

interface ProviderCardProps {
  provider: Provider;
  /** Tighter type/padding for a fixed 4-across row (homepage). */
  dense?: boolean;
}

export default function ProviderCard({ provider, dense = false }: ProviderCardProps) {
  return (
    <div className="card card-link group overflow-hidden flex flex-col">
      {/* Portrait */}
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        {provider.imageSrc ? (
          <Image
            src={provider.imageSrc}
            alt={provider.imageAlt}
            fill
            sizes={
              dense
                ? "25vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            }
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
        <span
          className={
            dense
              ? "absolute top-2 right-2 sm:top-3 sm:right-3 bg-paper/92 text-navy text-[0.55rem] sm:text-[0.7rem] font-semibold tracking-wide px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-[3px] border border-line"
              : "absolute top-3 right-3 bg-paper/92 text-navy text-[0.7rem] font-semibold tracking-wide px-2.5 py-1 rounded-[3px] border border-line"
          }
        >
          {provider.credentials}
        </span>
      </div>

      {/* Detail */}
      <div
        className={
          dense
            ? "p-2.5 sm:p-4 lg:p-5 flex flex-col flex-grow"
            : "p-5 flex flex-col flex-grow"
        }
      >
        {provider.isFounder && (
          <p
            className={
              dense
                ? "text-[0.58rem] sm:text-[0.66rem] uppercase tracking-[0.16em] text-brass-ink mb-1 sm:mb-1.5"
                : "text-[0.66rem] uppercase tracking-[0.16em] text-brass-ink mb-1.5"
            }
          >
            Founder
          </p>
        )}
        <h3
          className={
            dense
              ? "font-fraunces text-[0.95rem] sm:text-[1.1rem] lg:text-[1.28rem] text-ink leading-tight"
              : "font-fraunces text-[1.28rem] text-ink leading-tight"
          }
          style={{ fontWeight: 560 }}
        >
          {providerDisplayName(provider)}
        </h3>
        <p
          className={
            dense
              ? "text-[0.62rem] sm:text-[0.7rem] lg:text-[0.76rem] uppercase tracking-[0.08em] sm:tracking-[0.1em] text-sage-deep mt-1 sm:mt-1.5"
              : "text-[0.76rem] uppercase tracking-[0.1em] text-sage-deep mt-1.5"
          }
        >
          {provider.title}
        </p>
        <p
          className={
            dense
              ? "hidden sm:block text-[0.8rem] lg:text-[0.88rem] text-body leading-relaxed mt-2 lg:mt-3 mb-4 lg:mb-5 flex-grow"
              : "text-[0.88rem] text-body leading-relaxed mt-3 mb-5 flex-grow"
          }
        >
          {provider.specialties.slice(0, 2).join(" · ")}
        </p>

        <div
          className={
            dense
              ? "mt-auto flex flex-col gap-1.5 sm:gap-2.5 pt-3 sm:pt-0"
              : "mt-auto flex flex-col gap-2.5"
          }
        >
          <Link
            href={`/about/team/${provider.slug}`}
            className={
              dense
                ? "btn btn-navy w-full text-[0.68rem] sm:text-[0.8rem] lg:text-[0.85rem] py-2 sm:py-2.5 px-1.5 sm:px-3"
                : "btn btn-navy w-full text-[0.85rem] py-2.5"
            }
            aria-label={`View full profile of ${providerDisplayName(provider)}`}
          >
            {dense ? (
              <>
                <span className="sm:hidden">Profile</span>
                <span className="hidden sm:inline">View full profile</span>
              </>
            ) : (
              "View full profile"
            )}
          </Link>
          {provider.telemedicineUrl && (
            <a
              href={provider.telemedicineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={
                dense
                  ? "btn btn-outline w-full text-[0.68rem] sm:text-[0.8rem] lg:text-[0.85rem] py-2 sm:py-2.5 px-1.5 sm:px-3"
                  : "btn btn-outline w-full text-[0.85rem] py-2.5"
              }
              aria-label={`Join telemedicine visit with ${providerDisplayName(provider)}`}
            >
              {dense ? (
                <>
                  <span className="sm:hidden">Telemedicine</span>
                  <span className="hidden sm:inline">Telemedicine visit</span>
                </>
              ) : (
                "Telemedicine visit"
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
