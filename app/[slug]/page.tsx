import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { keyphrases } from '../../data/keyphrases'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import MediaKitSection from '@/components/media-kit-section'
import PortfolioSection from '@/components/portfolio-section'
import VideosSection from '@/components/videos-section'
import CollabSection from '@/components/collab-section'
import SocialSection from '@/components/social-section'
import Footer from '@/components/footer'
import { generateSlug } from '@/utils/utils'

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    // Buscar la keyphrase que coincida con el slug
    const keyphrase = keyphrases.find(kp => generateSlug(kp) === slug);

    if (!keyphrase) {
        return {
            title: 'Página no encontrada',
            robots: { index: false, follow: false },
        }
    }

    const description = `${keyphrase}. Citlali Martinez es modelo comercial e influencer lifestyle en el Bajío de México para campañas con marcas, restaurantes y negocios locales en Celaya, León y Querétaro.`
    const canonicalPath = `/${slug}`

    return {
        title: `${keyphrase} | Citlali Martinez`,
        description,
        keywords: [
            keyphrase,
            'modelo comercial en Celaya',
            'influencer en León',
            'influencer en Querétaro',
            'modelo comercial Bajío México',
        ],
        alternates: {
            canonical: canonicalPath,
        },
        openGraph: {
            title: `${keyphrase} | Citlali Martinez`,
            description,
            type: 'website',
            locale: 'es_MX',
            url: canonicalPath,
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
            title: `${keyphrase} | Citlali Martinez`,
            description,
            images: ['/images/hero-model.jpg'],
        },
    }
}

export async function generateStaticParams() {
    return keyphrases.map((keyphrase) => ({
        slug: generateSlug(keyphrase),
    }));
}

export default async function KeyphrasePage({ params }: PageProps) {
    const { slug } = await params
    const keyphrase = keyphrases.find(kp => generateSlug(kp) === slug);

    if (!keyphrase) {
        notFound()
    }

    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Citlali Martinez',
        jobTitle: 'Modelo Comercial / Influencer Lifestyle',
        description: `${keyphrase}. Modelo comercial e influencer lifestyle para campañas con marcas y negocios en Celaya, León y Querétaro.`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bajío',
            addressCountry: 'MX',
        },
        areaServed: ['Celaya', 'León', 'Querétaro', 'Bajío México'],
        sameAs: ['https://www.instagram.com/citlalimtz__/', 'https://www.tiktok.com/@citlaaaaaa__'],
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://citlalimartinez.com'}/${slug}`,
    }

    return (
        <>
            <Navbar />
            <main id="contenido-principal">
                <article>
                    <p className="sr-only">
                        {keyphrase}. Citlali Martinez ofrece colaboraciones de modelo comercial e influencer lifestyle en Celaya, León y Querétaro.
                    </p>
                    <HeroSection />
                    <AboutSection />
                    <MediaKitSection />
                    <PortfolioSection />
                    <VideosSection />
                    <CollabSection />
                    <SocialSection />
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