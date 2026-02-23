'use client'

/**
 * Two-column comparison table (e.g. Traditional vs AI-Integrated).
 * Rows: feature label + left column + right column.
 */
export interface ComparisonTableProps {
  leftHeader: string
  rightHeader: string
  rows: Array<{ label: string; left: string; right: string }>
  className?: string
}

export default function ComparisonTable({
  leftHeader,
  rightHeader,
  rows,
  className = '',
}: ComparisonTableProps) {
  return (
    <div
      className={`my-8 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm ${className}`.trim()}
    >
      <table className="w-full min-w-[500px] text-left">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-4 py-3 text-sm font-semibold text-gray-900">{leftHeader}</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-900">{rightHeader}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-0">
              <td className="px-4 py-3">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {row.label}
                </span>
                <p className="text-gray-700 mt-0.5">{row.left}</p>
              </td>
              <td className="px-4 py-3">
                <p className="text-gray-700">{row.right}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
