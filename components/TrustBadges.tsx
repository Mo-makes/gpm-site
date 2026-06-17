interface TrustBadgesProps {
  variant?: "dark" | "light";
}

const badges = [
  { label: "FindaTopDoc", detail: "Recognized Provider" },
  { label: "Women in Medicine", detail: "Member Practice" },
  { label: "Maryland Top Doctor", detail: "2024" },
  { label: "Board Certified", detail: "Pain Management" },
];

export default function TrustBadges({ variant = "light" }: TrustBadgesProps) {
  const isDark = variant === "dark";

  return (
    <div className="flex flex-wrap gap-3" role="list" aria-label="Credentials and recognitions">
      {badges.map((badge) => (
        <div
          key={badge.label}
          role="listitem"
          className={`inline-flex flex-col items-center px-4 py-2 rounded-lg border text-center ${
            isDark
              ? "border-brand-blue/40 bg-brand-blue/10 text-blue-100"
              : "border-brand-blue/30 bg-brand-blue-light text-brand-navy"
          }`}
        >
          <span className="text-xs font-bold uppercase tracking-wide">
            {badge.label}
          </span>
          <span
            className={`text-xs mt-0.5 ${
              isDark ? "text-blue-300" : "text-text-muted"
            }`}
          >
            {badge.detail}
          </span>
        </div>
      ))}
    </div>
  );
}
