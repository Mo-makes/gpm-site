"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Team", href: "/about/team" },
      { label: "Patient Resources", href: "/about/patient-resources" },
      { label: "Areas We Serve", href: "/about/areas-we-serve" },
    ],
  },
  {
    label: "Conditions",
    href: "/conditions",
  },
  {
    label: "Procedures",
    href: "/procedures",
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-navy shadow-lg"
          : "bg-brand-navy/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex min-w-0 shrink items-center py-1"
            aria-label="Global Pain Management — Home"
          >
            <Image
              src="/global-logo.svg"
              alt=""
              width={674}
              height={141}
              priority
              unoptimized
              className="h-8 w-auto max-h-9 sm:h-9 sm:max-h-10 lg:h-10 lg:max-h-11 brightness-0 invert contrast-[1.08] drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    pathname.startsWith(link.href)
                      ? "text-white bg-brand-slate"
                      : "text-blue-100 hover:text-white hover:bg-brand-slate"
                  }`}
                  aria-haspopup={link.children ? "true" : undefined}
                  aria-expanded={
                    link.children ? openDropdown === link.href : undefined
                  }
                >
                  {link.label}
                  {link.children && (
                    <span className="ml-1 text-xs" aria-hidden="true">▾</span>
                  )}
                </Link>
                {link.children && openDropdown === link.href && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-text-primary hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:4438254050"
              className="text-blue-100 text-sm hover:text-white transition-colors font-medium"
            >
              (443) 825-4050
            </a>
            <Link
              href="/contact"
              className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Request Appointment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" aria-hidden="true" />
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" aria-hidden="true" />
            <span className="block w-6 h-0.5 bg-current transition-all" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden pb-4 border-t border-brand-slate pt-4"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block px-2 py-2 text-blue-100 hover:text-white font-medium text-sm"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 border-l border-brand-slate pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-blue-200 hover:text-white text-sm"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-brand-slate flex flex-col gap-2">
              <a
                href="tel:4438254050"
                className="block text-center bg-brand-teal text-white py-2 rounded-lg font-semibold text-sm"
              >
                Call (443) 825-4050
              </a>
              <Link
                href="/contact"
                className="block text-center bg-brand-blue text-white py-2 rounded-lg font-semibold text-sm"
              >
                Request Appointment
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
