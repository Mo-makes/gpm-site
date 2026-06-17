const hours = [
  { day: "Monday", time: "8:30 AM – 4:30 PM" },
  { day: "Tuesday", time: "8:30 AM – 4:30 PM" },
  { day: "Wednesday", time: "8:30 AM – 4:30 PM" },
  { day: "Thursday", time: "8:30 AM – 4:30 PM" },
  { day: "Friday", time: "8:30 AM – 4:30 PM" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

export default function OfficeHoursCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3
        className="text-lg font-bold text-brand-navy mb-4"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        Office Hours
      </h3>
      <ul className="space-y-2">
        {hours.map(({ day, time }) => {
          const isToday = day === today;
          return (
            <li
              key={day}
              className={`flex justify-between text-sm py-1.5 px-2 rounded ${
                isToday ? "bg-brand-blue-light font-semibold" : ""
              }`}
              aria-current={isToday ? "true" : undefined}
            >
              <span className={isToday ? "text-brand-navy" : "text-text-primary"}>
                {day}
              </span>
              <span className={isToday ? "text-brand-blue" : "text-text-muted"}>
                {time}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="text-xs text-text-muted mt-4 italic">
        * Hours subject to change. Call ahead to confirm.
      </p>
    </div>
  );
}
