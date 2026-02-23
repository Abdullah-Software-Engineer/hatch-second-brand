'use client'

/**
 * Simple data table for blog content (e.g. device usage, stats).
 * Headers and rows support 3+ columns.
 */
export interface DataTableProps {
  headers: string[]
  rows: string[][]
  caption?: string
  className?: string
}

export default function DataTable({
  headers,
  rows,
  caption,
  className = '',
}: DataTableProps) {
  return (
    <div
      className={`my-8 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm ${className}`.trim()}
    >
      <table className="w-full min-w-[320px] text-left">
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-sm font-semibold text-gray-900">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
