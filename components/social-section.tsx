'use client'

const socialCards = [
  {
    platform: 'Instagram',
    handle: '@citlalimtz__',
    desc: 'Moda, lifestyle y colaboraciones con marcas del Bajío.',
    url: 'https://www.instagram.com/citlalimtz__/',
    color: 'from-secondary to-muted',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    platform: 'TikTok',
    handle: '@citlaaaaaa__',
    desc: '748K+ likes · 4M+ visualizaciones · Tendencias y vida real.',
    url: 'https://www.tiktok.com/@citlaaaaaa__',
    color: 'from-muted to-secondary',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
      </svg>
    ),
  },
]

export default function SocialSection() {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">Redes Sociales</p>
          <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight text-foreground">
            Sígueme y<br /><em>conéctate.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {socialCards.map((card) => (
            <a
              key={card.platform}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-gradient-to-br ${card.color} p-10 md:p-12 flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="text-taupe group-hover:text-foreground transition-colors duration-200">
                {card.icon}
              </div>
              <div>
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  {card.platform}
                </p>
                <p className="font-serif text-3xl font-light text-foreground mb-3">{card.handle}</p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
              <div className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-foreground">
                Visitar perfil
                <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
