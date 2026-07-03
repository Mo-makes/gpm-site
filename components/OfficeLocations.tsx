import { LOCATIONS, type SiteAddress } from "@/lib/site";

interface OfficeLocationsProps {
  /** Show location labels (e.g. "Pasadena Office") above each address */
  showLabels?: boolean;
  className?: string;
  /** "footer" uses light text for dark backgrounds */
  variant?: "default" | "footer";
}

function AddressLines({
  address,
  variant,
}: {
  address: SiteAddress;
  variant: "default" | "footer";
}) {
  const textClass = variant === "footer" ? "text-paper/75" : "text-body";
  return (
    <div className={`text-[0.95rem] space-y-1 leading-relaxed ${textClass}`}>
      <p>{address.line1}</p>
      <p>
        {address.city}, {address.state} {address.zip}
      </p>
    </div>
  );
}

export default function OfficeLocations({
  showLabels = true,
  className = "space-y-6",
  variant = "default",
}: OfficeLocationsProps) {
  const labelClass =
    variant === "footer"
      ? "font-fraunces text-base text-paper mb-1.5"
      : "font-fraunces text-lg text-ink mb-1.5";

  return (
    <div className={className}>
      {LOCATIONS.map((location) => (
        <div key={location.id}>
          {showLabels && (
            <p className={labelClass} style={{ fontWeight: 560 }}>
              {location.label}
            </p>
          )}
          <AddressLines address={location.address} variant={variant} />
        </div>
      ))}
    </div>
  );
}
