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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://citlalimartinez.com'),
  title: {
    default: 'Citlali Martinez | Modelo Comercial e Influencer Lifestyle en Celaya',
    template: '%s | Citlali Martinez',
  },
  description:
    'Citlali Martinez es una modelo comercial e influencer lifestyle que colabora con marcas, restaurantes y negocios locales en el Bajío. Disponible para campañas, promoción en redes sociales y colaboraciones en Celaya, León y Querétaro.',
  generator: 'v0.app',
  keywords: [
    'Citlali Martinez',
    'modelo en Celaya',
    'influencer Celaya',
    'modelo comercial México',
    'influencer Bajío',
    'promoción de restaurantes Celaya',
    'influencer lifestyle México',
    'modelo en León',
    'influencer en Querétaro',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Citlali Martinez | Modelo Comercial e Influencer Lifestyle en Celaya',
    description:
      'Modelo comercial e influencer lifestyle para campañas de marcas, restaurantes y negocios locales en Celaya, León y Querétaro.',
    url: '/',
    siteName: 'Citlali Martinez',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/images/hero-model.jpg',
        width: 1200,
        height: 630,
        alt: 'Citlali Martinez, modelo comercial e influencer lifestyle en el Bajío de México',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Citlali Martinez | Modelo Comercial e Influencer Lifestyle en Celaya',
    description:
      'Colaboraciones para marcas, restaurantes y negocios locales en Celaya, León y Querétaro.',
    images: ['/images/hero-model.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
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
