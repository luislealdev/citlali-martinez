import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'Citlali Martinez — Modelo Comercial & Influencer Lifestyle',
  description:
    'Portafolio profesional de Citlali Martinez, modelo comercial e influencer lifestyle. Colaboraciones con restaurantes, marcas de moda y negocios locales en el Bajío de México.',
  generator: 'v0.app',
  keywords: ['modelo comercial', 'influencer lifestyle', 'Bajío', 'Celaya', 'León', 'Querétaro', 'TikTok', 'Instagram'],
}

export const viewport = {
  themeColor: '#f5f0ea',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
