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

export default function HomePage() {
  return (
    <main>
      <Navbar />
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
      <Footer />
    </main>
  )
}
