import { Check } from "lucide-react";

export interface CompetitorRow {
  feature: string;
  values: (string | boolean)[];
  winnerIndex?: number;
}

export interface CompetitorTableProps {
  thisProduct: string;
  competitors: string[];
  rows: CompetitorRow[];
  productName?: string;
}

export function CompetitorTable({ thisProduct, competitors, rows }: CompetitorTableProps) {
  const allHeaders = [thisProduct, ...competitors];

  return (
    <>
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-100 dark:border-gray-800">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left px-5 py-4 bg-gray-900 dark:bg-gray-950 text-gray-400 font-medium text-xs w-44">Feature</th>
              {allHeaders.map((h, i) => (
                <th
                  key={i}
                  className="px-5 py-4 text-center text-xs font-semibold"
                  style={
                    i === 0
                      ? { background: "#2563EB", color: "#fff" }
                      : { background: "#111827", color: "#9CA3AF" }
                  }
                >
                  {i === 0 ? <span className="font-bold">{h}</span> : h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-900/60"}>
                <td className="px-5 py-3 text-gray-700 dark:text-gray-300 font-medium text-xs">{row.feature}</td>
                {allHeaders.map((_, ci) => {
                  const val = row.values[ci];
                  const isWinner = row.winnerIndex === ci;
                  return (
                    <td
                      key={ci}
                      className="px-5 py-3 text-center"
                      style={isWinner ? { background: "rgba(16,185,129,0.08)" } : undefined}
                    >
                      {typeof val === "boolean" ? (
                        val ? (
                          <Check size={15} className="mx-auto text-emerald-500" strokeWidth={2.5} />
                        ) : (
                          <span className="text-gray-300 dark:text-gray-600 text-base">✕</span>
                        )
                      ) : (
                        <span className="text-xs text-gray-700 dark:text-gray-300 flex items-center justify-center gap-1">
                          {val}
                          {isWinner && (
                            <span className="ml-1 inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400">WIN</span>
                          )}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1 px-1">
        {allHeaders.map((header, ci) => (
          <div
            key={ci}
            className="snap-start flex-shrink-0 w-64 rounded-2xl border overflow-hidden"
            style={
              ci === 0
                ? { borderColor: "#2563EB", borderWidth: 2 }
                : { borderColor: "#E5E7EB" }
            }
          >
            <div
              className="px-4 py-3 text-center text-xs font-bold"
              style={ci === 0 ? { background: "#2563EB", color: "#fff" } : { background: "#F9FAFB", color: "#374151" }}
            >
              {header}
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-900">
              {rows.map((row, ri) => {
                const val = row.values[ci];
                const isWinner = row.winnerIndex === ci;
                return (
                  <div
                    key={ri}
                    className="flex items-center justify-between px-4 py-2.5"
                    style={isWinner ? { background: "rgba(16,185,129,0.06)" } : undefined}
                  >
                    <span className="text-xs text-gray-500 dark:text-gray-400">{row.feature}</span>
                    <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                      {typeof val === "boolean" ? (
                        val ? <Check size={14} className="text-emerald-500" strokeWidth={2.5} /> : <span className="text-gray-300">✕</span>
                      ) : (
                        <span className="flex items-center gap-1">
                          {val}
                          {isWinner && <span className="text-[8px] font-bold px-1 py-0.5 rounded bg-emerald-100 text-emerald-600">WIN</span>}
                        </span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
