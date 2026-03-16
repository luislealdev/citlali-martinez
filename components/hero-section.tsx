'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-charcoal">
      {/* Full-bleed hero image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-model.JPG"
          alt="Citlali Martinez, modelo comercial e influencer lifestyle en sesión fotográfica para marcas en el Bajío"
          fill
          priority
          className="object-cover object-top md:object-center opacity-80"
        />
        {/* gradient overlay bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
        {/* subtle side vignette */}
        <div className="absolute inset-0 bg-linear-to-r from-charcoal/20 via-transparent to-charcoal/20" />
      </div>

      {/* Scrolling marquee line */}
      <div className="absolute top-0 left-0 right-0 mt-20 overflow-hidden pointer-events-none select-none">
        <div className="flex whitespace-nowrap animate-[marquee_18s_linear_infinite]">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="font-serif text-xs tracking-[0.4em] uppercase text-ivory/25 px-8">
              Modelo Comercial &nbsp;•&nbsp; Influencer Lifestyle &nbsp;•&nbsp; Bajío México &nbsp;•&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full">
        {/* Location tag */}
        <p className="font-sans text-xs tracking-[0.35em] uppercase text-ivory/60 mb-4 animate-fade-up stagger-1 opacity-0">
          Bajío, México — Celaya · León · Querétaro
        </p>

        {/* Name */}
        <h1 className="font-serif font-light text-ivory text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-tight mb-3 animate-fade-up stagger-2 opacity-0">
          Citlali
          <br />
          <span className="italic font-normal">Martinez</span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-xs md:text-sm tracking-[0.35em] uppercase text-ivory/70 mb-10 animate-fade-up stagger-3 opacity-0">
          Modelo Comercial &nbsp;•&nbsp; Influencer Lifestyle
        </p>

        {/* Description */}
        <p className="font-sans text-sm md:text-base text-ivory/80 max-w-md leading-relaxed mb-10 animate-fade-up stagger-4 opacity-0">
          Energía auténtica. Conexión real. Campañas que se sienten vivas.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 animate-fade-up stagger-5 opacity-0">
          <a
            href="#contacto"
            className="inline-flex items-center bg-ivory text-charcoal font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-sand transition-colors duration-300"
          >
            Book Now
          </a>
          <a
            href="#portafolio"
            className="inline-flex items-center border border-ivory/60 text-ivory font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-ivory/10 transition-colors duration-300"
          >
            Ver Portafolio
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-10 flex flex-col items-center gap-2 animate-fade-in stagger-5 opacity-0">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-ivory/40 rotate-90 origin-center">Scroll</span>
        <div className="w-px h-12 bg-ivory/30 animate-[pulse_2s_ease-in-out_infinite]" />
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
