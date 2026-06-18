"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

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
  { label: "Conditions", href: "/conditions" },
  { label: "Procedures", href: "/procedures" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/about" ? pathname.startsWith("/about") : pathname === href;

  return (
    <header
      className={`sticky top-0 z-50 bg-navy border-b transition-shadow duration-300 ${
        scrolled
          ? "border-brass/40 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.7)]"
          : "border-paper/10"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-[4.75rem]">
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
              className="h-8 w-auto max-h-9 sm:h-9 lg:h-10 brightness-0 invert"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`relative px-3.5 py-2 text-[0.9rem] font-medium tracking-wide transition-colors ${
                    isActive(link.href)
                      ? "text-paper"
                      : "text-paper/70 hover:text-paper"
                  }`}
                  aria-haspopup={link.children ? "true" : undefined}
                  aria-expanded={
                    link.children ? openDropdown === link.href : undefined
                  }
                >
                  {link.label}
                  {link.children && (
                    <span className="ml-1 text-[0.6rem] align-middle" aria-hidden="true">
                      ▾
                    </span>
                  )}
                  {isActive(link.href) && (
                    <span
                      className="absolute left-3.5 right-3.5 -bottom-px h-px bg-clay"
                      aria-hidden="true"
                    />
                  )}
                </Link>
                {link.children && openDropdown === link.href && (
                  <div className="absolute top-full left-0 pt-2 w-56">
                    <div className="card rounded-[5px] py-1.5 overflow-hidden shadow-[0_24px_50px_-28px_rgba(15,31,61,0.6)]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-[0.875rem] text-body hover:bg-clay-soft hover:text-clay-deep transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={PHONE_HREF}
              className="text-paper/75 text-[0.9rem] hover:text-paper transition-colors font-medium tracking-wide"
            >
              {PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="btn btn-clay text-[0.85rem] px-5 py-2.5">
              Request Appointment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-paper rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5" aria-hidden="true" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" aria-hidden="true" />
            <span className="block w-6 h-0.5 bg-current" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden pb-5 border-t border-paper/10 pt-4"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block px-2 py-2.5 text-paper/85 hover:text-paper font-medium"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 border-l border-paper/15 pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-paper/60 hover:text-paper text-[0.9rem]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-5 pt-5 border-t border-paper/10 flex flex-col gap-2.5">
              <a href={PHONE_HREF} className="btn btn-outline-light w-full">
                Call {PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn btn-clay w-full">
                Request Appointment
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
