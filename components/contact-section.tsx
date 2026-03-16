'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', brand: '', email: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Placeholder: would connect to an email API
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Left: copy */}
          <div className="flex flex-col gap-8 justify-center">
            <div>
              <p className="font-sans text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">Contacto</p>
              <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight text-foreground">
                ¿Lista para<br /><em>crear algo increíble?</em>
              </h2>
              <div className="w-12 h-px bg-accent mt-8 mb-8" />
            </div>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Estoy disponible para colaboraciones con marcas, restaurantes, negocios locales y agencias 
              de marketing en el Bajío y más allá. ¡Escríbeme y hagamos que tu marca brille!
            </p>

            {/* Direct contact */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:martinezcitlali59@gmail.com"
                className="flex items-center gap-3 group"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-taupe shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="font-sans text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  martinezcitlali59@gmail.com
                </span>
              </a>
              <a
                href="https://www.instagram.com/citlalimtz__/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-taupe shrink-0">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                <span className="font-sans text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  @citlalimtz__
                </span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="flex flex-col gap-4 justify-center h-full py-10">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-foreground">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl font-light text-foreground">Mensaje enviado.</h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Gracias por tu interés. Te responderé pronto para hablar sobre nuestra colaboración.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground">
                      Tu Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ana García"
                      className="bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground">
                      Marca / Negocio
                    </label>
                    <input
                      type="text"
                      name="brand"
                      value={form.brand}
                      onChange={handleChange}
                      placeholder="Mi Restaurante"
                      className="bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hola@tumarca.com"
                    className="bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto o lo que tienes en mente..."
                    className="bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-sans text-xs tracking-widest uppercase py-4 hover:bg-accent transition-colors duration-300"
                >
                  Enviar Mensaje — Book Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
