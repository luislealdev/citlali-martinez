'use client'

type Reel = {
  label: string
  type: string
  desc: string
  localVideo?: string
  embedUrl?: string
  poster?: string
}

const reels: Reel[] = [
  {
    label: 'Reel 1',
    type: 'Instagram Reels',
    desc: 'Contenido de moda y lifestyle',
    embedUrl: 'https://www.instagram.com/reel/DQfrfp6kbKM/embed',
  },
  {
    label: 'Reel 2',
    type: 'Instagram Reels',
    desc: 'Tendencias y momentos auténticos',
    embedUrl: 'https://www.instagram.com/reel/DNPNrPZOJlO/embed',
  },
  {
    label: 'Reel 3',
    type: 'Instagram Reels',
    desc: 'Campañas para marcas y negocios',
    embedUrl: 'https://www.instagram.com/reel/DK72sF_h1a1/embed',
  },
  {
    label: 'Reel 4',
    type: 'Instagram Reels',
    desc: 'Contenido comercial y lifestyle',
    embedUrl: 'https://www.instagram.com/reel/DMf6ePbO34M/embed',
  },
]

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export default function VideosSection() {
  return (
    <section id="videos" className="py-24 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-14">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">Video & Reels</p>
          <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight text-foreground">
            Contenido que<br /><em>mueve audiencias.</em>
          </h2>
        </div>

        {/* Video grid — vertical reel placeholders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {reels.map((reel, i) => (
            <div
              key={i}
              className="relative bg-secondary overflow-hidden group"
              style={{ aspectRatio: '9/16' }}
            >
              {/* Video source: local file or iframe embed */}
              {reel.localVideo ? (
                <video
                  src={reel.localVideo}
                  poster={reel.poster}
                  controls
                  preload="metadata"
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : reel.embedUrl ? (
                <iframe
                  src={reel.embedUrl}
                  title={reel.label}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <>
                  {/* Gradient bg that mimics a phone reel */}
                  <div className="absolute inset-0 bg-linear-to-br from-secondary via-background to-muted" />

                  {/* Vertical lines decoration */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-5">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage:
                          'repeating-linear-gradient(90deg, transparent, transparent 20px, oklch(0.4 0 0) 20px, oklch(0.4 0 0) 21px)',
                      }}
                    />
                  </div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <PlayIcon />
                    </div>
                  </div>

                  {/* Placeholder overlay shown only when no video source is configured */}
                  <div className="absolute top-4 left-4">
                    <span className="font-sans text-[9px] tracking-widest uppercase bg-primary/80 text-primary-foreground px-2 py-1">
                      Placeholder
                    </span>
                  </div>
                </>
              )}

              {/* Info overlay bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-foreground/70 to-transparent">
                <p className="font-sans text-[10px] tracking-widest uppercase text-ivory/70 mb-1">{reel.type}</p>
                <p className="font-serif text-lg text-ivory">{reel.label}</p>
                <p className="font-sans text-xs text-ivory/60 mt-1">{reel.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to social media */}
        <div className="mt-14 flex flex-col sm:flex-row items-center gap-6 justify-center text-center">
          <p className="font-sans text-sm text-muted-foreground">Ver el contenido en vivo:</p>
          <div className="flex gap-4">
            <a
              href="https://www.tiktok.com/@citlaaaaaa__"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground text-foreground font-sans text-xs tracking-widest uppercase px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              TikTok
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/citlalimtz__/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground text-foreground font-sans text-xs tracking-widest uppercase px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Instagram
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
