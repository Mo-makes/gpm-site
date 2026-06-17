import Image from "next/image";
import Link from "next/link";

const FULL_LOGO_SRC = "/global-logo.svg";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about/team" },
  { label: "Conditions Treated", href: "/conditions" },
  { label: "Procedures", href: "/procedures" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
  { label: "Patient Portal", href: "https://www.yourhealthfile.com/portal/login.jsp", external: true },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const serviceAreas = [
  "Pasadena, MD",
  "Glen Burnie, MD",
  "Kent Island, MD",
  "Columbia, MD",
  "Anne Arundel County",
  "Queen Anne's County",
  "Howard County",
  "Surrounding Maryland Areas",
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-blue-100" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 — Contact Info */}
          <div>
            <div className="mb-6 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-lg">
              <Image
                src={FULL_LOGO_SRC}
                alt="Global Pain Management — GLOBAL"
                width={674}
                height={141}
                unoptimized
                className="mx-auto h-[52px] w-auto max-w-full sm:h-[58px]"
              />
            </div>
            <p
              className="text-white font-bold text-lg mb-1"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Global Pain Management
            </p>
            <p className="text-brand-blue-light text-sm italic mt-1 mb-4">
              Experience a world of difference
            </p>
            <address className="not-italic text-sm space-y-2 leading-relaxed">
              <p>8031 Ritchie Highway, Suite 100</p>
              <p>Pasadena, MD 21122</p>
              <p className="mt-3">
                <a
                  href="tel:4438254050"
                  className="hover:text-white transition-colors font-medium"
                >
                  Phone: (443) 825-4050
                </a>
              </p>
              <p>
                <span className="text-blue-300">Fax: (443) 825-4051</span>
              </p>
            </address>

            {/* Office Hours */}
            <div className="mt-5 text-sm space-y-1">
              <p className="text-white font-semibold text-xs uppercase tracking-widest mb-2">
                Office Hours
              </p>
              <p>Monday – Friday: 8:30 AM – 4:30 PM</p>
              <p>Saturday – Sunday: Closed</p>
            </div>

            {/* Social */}
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/GlobalPainMD/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors text-sm font-medium"
                aria-label="Global Pain Management on Facebook"
              >
                Facebook
              </a>
              <span aria-hidden="true" className="text-brand-slate">|</span>
              <a
                href="https://www.google.com/maps?cid=12291003481097695559"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors text-sm font-medium"
                aria-label="Global Pain Management on Google Maps"
              >
                Google Maps
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h2
              className="text-white font-bold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Service Areas */}
          <div>
            <h2
              className="text-white font-bold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Areas We Serve
            </h2>
            <ul className="space-y-2 text-sm">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="text-brand-teal" aria-hidden="true">✓</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-brand-slate flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <p>
            © {new Date().getFullYear()} Global Pain Management. All rights
            reserved.
          </p>
          <p>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
