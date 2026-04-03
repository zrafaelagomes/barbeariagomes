const IG = 'https://www.instagram.com/barbearia.gomes_?igsh=aHk2dGJqNGxzOG16'

interface Foto {
  label: string
  // src: string  ← descomente e preencha quando tiver as fotos reais
  // Ex: src: '/fotos/degrade-classico.webp'
  g: string      // gradiente placeholder — remova quando tiver fotos reais
}

const fotos: Foto[] = [
  { label: 'Degradê Clássico', g: 'from-wood-dark to-charcoal-800' },
  { label: 'Barba Design',     g: 'from-charcoal-800 to-wood-mid' },
  { label: 'Corte Moderno',    g: 'from-wood-mid to-charcoal-700' },
  { label: 'High Fade',        g: 'from-charcoal-700 to-wood-dark' },
  { label: 'Bigode + Barba',   g: 'from-wood-dark to-charcoal-900' },
  { label: 'Texturizado',      g: 'from-charcoal-900 to-wood-light' },
  { label: 'Platinado',        g: 'from-wood-light to-charcoal-800' },
  { label: 'Undercut',         g: 'from-charcoal-800 to-wood-mid' },
]

const delayClass = ['d1', 'd2', 'd3', 'd4']

export default function Galeria() {
  return (
    <section
      id="galeria"
      className="py-28 bg-charcoal-950 relative"
      aria-label="Galeria de cortes da Barbearia Gomes"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="ornament mb-5">
            <span className="text-gold font-display text-lg" aria-hidden="true">✦</span>
          </div>
          <p className="text-gold text-[10px] tracking-[5px] uppercase mb-4">Nosso trabalho</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">
            Galeria de <em className="text-gold italic">Cortes</em>
          </h2>
        </div>

        {/* ─────────────────────────────────────────────
            GRID DE FOTOS
            Quando tiver as fotos reais, troque o bloco
            de gradiente por uma <img> assim:

            <img
              src={foto.src}
              alt={foto.label}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
        ───────────────────────────────────────────── */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"
          role="list"
          aria-label="Fotos de cortes"
        >
          {fotos.map(({ label, g }, i) => (
            <div
              key={label}
              role="listitem"
              aria-label={`Corte: ${label}`}
              className={`
                gallery-item reveal ${delayClass[i % 4]}
                bg-gradient-to-br ${g}
                aspect-square cursor-pointer
                border border-gold/8 hover:border-gold/25
                transition-all duration-300
                focus-within:border-gold/50
              `}
            >
              {/* Quando tiver foto real, coloque a <img> aqui
                  e remova o div abaixo */}
              <div className="w-full h-full flex items-end p-4 min-h-[140px]">
                <span className="text-gold/50 text-[10px] tracking-[2px] uppercase">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Instagram */}
        <div className="text-center mt-10 reveal">
          <a
            href={IG}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            aria-label="Ver mais fotos de cortes no Instagram da Barbearia Gomes"
          >
            Ver mais no Instagram ↗
          </a>
        </div>
      </div>
    </section>
  )
}