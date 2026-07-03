import Image from "next/image";
import Link from "next/link";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  FAX_DISPLAY,
  EMAIL_DISPLAY,
  EMAIL_HREF,
  LOCATIONS,
  PATIENT_PORTAL_URL,
  MAPS_URL,
  FACEBOOK_URL,
} from "@/lib/site";
import OfficeLocations from "@/components/OfficeLocations";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about/team" },
  { label: "Conditions Treated", href: "/conditions" },
  { label: "Procedures", href: "/procedures" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
  { label: "Patient Portal", href: PATIENT_PORTAL_URL, external: true },
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
  "Surrounding Maryland",
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-hanken text-brass text-[0.72rem] font-semibold uppercase tracking-[0.22em] mb-5">
      {children}
    </h2>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-paper/70 pb-20 lg:pb-0" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Contact */}
          <div className="md:col-span-5">
            <div className="mb-6 inline-flex rounded-[4px] border border-line-strong bg-paper px-5 py-4">
              <Image
                src="/global-logo.svg"
                alt="Global Pain Management"
                width={674}
                height={141}
                unoptimized
                className="h-[50px] w-auto sm:h-[56px]"
              />
            </div>
            <p
              className="font-fraunces italic text-brass text-lg mb-5"
              style={{ fontWeight: 500 }}
            >
              Experience a world of difference.
            </p>
            <address className="not-italic text-[0.95rem] space-y-1.5 leading-relaxed text-paper/75">
              <OfficeLocations showLabels variant="footer" className="space-y-4" />
              <p className="pt-3">
                <a
                  href={PHONE_HREF}
                  className="hover:text-paper transition-colors font-medium"
                >
                  {PHONE_DISPLAY}
                </a>
                <span className="text-paper/40"> · phone</span>
              </p>
              <p className="text-paper/55 text-[0.875rem]">{FAX_DISPLAY} · fax</p>
              <p className="text-paper/55 text-[0.875rem]">
                <a href={EMAIL_HREF} className="hover:text-paper transition-colors">
                  {EMAIL_DISPLAY}
                </a>
                {" · email"}
              </p>
            </address>

            <div className="mt-6 flex items-center gap-4 text-[0.85rem]">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/60 hover:text-paper transition-colors font-medium"
              >
                Facebook
              </a>
              <span aria-hidden="true" className="text-paper/25">
                /
              </span>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/60 hover:text-paper transition-colors font-medium"
              >
                Google Maps
              </a>
              {LOCATIONS.length > 1 && (
                <>
                  <span aria-hidden="true" className="text-paper/25">
                    /
                  </span>
                  <a
                    href={LOCATIONS[1].mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper/60 hover:text-paper transition-colors font-medium"
                  >
                    Kent Island
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <ColumnHeading>Explore</ColumnHeading>
            <ul className="space-y-2.5 text-[0.95rem]">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-paper/70 hover:text-paper transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-paper/70 hover:text-paper transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div className="md:col-span-4">
            <ColumnHeading>Areas We Serve</ColumnHeading>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 text-[0.95rem]">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2.5 text-paper/70">
                  <span className="text-sage h-1 w-1 rounded-full bg-current shrink-0" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-7 hidden md:block">
              <p className="font-hanken text-brass text-[0.72rem] font-semibold uppercase tracking-[0.22em] mb-2">
                Office Hours
              </p>
              <p className="text-paper/70 text-[0.95rem]">
                Monday – Friday · 8:30 AM – 4:30 PM
              </p>
              <p className="text-paper/50 text-[0.875rem]">Saturday – Sunday · Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-paper/12 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.8rem] text-paper/45">
          <p>
            © {new Date().getFullYear()} Global Pain Management. All rights reserved.
          </p>
          <p>
            Independent &amp; locally owned in Pasadena, Maryland since 2013.
          </p>
        </div>
      </div>
    </footer>
  );
}
