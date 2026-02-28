'use client'

/**
 * Bar chart for blog content (e.g. stats, trends).
 * Supports horizontal (default) and vertical layout. Reuse across blogs.
 */
export interface BarChartItem {
  label: string
  value: number
}

export interface BarChartProps {
  title: string
  subtitle?: string
  bars: BarChartItem[]
  variant?: 'horizontal' | 'vertical'
  className?: string
}

const Y_TICKS = [0, 20, 40, 60, 80, 100]
const CHART_HEIGHT = 220

export default function BarChart({
  title,
  subtitle,
  bars,
  variant = 'horizontal',
  className = '',
}: BarChartProps) {
  if (variant === 'vertical') {
    return (
      <div
        className={`my-8 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm ${className}`.trim()}
      >
        <h3 className="text-lg font-bold text-[#3C3C3C] mb-1">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600 mb-6">{subtitle}</p>}
        <div className="flex gap-4">
          {/* Y-axis */}
          <div className="flex flex-col justify-between text-right shrink-0" style={{ height: CHART_HEIGHT }}>
            <span className="text-xs text-gray-500 font-medium">Percentage (%)</span>
            {Y_TICKS.slice().reverse().map((tick) => (
              <span key={tick} className="text-xs text-gray-500">
                {tick}
              </span>
            ))}
          </div>
          {/* Chart area with grid and bars */}
          <div className="flex-1 min-w-0">
            <div
              className="relative border-b border-l border-gray-200"
              style={{ height: CHART_HEIGHT }}
            >
              {/* Horizontal grid lines */}
              {Y_TICKS.slice(1).map((tick) => (
                <div
                  key={tick}
                  className="absolute left-0 right-0 border-t border-gray-100"
                  style={{ bottom: `${(tick / 100) * CHART_HEIGHT}px` }}
                />
              ))}
              {/* Bars */}
              <div className="absolute inset-0 flex items-end justify-around gap-2 px-2 pb-0 pt-1">
                {bars.map((item, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 min-w-0">
                    <span className="text-xs font-medium text-[#3C3C3C] whitespace-nowrap">
                      {item.value}%
                    </span>
                    <div
                      className="w-full max-w-[72px] mx-auto bg-primary rounded-t transition-all duration-500"
                      style={{ height: `${(item.value / 100) * (CHART_HEIGHT - 24)}px`, minHeight: item.value > 0 ? 4 : 0 }}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* X-axis label and categories */}
            <div className="mt-1 text-center">
              <span className="text-xs text-gray-500 font-medium">Category</span>
            </div>
            <div className="flex justify-around gap-2 mt-2 px-2">
              {bars.map((item, i) => (
                <span
                  key={i}
                  className="flex-1 text-xs text-gray-600 text-center min-w-0 wrap-break-word"
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const max = Math.max(...bars.map((d) => d.value), 1)
  return (
    <div
      className={`my-8 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm ${className}`.trim()}
    >
      <h3 className="text-lg font-bold text-[#3C3C3C] mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-gray-600 mb-6">{subtitle}</p>}
      <div className="flex flex-col gap-4">
        {bars.map((item, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex justify-between text-sm">
              <span className="text-[#3C3C3C]">{item.label}</span>
              <span className="font-medium text-[#3C3C3C]">{item.value}%</span>
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
