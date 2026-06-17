import Image from "next/image";
import Link from "next/link";
import TrustBadges from "./TrustBadges";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  showTrustBadges?: boolean;
  badge?: string;
  /** Show a decorative visual panel on the right (default true for homepage) */
  showVisual?: boolean;
}

export default function HeroSection({
  headline,
  subheadline,
  primaryCta = { label: "Request Appointment", href: "/contact" },
  secondaryCta,
  showTrustBadges = false,
  badge,
  showVisual = false,
}: HeroSectionProps) {
  return (
    <section
      className="bg-brand-navy text-white py-20 lg:py-32 relative overflow-hidden"
      aria-label="Hero"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 75% 40%, rgba(42,110,187,0.18) 0%, transparent 65%)",
        }}
      />

      {/* Decorative circles — top-right */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-brand-blue/10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-12 -right-12 w-64 h-64 rounded-full border border-brand-blue/10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`grid gap-12 items-center ${showVisual ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}>
          {/* Text */}
          <div className={showVisual ? "" : "max-w-3xl"}>
            {badge && (
              <div className="animate-fade-in inline-flex items-center bg-brand-blue/20 border border-brand-blue/30 text-brand-blue-light rounded-full px-4 py-1 text-sm font-medium mb-6">
                {badge}
              </div>
            )}
            <h1
              className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
              style={{ fontFamily: "var(--font-montserrat)", animationDelay: "80ms" }}
            >
              {headline}
            </h1>
            <p
              className="animate-fade-in-up text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl"
              style={{ animationDelay: "200ms" }}
            >
              {subheadline}
            </p>
            <div
              className="animate-fade-in-up flex flex-wrap gap-4"
              style={{ animationDelay: "320ms" }}
            >
              {primaryCta.href.startsWith("tel:") ? (
                <a
                  href={primaryCta.href}
                  className="inline-flex items-center bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-base shadow-lg"
                >
                  {primaryCta.label}
                </a>
              ) : (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-base shadow-lg"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-navy transition-colors text-base"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
            {showTrustBadges && (
              <div
                className="animate-fade-in-up mt-10"
                style={{ animationDelay: "440ms" }}
              >
                <TrustBadges variant="dark" />
              </div>
            )}
          </div>

          {/* Decorative visual panel */}
          {showVisual && (
            <div
              className="animate-slide-in-right hidden lg:flex items-center justify-center"
              style={{ animationDelay: "200ms" }}
              aria-hidden="true"
            >
              <div className="relative w-full max-w-md">
                {/* Office aerial photo */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-blue/20" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src="/images/gpm-office-aerial.webp"
                    alt="Aerial view of the Global Pain Management office at 8031 Ritchie Highway, Pasadena, MD"
                    fill
                    priority
                    sizes="(max-width: 1024px) 0vw, 28rem"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-semibold">Global Pain Management</p>
                    <p className="text-blue-200 text-xs">8031 Ritchie Highway · Pasadena, MD</p>
                  </div>
                </div>

                {/* Floating stat card — top left */}
                <div className="absolute -top-4 -left-6 bg-white text-brand-navy rounded-xl p-4 shadow-xl border border-gray-100 animate-float" style={{ animationDelay: "1s" }}>
                  <p className="text-2xl font-extrabold text-brand-blue" style={{ fontFamily: "var(--font-montserrat)" }}>12+</p>
                  <p className="text-xs text-text-muted font-medium">Years Serving<br />Maryland</p>
                </div>

                {/* Floating stat card — bottom right */}
                <div className="absolute -bottom-4 -right-6 bg-brand-teal text-white rounded-xl p-4 shadow-xl animate-float" style={{ animationDelay: "1.8s" }}>
                  <p className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-montserrat)" }}>★ 2024</p>
                  <p className="text-xs text-teal-100 font-medium">Maryland<br />Top Doctor</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
