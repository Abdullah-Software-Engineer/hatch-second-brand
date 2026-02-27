import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://sf.abarba.me" />
        <link rel="dns-prefetch" href="https://sf.abarba.me" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arizonia&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
