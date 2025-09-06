import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Siböra — Convierte limpieza en valor',
  description: 'Economía regenerativa accesible para todos. Gamificación, trazabilidad y recompensas por acciones ambientales.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Siböra',
    description: 'Convierte limpieza en valor. Economía regenerativa, accesible para todos.',
    images: ['/Sibora-no-fondo.png']
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-offwhite text-ink antialiased`}>{children}</body>
    </html>
  )
}

