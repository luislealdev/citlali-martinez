'use client'

const brands = [
  { name: 'Vista Center', location: 'Celaya, Gto.', category: 'Centro Comercial' },
  { name: 'Mariscos Chava', location: 'Bajío', category: 'Restaurante' },
  { name: 'Central', location: 'Bajío', category: 'Restaurante' },
  { name: 'Tu Marca Aquí', location: '—', category: 'Disponible' },
  { name: 'Tu Marca Aquí', location: '—', category: 'Disponible' },
  { name: 'Tu Marca Aquí', location: '—', category: 'Disponible' },
]

export default function BrandsSection() {
  return (
    <section id="marcas" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-14">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
            Marcas & Colaboraciones
          </p>
          <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight text-foreground">
            Negocios que<br /><em>confiaron en mí.</em>
          </h2>
        </div>

        {/* Brand grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {brands.map((brand, i) => (
            <div
              key={i}
              className={`bg-background p-8 md:p-10 flex flex-col gap-3 group transition-colors duration-300 hover:bg-secondary ${
                brand.name === 'Tu Marca Aquí' ? 'opacity-40' : ''
              }`}
            >
              {/* Logo placeholder square */}
              <div className="w-12 h-12 border border-border flex items-center justify-center mb-2 group-hover:border-accent transition-colors duration-300">
                {brand.name !== 'Tu Marca Aquí' ? (
                  <span className="font-serif text-lg font-light text-foreground">
                    {brand.name.charAt(0)}
                  </span>
                ) : (
                  <span className="font-sans text-[10px] text-muted-foreground">+</span>
                )}
              </div>
              <p className="font-serif text-xl font-light text-foreground">{brand.name}</p>
              <p className="font-sans text-xs tracking-wide text-muted-foreground">{brand.category}</p>
              <p className="font-sans text-xs text-muted-foreground">{brand.location}</p>
            </div>
          ))}
        </div>

        <p className="font-sans text-xs text-muted-foreground text-center mt-8">
          ¿Tu negocio podría ser el próximo? &nbsp;
          <a href="#contacto" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Contáctame
          </a>
        </p>
      </div>
    </section>
  )
}
