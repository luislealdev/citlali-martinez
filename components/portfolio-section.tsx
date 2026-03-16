'use client'

import Image from 'next/image'
import { useState } from 'react'

const photos = [
  { src: '/images/portfolio-1.jpg', alt: 'Sesión editorial — estudio', category: 'Editorial' },
  { src: '/images/portfolio-2.jpg', alt: 'Lifestyle — café', category: 'Lifestyle' },
  { src: '/images/portfolio-3.jpg', alt: 'Outdoor — ciudad', category: 'Outdoor' },
  { src: '/images/portfolio-4.jpg', alt: 'Comercial — restaurante', category: 'Comercial' },
  { src: '/images/portfolio-5.jpg', alt: 'Beauty — retrato', category: 'Beauty' },
  { src: '/images/portfolio-6.jpg', alt: 'Fashion — boutique', category: 'Fashion' },
  { src: '/images/portfolio-7.jpg', alt: 'Lifestyle — verano', category: 'Lifestyle' },
  { src: '/images/portfolio-8.jpg', alt: 'Comercial — producto', category: 'Comercial' },
  { src: '/images/portfolio-9.jpg', alt: 'Editorial — rooftop', category: 'Editorial' },
  { src: '/images/portfolio-10.jpg', alt: 'Lifestyle — mañana', category: 'Lifestyle' },
  { src: '/images/portfolio-11.jpg', alt: 'Comercial — evento', category: 'Comercial' },
  // { src: '/images/portfolio-12.jpg', alt: 'Fashion — lujo', category: 'Fashion' },
]

const categories = ['Todos', 'Editorial', 'Lifestyle', 'Comercial', 'Fashion', 'Beauty', 'Outdoor']

export default function PortfolioSection() {
  const [active, setActive] = useState('Todos')
  const [lightbox, setLightbox] = useState<null | (typeof photos)[0]>(null)

  const filtered = active === 'Todos' ? photos : photos.filter((p) => p.category === active)

  return (
    <section id="portafolio" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-12">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">Portafolio</p>
          <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight text-foreground">
            Cada imagen,<br /><em>una historia.</em>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-sans text-xs tracking-widest uppercase px-5 py-2 border transition-colors duration-200 ${active === cat
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo grid — masonry-style using CSS columns */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((photo, i) => (
            <div
              key={photo.src}
              className="relative break-inside-avoid overflow-hidden group cursor-pointer"
              onClick={() => setLightbox(photo)}
              style={{ aspectRatio: i % 3 === 1 ? '3/4' : i % 5 === 0 ? '4/5' : '2/3' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* hover overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-end p-5">
                <span className="font-sans text-xs tracking-widest uppercase text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-ivory font-sans text-xs tracking-widest uppercase"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
          >
            Cerrar ✕
          </button>
          <div className="relative max-h-[90vh] max-w-4xl w-full aspect-[3/4]">
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
