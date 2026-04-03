const WPP = 'https://wa.me/5587988618829?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20Barbearia%20Gomes.'
const IG = 'https://www.instagram.com/barbearia.gomes_?igsh=aHk2dGJqNGxzOG16'
const MAPS_LINK = 'https://www.google.com/maps/place/Barbearia+Gomes/@-9.3985488,-40.5518531,17z'
const MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.2601883804405!2d-40.549557124046416!3d-9.398548798263601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x77371f017e62b3f%3A0x3d54ec83a1165dd2!2sBarbearia%20Gomes!5e0!3m2!1spt-BR!2sbr!4v1774901073196!5m2!1spt-BR!2sbr'

interface Info {
  icon: string
  titulo: string
  linhas: string[]
  link?: string
  labelLink?: string
}

const infos: Info[] = [
  {
    icon: '📍',
    titulo: 'Endereço',
    linhas: ['Rua das Ameixas, 356', 'Cohab São Francisco — Petrolina, PE'],
    link: MAPS_LINK,
    labelLink: 'Ver no Google Maps →',
  },
  {
    icon: '📞',
    titulo: 'WhatsApp',
    linhas: ['(87) 9 8861-8829', 'Chame para agendar'],
    link: WPP,
    labelLink: 'Abrir no WhatsApp →',
  },
  {
    icon: '🕐',
    titulo: 'Horário de Funcionamento',
    linhas: [
      'Segunda a Sexta: 08h às 17h',
      'Sábado: 08h às 17h  ·  Domingo: fechado',
    ],
  },
  {
    icon: '📱',
    titulo: 'Instagram',
    linhas: ['@barbearia.gomes_', 'Siga para acompanhar nossos trabalhos'],
    link: IG,
    labelLink: 'Abrir no Instagram →',
  },
]

const delayClass = ['d1', 'd2', 'd3', 'd4']

export default function Contato() {
  return (
    <section id="contato" className="py-28 relative">
      <div className="absolute inset-0 wood-texture opacity-30" />
      <div className="absolute inset-0 bg-charcoal-900/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="ornament mb-5">
            <span className="text-gold font-display text-lg">✦</span>
          </div>
          <p className="text-gold text-[10px] tracking-[5px] uppercase mb-4">Nos encontre</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">
            Localização &<br />
            <em className="text-gold italic">Contato</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Cards de info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infos.map(({ icon, titulo, linhas, link, labelLink }, i) => (
              <div
                key={titulo}
                className={`reveal ${delayClass[i]} border border-gold/12 bg-charcoal-800/50 p-6 transition-all duration-300 ${link ? 'hover:border-gold/40 hover:bg-charcoal-800/80 cursor-pointer group' : 'hover:border-gold/25'}`}
              >
                <div className="text-2xl mb-3">{icon}</div>
                <div className="text-gold text-xs tracking-[2px] uppercase mb-3 font-light">
                  {titulo}
                </div>
                {linhas.map((linha) => (
                  <div key={linha} className="text-cream/60 text-sm font-light leading-relaxed">
                    {linha}
                  </div>
                ))}
                {link && labelLink && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-gold/60 text-xs tracking-[1px] uppercase hover:text-gold transition-colors group-hover:text-gold"
                  >
                    {labelLink}
                  </a>
                )}
              </div>
            ))}

            {/* WhatsApp CTA */}
            <div className="sm:col-span-2 reveal d5">
              <a
                href={WPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center gap-3"
              >
                <span>💬 Chamar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mapa Google Maps embed */}
          <div className="reveal-right h-80 md:h-full min-h-[380px] relative">
            <div
              className="absolute inset-0 border border-gold/20 pointer-events-none z-10"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(201,149,74,0.1)' }}
            />
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: 'block',
                filter: 'grayscale(1) invert(0.88) contrast(0.9) brightness(0.85) sepia(0.15)',
                minHeight: '380px',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Barbearia Gomes"
            />
            {/* Label sobre o mapa */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal-950/80 to-transparent py-4 px-5 pointer-events-none z-10">
              <div className="text-gold text-xs tracking-[3px] uppercase">📍 Barbearia Gomes</div>
              <div className="text-cream/50 text-xs mt-1">
                Rua das Ameixas, 356 — Cohab São Francisco, Petrolina–PE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}