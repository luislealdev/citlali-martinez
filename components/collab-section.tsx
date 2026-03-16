'use client'

const services = [
  {
    title: 'Modelaje Comercial',
    desc: 'Sesiones fotográficas para catálogos, publicidad impresa y digital.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Promoción de Restaurantes',
    desc: 'Contenido auténtico que hace que la audiencia quiera ir a tu restaurante hoy mismo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513M15 19.5H9m3-16.5v16.5" />
      </svg>
    ),
  },
  {
    title: 'Campañas de Moda',
    desc: 'Lookbooks, lanzamientos y campañas de temporada para marcas de ropa y accesorios.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
      </svg>
    ),
  },
  {
    title: 'Contenido para Redes Sociales',
    desc: 'Producción completa: fotografía, video, edición y copy para Instagram y TikTok.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: 'Reels & TikTok Promocionales',
    desc: 'Videos verticales con alta tasa de retención para maximizar el alcance orgánico.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653z" />
      </svg>
    ),
  },
  {
    title: 'Voz para Publicidad',
    desc: 'Locución y presentación para contenido publicitario en audio o video.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3z" />
      </svg>
    ),
  },
  {
    title: 'Promoción de Eventos',
    desc: 'Cobertura y difusión de lanzamientos, inauguraciones y eventos especiales.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
]

export default function CollabSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-14">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
            Disponible para Colaborar
          </p>
          <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight text-foreground">
            ¿En qué puedo<br /><em>ayudar a tu marca?</em>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((svc, i) => (
            <div
              key={i}
              className="bg-background p-8 flex flex-col gap-4 group hover:bg-secondary transition-colors duration-300"
            >
              <div className="text-taupe">{svc.icon}</div>
              <h3 className="font-serif text-xl font-light text-foreground">{svc.title}</h3>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-14 bg-primary p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-2">Hablemos</p>
            <h3 className="font-serif text-3xl md:text-4xl font-light text-primary-foreground">
              Tu marca merece brillar.
            </h3>
          </div>
          <a
            href="#contacto"
            className="shrink-0 inline-flex items-center gap-3 bg-ivory text-charcoal font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-sand transition-colors duration-300 group"
          >
            Agendar Colaboración
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
