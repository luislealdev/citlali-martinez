'use client'

const stats = [
  {
    value: '748K+',
    label: 'Likes en TikTok',
    sub: '@citlaaaaaa__',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
      </svg>
    ),
  },
  {
    value: '4M+',
    label: 'Visualizaciones',
    sub: 'Total de videos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    ),
  },
  {
    value: '100%',
    label: 'Contenido Original',
    sub: 'Lifestyle & Lifestyle',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
  {
    value: 'Bajío',
    label: 'Mercado Local',
    sub: 'Celaya · León · Querétaro',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
      </svg>
    ),
  },
]

export default function MediaKitSection() {
  return (
    <section id="mediakit" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">Media Kit</p>
            <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight text-foreground">
              Números que<br /><em>hablan solos.</em>
            </h2>
          </div>
          <p className="font-sans text-sm text-muted-foreground max-w-xs leading-relaxed">
            Alcance orgánico real con una audiencia altamente comprometida en TikTok e Instagram.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-background p-8 flex flex-col gap-6 group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-taupe">{stat.icon}</div>
              <div>
                <p className="font-serif text-5xl font-light text-foreground leading-none mb-2">{stat.value}</p>
                <p className="font-sans text-sm font-medium text-foreground tracking-wide">{stat.label}</p>
                <p className="font-sans text-xs text-muted-foreground mt-1">{stat.sub}</p>
              </div>
              <div className="w-8 h-px bg-border group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Download media kit CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 border border-foreground text-foreground font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 group"
          >
            Solicitar Media Kit Completo
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
