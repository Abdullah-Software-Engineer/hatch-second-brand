'use client'

/**
 * Bullet list with optional intro and items that can have a bold label (e.g. "Test small: description").
 */
export interface BulletListProps {
  intro?: string
  items: Array<string | { label: string; text: string }>
  className?: string
}

export default function BulletList({ intro, items, className = '' }: BulletListProps) {
  return (
    <div className={className}>
      {intro && <p className="text-gray-700 leading-relaxed mb-4">{intro}</p>}
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        {items.map((item, i) => {
          if (typeof item === 'string') {
            return <li key={i}>{item}</li>
          }
          return (
            <li key={i}>
              <strong>{item.label}:</strong> {item.text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
