export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-14 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Name */}
        <div>
          <p className="font-serif text-2xl font-light tracking-wider">Citlali Martinez</p>
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-primary-foreground/50 mt-1">
            Modelo Comercial & Influencer Lifestyle
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/citlalimtz__/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Citlali Martinez"
            className="font-sans text-[10px] tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
          >
            Instagram
          </a>
          <span className="text-primary-foreground/20">·</span>
          <a
            href="https://www.tiktok.com/@citlaaaaaa__"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok de Citlali Martinez"
            className="font-sans text-[10px] tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
          >
            TikTok
          </a>
          <span className="text-primary-foreground/20">·</span>
          <a
            href="mailto:martinezcitlali59@gmail.com"
            className="font-sans text-[10px] tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="font-sans text-[10px] text-primary-foreground/40">
            © {year} Citlali Martinez. Todos los derechos reservados.
          </p>
          <a
            href="https://luislealsoftware.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[10px] text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200"
          >
            Creado por luislealsoftware.com
          </a>
        </div>
      </div>
    </footer>
  )
}
