interface TrustBadgesProps {
  variant?: "dark" | "light";
}

const credentials = [
  { value: "Maryland Top Doctor", detail: "Castle Connolly · 2024" },
  { value: "Dual Board-Certified", detail: "Pain Medicine & Anesthesiology" },
  { value: "Fellowship-Trained", detail: "UMD Shock Trauma" },
  { value: "Women in Medicine", detail: "Honoree · 2023" },
];

export default function TrustBadges({ variant = "light" }: TrustBadgesProps) {
  const dark = variant === "dark";
  const value = dark ? "text-paper" : "text-ink";
  const detail = dark ? "text-paper/55" : "text-muted";

  return (
    <dl
      className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5"
      aria-label="Credentials and recognitions"
    >
      {credentials.map((c) => (
        <div key={c.value} className="flex flex-col border-l-2 border-clay/40 pl-4">
          <dt
            className={`font-fraunces text-[1rem] leading-tight ${value}`}
            style={{ fontWeight: 560 }}
          >
            {c.value}
          </dt>
          <dd className={`mt-0.5 text-[0.72rem] uppercase tracking-[0.11em] ${detail}`}>
            {c.detail}
          </dd>
        </div>
      ))}
    </dl>
  );
}
