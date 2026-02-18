export interface NavLink {
  href: string
  label: string
}

export interface PracticeArea {
  id: string
  title: string
  description: string
  slug: string
}

export interface ContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'default' | 'full'
  id?: string
}
