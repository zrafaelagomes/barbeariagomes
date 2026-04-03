const WPP = 'https://wa.me/5587988618829?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20Barbearia%20Gomes.'

const diferenciais: [string, string][] = [
  ['✦', 'Cortes clássicos e modernos'],
  ['✦', 'Barba design premium'],
  ['✦', 'Tratamentos capilares'],
  ['✦', 'Atendimento exclusivo'],
]

export default function Sobre() {
  return (
    <section id="sobre" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 wood-texture opacity-40" />
      <div className="absolute inset-0 bg-charcoal-900/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Visual */}
        <div className="reveal-left relative">
          <div className="aspect-[4/5] bg-gradient-to-br from-wood-dark via-wood-mid to-charcoal-700 relative overflow-hidden border border-gold/15">
            {/* SVG tesoura */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 120 200" className="w-32 h-52 opacity-20" fill="none">
                <circle cx="30" cy="60" r="25" stroke="#c9954a" strokeWidth="1.5" fill="none" />
                <circle cx="90" cy="60" r="25" stroke="#c9954a" strokeWidth="1.5" fill="none" />
                <line x1="50" y1="45" x2="90" y2="180" stroke="#c9954a" strokeWidth="2" strokeLinecap="round" />
                <line x1="70" y1="45" x2="30" y2="180" stroke="#c9954a" strokeWidth="2" strokeLinecap="round" />
                <circle cx="30" cy="60" r="10" fill="#c9954a" opacity="0.3" />
                <circle cx="90" cy="60" r="10" fill="#c9954a" opacity="0.3" />
              </svg>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-display text-gold/30 text-5xl">Gomes</div>
            </div>
            <div className="absolute inset-3 border border-gold/8 pointer-events-none" />
          </div>

          {/* Card flutuante */}
          <div className="absolute -bottom-6 -right-6 bg-charcoal-800 border border-gold/20 p-5 max-w-[180px] shadow-2xl">
            <div className="font-serif text-gold text-3xl italic mb-1">5.0★</div>
            <div className="text-cream/60 text-xs tracking-wide leading-tight">
              nota no Google pelos nossos clientes
            </div>
          </div>

          {/* Cantos decorativos */}
          <div className="absolute -top-4 -left-4 w-10 h-10 border-t border-l border-gold/40" />
          <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b border-r border-gold/40" />
        </div>

        {/* Texto */}
        <div className="reveal-right">
          <div className="gold-line">
            <p className="text-gold text-[10px] tracking-[4px] uppercase font-light">Nossa história</p>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
            Tradição que<br />
            <em className="text-gold italic">transforma</em>
          </h2>

          <p className="font-serif text-cream/60 text-lg italic leading-relaxed mb-5">
            "Minha paixão sempre foi fazer as pessoas se sentirem melhores consigo mesmas.
            Um bom corte vai além da aparência — é um ritual de cuidado e autoestima."
          </p>

          <p className="text-cream/50 text-sm leading-relaxed mb-8 font-light">
            A Barbearia Gomes nasceu da visão de criar um espaço onde o cuidado masculino
            encontra a sofisticação. Com anos de experiência e técnicas apuradas, cada visita
            é uma experiência única em Petrolina e região.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {diferenciais.map(([ic, texto]) => (
              <div key={texto} className="flex items-start gap-2 text-sm text-cream/55">
                <span className="text-gold text-[10px] mt-0.5 flex-shrink-0">{ic}</span>
                {texto}
              </div>
            ))}
          </div>

          <a href={WPP} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <span>✦ Agendar pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}