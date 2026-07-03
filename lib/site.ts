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
export const EMAIL_DISPLAY = "info@globalpainmd.com";
export const EMAIL_HREF = "mailto:info@globalpainmd.com";

export interface SiteAddress {
  line1: string;
  city: string;
  state: string;
  zip: string;
}

export interface SiteLocation {
  id: string;
  label: string;
  address: SiteAddress;
  mapsUrl: string;
  mapsEmbedQuery: string;
}

export const LOCATIONS: readonly SiteLocation[] = [
  {
    id: "pasadena",
    label: "Pasadena Office",
    address: {
      line1: "8031 Ritchie Highway, Suite 100",
      city: "Pasadena",
      state: "MD",
      zip: "21122",
    },
    mapsUrl: "https://www.google.com/maps?cid=12291003481097695559",
    mapsEmbedQuery: "8031+Ritchie+Hwy+Suite+100+Pasadena+MD+21122",
  },
  {
    id: "kent-island",
    label: "Kent Island Office",
    address: {
      line1: "130 Love Point Rd, Suite 106",
      city: "Stevensville",
      state: "MD",
      zip: "21666",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=130+Love+Point+Rd+Suite+106+Stevensville+MD+21666",
    mapsEmbedQuery: "130+Love+Point+Rd+Suite+106+Stevensville+MD+21666",
  },
] as const;

/** Primary (Pasadena) address — kept for pages that reference a single location. */
export const ADDRESS = LOCATIONS[0].address;

export function formatAddress(address: SiteAddress): string {
  return `${address.line1}, ${address.city}, ${address.state} ${address.zip}`;
}

export const PATIENT_PORTAL_URL = "https://www.yourhealthfile.com/portal/login.jsp";
export const MAPS_URL = LOCATIONS[0].mapsUrl;
export const FACEBOOK_URL = "https://www.facebook.com/GlobalPainMD/";
