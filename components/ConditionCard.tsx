import Link from "next/link";
import type { Condition } from "@/lib/data/conditions";

interface ConditionCardProps {
  condition: Condition;
}

export default function ConditionCard({ condition }: ConditionCardProps) {
  return (
    <Link
      href={`/conditions/${condition.slug}`}
      className="card card-link group p-6 flex flex-col h-full"
    >
      <span
        className="block h-px w-9 bg-clay mb-5 transition-all duration-300 group-hover:w-16"
        aria-hidden="true"
      />
      <h3
        className="font-fraunces text-[1.28rem] text-ink leading-snug mb-2.5"
        style={{ fontWeight: 560 }}
      >
        {condition.name}
      </h3>
      <p className="text-[0.92rem] text-body leading-relaxed flex-grow">
        {condition.shortDescription}
      </p>
      <span className="link-arrow mt-5">
        Read more{" "}
        <span className="arrow" aria-hidden="true">
          →
        </span>
      </span>
    </Link>
  );
}
