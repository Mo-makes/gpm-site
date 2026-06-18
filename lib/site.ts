// Shared, single-source-of-truth site facts. Keeping these here prevents the
// "12+ / 15+ / fifteen years" drift that crept into the previous build.

export const FOUNDING_YEAR = 2013;

/**
 * Whole years the practice has been in operation, computed from the founding
 * year so it never goes stale. Evaluated at build time for static pages.
 */
export function yearsInService(now: Date = new Date()): number {
  return now.getFullYear() - FOUNDING_YEAR;
}

export const PHONE_DISPLAY = "(443) 825-4050";
export const PHONE_HREF = "tel:4438254050";
export const FAX_DISPLAY = "(443) 825-4051";

export const ADDRESS = {
  line1: "8031 Ritchie Highway, Suite 100",
  city: "Pasadena",
  state: "MD",
  zip: "21122",
} as const;

export const PATIENT_PORTAL_URL = "https://www.yourhealthfile.com/portal/login.jsp";
export const MAPS_URL = "https://www.google.com/maps?cid=12291003481097695559";
export const FACEBOOK_URL = "https://www.facebook.com/GlobalPainMD/";
