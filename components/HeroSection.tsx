import Image from "next/image";
import Link from "next/link";
import TrustBadges from "./TrustBadges";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  showTrustBadges?: boolean;
  /** Eyebrow / dateline text */
  badge?: string;
  /** Show the framed office plate alongside the text (homepage) */
  showVisual?: boolean;
}

function Cta({ cta, kind }: { cta: { label: string; href: string }; kind: "primary" | "secondary" }) {
  const cls = `${kind === "primary" ? "btn btn-clay" : "btn btn-outline"} w-full sm:w-auto`;
  return cta.href.startsWith("tel:") ? (
    <a href={cta.href} className={cls}>
      {cta.label}
    </a>
  ) : (
    <Link href={cta.href} className={cls}>
      {cta.label}
    </Link>
  );
}

export default function HeroSection({
  headline,
  subheadline,
  primaryCta = { label: "Request an Appointment", href: "/contact" },
  secondaryCta,
  showTrustBadges = false,
  badge,
  showVisual = false,
}: HeroSectionProps) {
  return (
    <section
      className="relative bg-paper grain border-b border-line overflow-hidden"
      aria-label="Introduction"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24 relative">
        <div
          className={`grid gap-9 lg:gap-16 lg:items-center ${
            showVisual ? "lg:grid-cols-[1.05fr_0.95fr]" : "grid-cols-1"
          }`}
        >
          {/* Text column */}
          <div className={`order-1 ${showVisual ? "" : "max-w-3xl"}`}>
            {badge && <p className="eyebrow animate-fade-rise mb-5 sm:mb-6">{badge}</p>}
            <h1
              className="animate-fade-rise delay-1 text-[2.05rem] leading-[1.08] sm:text-[2.9rem] sm:leading-[1.05] lg:text-[3.85rem] lg:leading-[1.04] text-ink"
              style={{ fontWeight: 560 }}
            >
              {headline}
            </h1>
            <p className="animate-fade-rise delay-2 lead mt-5 sm:mt-7 max-w-xl text-body">
              {subheadline}
            </p>
            <div className="animate-fade-rise delay-3 mt-7 sm:mt-9 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <Cta cta={primaryCta} kind="primary" />
              {secondaryCta && <Cta cta={secondaryCta} kind="secondary" />}
            </div>
            {/* Credentials — desktop placement, under the text */}
            {showTrustBadges && (
              <div className="hidden lg:block animate-fade-rise delay-4 mt-12 pt-9 border-t border-line">
                <TrustBadges variant="light" />
              </div>
            )}
          </div>

          {/* Framed office plate — visible on every screen */}
          {showVisual && (
            <div className="order-2 relative animate-fade-in delay-2">
              {/* offset panel for editorial depth — desktop only */}
              <div
                className="hidden lg:block absolute -right-5 -bottom-5 h-full w-full rounded-[5px] bg-sand"
                aria-hidden="true"
              />
              <figure className="plate relative aspect-[16/11] lg:aspect-[4/3.2]">
                <Image
                  src="/images/gpm-office-aerial.webp"
                  alt="Aerial view of the Global Pain Management office at 8031 Ritchie Highway, Pasadena, Maryland"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover object-center"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/55 to-transparent px-5 pb-4 pt-12">
                  <p className="text-paper font-fraunces text-[1.05rem]" style={{ fontWeight: 560 }}>
                    Our home on Ritchie Highway
                  </p>
                  <p className="plate-caption text-paper/70 mt-1">Pasadena, Maryland</p>
                </figcaption>
              </figure>
            </div>
          )}

          {/* Credentials — mobile placement, after the plate */}
          {showTrustBadges && (
            <div className="order-3 lg:hidden animate-fade-rise delay-4 pt-1">
              <TrustBadges variant="light" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
