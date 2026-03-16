'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Sobre Mí', href: '#sobre' },
  { label: 'Media Kit', href: '#mediakit' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Videos', href: '#videos' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ivory/90 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="font-serif text-xl tracking-widest uppercase text-foreground">
          CM
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-sans text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Book Now CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground font-sans text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-accent transition-colors duration-200"
        >
          Book Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-ivory border-b border-border ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-sans text-xs tracking-widest uppercase text-muted-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              className="inline-flex items-center bg-primary text-primary-foreground font-sans text-xs tracking-widest uppercase px-5 py-2.5"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
