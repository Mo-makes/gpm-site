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
    <div className="card p-6">
      <p className="eyebrow mb-4">Office Hours</p>
      <ul className="divide-y divide-line">
        {hours.map(({ day, time }) => {
          const isToday = day === today;
          return (
            <li
              key={day}
              className="flex justify-between items-center text-[0.92rem] py-2.5"
              aria-current={isToday ? "true" : undefined}
            >
              <span className={isToday ? "text-ink font-semibold" : "text-body"}>
                {day}
                {isToday && (
                  <span className="ml-2 text-[0.6rem] uppercase tracking-[0.14em] text-clay align-middle">
                    Today
                  </span>
                )}
              </span>
              <span
                className={
                  isToday
                    ? "text-ink font-semibold"
                    : time === "Closed"
                    ? "text-muted"
                    : "text-body"
                }
              >
                {time}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="text-[0.78rem] text-muted mt-4 italic">
        Hours subject to change — please call ahead to confirm.
      </p>
    </div>
  );
}
