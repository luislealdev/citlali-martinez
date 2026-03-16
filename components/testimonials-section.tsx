'use client'

const testimonials = [
  {
    quote:
      'Citlali tiene una presencia frente a cámara que pocas influencers logran: natural, carismática y 100% auténtica. El contenido que hizo para nuestra sucursal generó un aumento visible en reservaciones esa misma semana.',
    author: 'Gerente de Marketing',
    brand: 'Vista Center Celaya',
    initial: 'V',
  },
  {
    quote:
      'Desde el primer día llegó con energía y profesionalismo. El reel que realizó para nuestro negocio superó nuestras expectativas y la respuesta de la audiencia fue inmediata. Definitivamente volvemos a trabajar con ella.',
    author: 'Propietario',
    brand: 'Mariscos Chava',
    initial: 'M',
  },
  {
    quote:
      'Lo que más valoro de Citlali es que entiende la marca, no solo la promovió — la vivió. Eso se nota en cada imagen y en cómo su comunidad respondió al contenido.',
    author: 'Director Creativo',
    brand: 'Central Restaurant',
    initial: 'C',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-14">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">Testimonios</p>
          <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight text-foreground">
            Lo que dicen<br /><em>las marcas.</em>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-background p-8 md:p-10 flex flex-col gap-6">
              {/* Quote mark */}
              <span className="font-serif text-6xl text-border leading-none select-none">"</span>

              <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1 -mt-4">
                {t.quote}
              </p>

              <div className="border-t border-border pt-6 flex items-center gap-4">
                {/* Avatar initial */}
                <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                  <span className="font-serif text-lg font-light text-foreground">{t.initial}</span>
                </div>
                <div>
                  <p className="font-sans text-xs font-medium text-foreground">{t.author}</p>
                  <p className="font-sans text-xs text-muted-foreground">{t.brand}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
