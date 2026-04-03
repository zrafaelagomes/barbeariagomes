const WPP = 'https://wa.me/5587988618829?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20Barbearia%20Gomes.'

interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '5.000+', label: 'clientes atendidos' },
  { value: '5.0★',   label: 'nota no Google' },
  { value: '100%',   label: 'satisfação garantida' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
      aria-label="Início — Barbearia Gomes"
    >
      {/* Fundo madeira */}
      <div className="absolute inset-0 wood-texture" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950/90 via-charcoal-900/70 to-charcoal-800/50" aria-hidden="true" />

      {/* Luzes decorativas */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,149,74,0.12)_0%,transparent_65%)] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(92,58,30,0.2)_0%,transparent_60%)] pointer-events-none" aria-hidden="true" />

      {/* Linhas verticais decorativas */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/8 to-transparent" />
        <div className="absolute right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/8 to-transparent" />
      </div>

      {/* SVG decorativo */}
      <div className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none hidden md:block" aria-hidden="true">
        <svg viewBox="0 0 200 300" className="w-48 h-72 text-gold fill-current">
          <rect x="90" y="0" width="20" height="300" rx="10" fill="currentColor" opacity="0.8" />
          <ellipse cx="100" cy="20" rx="30" ry="12" fill="currentColor" opacity="0.6" />
          <ellipse cx="100" cy="280" rx="30" ry="12" fill="currentColor" opacity="0.6" />
          <path d="M85 40 Q100 80 115 120 Q100 160 85 200 Q100 240 115 280" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.5" />
          <path d="M115 40 Q100 80 85 120 Q100 160 115 200 Q100 240 85 280" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-4xl pt-28 md:pt-32 animate-fade-in">

        {/* Nome + localização */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] text-cream mb-2 tracking-wide">
          Barbearia
        </h1>
        <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] text-gold mb-3 tracking-wide italic">
          Gomes
        </h1>
        <div className="flex items-center gap-3 mb-10" aria-label="Localização: Petrolina, PE">
          <div className="w-8 h-px bg-gold/60" aria-hidden="true" />
          {/* Opacidade aumentada de /70 para /90 para melhor contraste */}
          <span className="text-gold/90 text-[10px] tracking-[5px] uppercase font-light">
            Petrolina — PE
          </span>
        </div>

        {/* Citação */}
        <p className="font-serif text-cream/80 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10 italic">
          "A arte do corte perfeito. Um espaço onde tradição e sofisticação se encontram
          para transformar sua aparência e elevar sua confiança."
        </p>

        {/* Botões */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href={WPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal-900"
            aria-label="Agendar horário na Barbearia Gomes pelo WhatsApp"
          >
            <span>✦ Agendar Horário</span>
          </a>
          <a
            href="#servicos"
            className="btn-outline focus:outline-none focus:ring-2 focus:ring-gold rounded"
            aria-label="Ver todos os serviços e preços"
          >
            Ver Serviços
          </a>
        </div>

        {/* Stats */}
        <dl className="flex gap-8 md:gap-12 mt-16 pt-10 border-t border-gold/10 flex-wrap">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <dt className="font-serif text-gold text-2xl md:text-3xl italic">{value}</dt>
              {/* Opacidade aumentada de /40 para /60 */}
              <dd className="text-cream/60 text-xs tracking-wide mt-1">{label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/60" aria-hidden="true">
        <span className="text-[9px] tracking-[4px] uppercase">Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-gold/50 to-transparent animate-shimmer" />
      </div>
    </section>
  )
}