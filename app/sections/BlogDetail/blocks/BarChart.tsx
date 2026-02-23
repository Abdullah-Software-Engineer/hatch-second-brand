'use client'

/**
 * Horizontal bar chart for blog content (e.g. stats, trends).
 * Reuse across blogs that need the same visual style.
 */
export interface BarChartItem {
  label: string
  value: number
}

export interface BarChartProps {
  title: string
  subtitle?: string
  bars: BarChartItem[]
  className?: string
}

export default function BarChart({ title, subtitle, bars, className = '' }: BarChartProps) {
  const max = Math.max(...bars.map((d) => d.value), 1)
  return (
    <div
      className={`my-8 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm ${className}`.trim()}
    >
      <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-gray-600 mb-6">{subtitle}</p>}
      <div className="flex flex-col gap-4">
        {bars.map((item, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">{item.label}</span>
              <span className="font-medium text-gray-900">{item.value}%</span>
            </div>
            <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
              <div
                className="h-full bg-primary rounded-lg transition-all duration-500"
                style={{ width: `${(item.value / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
