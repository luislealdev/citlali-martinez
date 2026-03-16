'use client'

import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                src="/images/about-model.jpg"
                alt="Citlali Martinez modelo comercial en contenido lifestyle para campañas en Celaya, León y Querétaro"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Floating label */}
            <div className="absolute -bottom-6 -right-2 md:-right-8 bg-secondary px-6 py-5 shadow-md">
              <p className="font-serif text-3xl font-light text-foreground leading-none">748k</p>
              <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground mt-1">TikTok Likes</p>
            </div>
          </div>

          {/* Text column */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-sans text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">Sobre Citlali</p>
              <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight text-foreground mb-6">
                Auténtica,<br />
                <em>extrovertida</em><br />
                y llena de energía.
              </h2>
              <div className="w-12 h-px bg-accent mb-8" />
            </div>

            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Soy modelo comercial e influencer lifestyle con base en el Bajío de México. Mi vibra positiva y mi 
              conexión genuina con la audiencia es lo que me diferencia: no me limito a mostrar productos, 
              <strong className="text-foreground font-medium"> creo experiencias que conectan</strong>.
            </p>

            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Trabajo con restaurantes, marcas de moda, cafeterías y negocios locales para crear contenido 
              que se siente real — porque lo es. Desde campañas de redes sociales hasta reels virales de TikTok, 
              mi objetivo es siempre el mismo: hacer que tu marca brille.
            </p>

            {/* Specialties */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                'Restaurantes & Gastronomía',
                'Moda & Estilo de Vida',
                'Negocios Locales del Bajío',
                'Campañas en Redes Sociales',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-accent shrink-0" />
                  <span className="font-sans text-xs tracking-wide text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-2">
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 border border-foreground text-foreground font-sans text-xs tracking-widest uppercase px-7 py-3.5 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 group"
              >
                Trabajemos Juntos
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
