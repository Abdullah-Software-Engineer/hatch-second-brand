import { cn } from '@/lib/utils'
import { THEME } from '@/lib/constants'
import type { ContainerProps } from '@/lib/types'

export default function Container({
  children,
  className,
  maxWidth = 'default',
  id,
}: ContainerProps) {
  return (
    <div
      id={id}
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        maxWidth === 'full' && 'w-full',
        className
      )}
      style={maxWidth === 'default' ? { maxWidth: THEME.container.maxWidth } : undefined}
    >
      {children}
    </div>
  )
}
