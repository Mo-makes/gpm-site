import Link from "next/link";
import type { Condition } from "@/lib/data/conditions";

interface ConditionCardProps {
  condition: Condition;
}

export default function ConditionCard({ condition }: ConditionCardProps) {
  return (
    <Link
      href={`/conditions/${condition.slug}`}
      className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all p-5 flex gap-4 items-start"
    >
      <div
        className="w-2 flex-shrink-0 self-stretch rounded-full bg-brand-blue/20 group-hover:bg-brand-blue/40 transition-colors mt-0.5"
        aria-hidden="true"
      />
      <div>
        <h3 className="font-semibold text-brand-navy group-hover:text-brand-blue transition-colors text-base mb-1">
          {condition.name}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">
          {condition.shortDescription}
        </p>
        <span className="inline-block mt-3 text-xs font-semibold text-brand-blue">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
