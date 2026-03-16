import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import MediaKitSection from '@/components/media-kit-section'
import PortfolioSection from '@/components/portfolio-section'
import VideosSection from '@/components/videos-section'
import BrandsSection from '@/components/brands-section'
import TestimonialsSection from '@/components/testimonials-section'
import CollabSection from '@/components/collab-section'
import SocialSection from '@/components/social-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

const pageKeywords = [
  'modelo en Celaya',
  'influencer Celaya',
  'modelo comercial México',
  'influencer Bajío',
  'promoción de restaurantes Celaya',
  'influencer lifestyle México',
  'modelo en León',
  'influencer en Querétaro',
]

export const metadata: Metadata = {
  title: 'Citlali Martinez | Modelo Comercial e Influencer Lifestyle en Celaya',
  description:
    'Citlali Martinez es una modelo comercial e influencer lifestyle que colabora con marcas, restaurantes y negocios locales en el Bajío. Disponible para campañas, promoción en redes sociales y colaboraciones.',
  keywords: pageKeywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Citlali Martinez | Modelo Comercial e Influencer Lifestyle en Celaya',
    description:
      'Modelo comercial e influencer lifestyle para campañas de marcas, restaurantes y negocios locales en Celaya, León y Querétaro.',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/images/hero-model.jpg',
        width: 1200,
        height: 630,
        alt: 'Citlali Martinez, modelo comercial e influencer lifestyle en sesión fotográfica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Citlali Martinez | Modelo Comercial e Influencer Lifestyle en Celaya',
    description:
      'Colaboraciones para campañas, restaurantes y marcas en Celaya, León y Querétaro.',
    images: ['/images/hero-model.jpg'],
  },
}

export default function HomePage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Citlali Martinez',
    jobTitle: 'Modelo Comercial / Influencer Lifestyle',
    description:
      'Modelo comercial e influencer lifestyle en el Bajío de México para campañas con marcas, restaurantes y negocios locales.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bajío',
      addressCountry: 'MX',
    },
    areaServed: ['Celaya', 'León', 'Querétaro', 'Bajío México'],
    sameAs: ['https://www.instagram.com/citlalimtz__/', 'https://www.tiktok.com/@citlaaaaaa__'],
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://citlalimartinez.com',
  }

  return (
    <>
      <Navbar />
      <main id="contenido-principal">
        <article>
          <HeroSection />
          <AboutSection />
          <MediaKitSection />
          <PortfolioSection />
          <VideosSection />
          {/* <BrandsSection /> */}
          {/* <TestimonialsSection /> */}
          <CollabSection />
          <SocialSection />
          {/* <ContactSection /> */}
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
    </>
  )
}
