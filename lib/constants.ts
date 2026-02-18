export const SITE_CONFIG = {
  name: 'Hatch Second Brand',
  title: 'Hatch Second Brand',
  description: 'Hatch Second Brand',
  phone: '(312) 940-3228',
  phoneRaw: '3129403228',
  address: '2126 W Van Buren St. Chicago, IL 60612',
  email: 'info@hatchsecondbrand.com',
  fax: '',
} as const

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
] as const

export const RESOURCES_DROPDOWN_LINKS = [
  { href: '/your-right', label: 'Your Rights' },
  { href: '/blog', label: 'Blog' },
  { href: '/make-payment', label: 'Make a Payment' },
  { href: '/courthouse-location', label: 'Detailed Courthouse Location' },
] as const

export const PRACTICE_AREAS_FULL = [
  { title: 'Practice Area 1', slug: 'practice-area-1' },
  { title: 'Practice Area 2', slug: 'practice-area-2' },
  { title: 'Practice Area 3', slug: 'practice-area-3' },
] as const

export const FOOTER_AREAS_SERVED = [
  'Arlington Heights',
  'Des Plaines',
  'Chicago',
  'Buffalo Grove',
] as const

export const FOOTER_SHORTCUTS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/practice-areas', label: 'Practice areas' },
  { href: '/contact', label: 'Contact us' },
] as const

export const FOOTER_LEGAL_LINKS = [
  { href: '/privacy-policy', label: 'Privacy policy' },
  { href: '/sitemap', label: 'Sitemap' },
] as const

export const FOOTER_SOCIAL_LINKS = [
  { href: 'https://facebook.com', label: 'Facebook', icon: 'facebook' as const },
  { href: 'https://x.com', label: 'X', icon: 'x' as const },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' as const },
] as const

export const FOOTER_COPYRIGHT = 'All rights reserved. Copyright © 2025 Hatch Second Brand'

export const THEME = {
  colors: { primary: '#9754D8', accent: '#9754D8' },
  breakpoints: { mobile: '0px', tablet: '768px', desktop: '1024px', wide: '1440px' },
  container: { maxWidth: '1390px' },
} as const
