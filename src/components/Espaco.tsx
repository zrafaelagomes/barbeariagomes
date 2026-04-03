interface Ambiente {
  titulo: string
  desc: string
  icon: string
}

const ambientes: Ambiente[] = [
  {
    titulo: 'Ambiente Exclusivo',
    desc: 'Espaço cuidadosamente decorado com elementos rústicos e premium para seu conforto.',
    icon: '🏛️',
  },
  {
    titulo: 'Música Selecionada',
    desc: 'Playlist exclusiva criada para tornar sua experiência ainda mais relaxante.',
    icon: '🎵',
  },
  {
    titulo: 'Produtos Selecionados',
    desc: 'Linha exclusiva de produtos capilares nacionais e importados.',
    icon: '✦',
  },
  {
    titulo: 'Wi-Fi & Café',
    desc: 'Ambiente confortável com café artesanal durante sua espera.',
    icon: '☕',
  },
]

const delayClass = ['d1', 'd2', 'd3', 'd4']

export default function Espaco() {
  return (
    <section id="espaco" className="py-24 md:py-32 bg-charcoal-950 relative">
      {/* Linha dourada topo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="ornament mb-5">
            <span className="text-gold text-lg font-display">✦</span>
          </div>
          <p className="text-gold text-[10px] tracking-[5px] uppercase mb-4">O ambiente</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">
            Um espaço pensado<br />para{' '}
            <em className="text-gold italic">você</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/8">
          {ambientes.map(({ titulo, desc, icon }, i) => (
            <div
              key={titulo}
              className={`reveal ${delayClass[i]} bg-charcoal-900 p-8 hover:bg-wood-dark/20 transition-colors duration-300 group`}
            >
              <div className="text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <h3 className="font-serif text-gold text-xl italic mb-3">{titulo}</h3>
              <p className="text-cream/45 text-sm leading-relaxed font-light">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}