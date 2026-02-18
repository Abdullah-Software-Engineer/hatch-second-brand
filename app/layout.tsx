import type { Metadata } from 'next'
import { Playfair_Display, Poppins, Libre_Baskerville } from 'next/font/google'
import './globals.css'
import SideButtons from './components/ui/SideButtons'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hatchsecondbrand.com'),
  title: { default: 'Hatch Second Brand', template: '%s | Hatch Second Brand' },
  description: 'Hatch Second Brand',
  authors: [{ name: 'Hatch Second Brand' }],
  formatDetection: { email: false, address: false, telephone: false },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${poppins.variable} ${libreBaskerville.variable}`}>
      <body>
        <SideButtons />
        {children}
      </body>
    </html>
  )
}
