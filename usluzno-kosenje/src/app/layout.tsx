import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Usluzno Kosenje Lazarevac',
  description: 'Profesionalne usluge košenja travnjaka u Lazarevcu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  )
}