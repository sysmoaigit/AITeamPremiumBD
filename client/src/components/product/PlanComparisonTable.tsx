import { Check, X } from "lucide-react";

export interface PlanTier {
  name: string;
  price: string;
  highlighted?: boolean;
  features: Record<string, boolean | string>;
}

interface PlanComparisonTableProps {
  tiers: PlanTier[];
  rows: string[];
  productName?: string;
}

export function PlanComparisonTable({ tiers, rows }: PlanComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-gray-800">
      <table className="w-full min-w-[520px] text-sm">
        <thead>
          <tr>
            <th className="text-left px-5 py-4 bg-gray-900 dark:bg-gray-950 text-gray-400 dark:text-gray-500 font-medium text-xs w-48">Feature</th>
            {tiers.map((tier, i) => (
              <th
                key={i}
                className="px-5 py-4 text-center text-xs font-semibold"
                style={
                  tier.highlighted
                    ? { background: "#2563EB", color: "#fff" }
                    : { background: "#111827", color: "#9CA3AF" }
                }
              >
                <div className="font-bold text-sm mb-0.5">{tier.name}</div>
                <div className="opacity-80">{tier.price}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={ri % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-900/60"}
            >
              <td className="px-5 py-3.5 text-gray-700 dark:text-gray-300 font-medium text-xs">{row}</td>
              {tiers.map((tier, ti) => {
                const val = tier.features[row];
                return (
                  <td key={ti} className="px-5 py-3.5 text-center">
                    {typeof val === "boolean" ? (
                      val ? (
                        <Check size={16} className="mx-auto text-emerald-500" strokeWidth={2.5} />
                      ) : (
                        <X size={16} className="mx-auto text-gray-300 dark:text-gray-600" strokeWidth={2} />
                      )
                    ) : (
                      <span className="text-xs text-gray-700 dark:text-gray-300">{val ?? "—"}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
