const WPP = 'https://wa.me/5587988618829?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20Barbearia%20Gomes.'

interface Servico {
  name: string
  price: string
  duration: string
  desc: string
}

const servicos: Servico[] = [
  {
    name: 'Corte Clássico & Infantil',
    price: 'R$ 45',
    duration: '45 min',
    desc: 'Corte preciso com navalha e acabamento premium para adultos e crianças.',
  },
  {
    name: 'Corte + Barba',
    price: 'R$ 70',
    duration: '60 min',
    desc: 'Combinação perfeita de corte e design de barba personalizado.',
  },
  {
    name: 'Barba Design',
    price: 'R$ 35',
    duration: '30 min',
    desc: 'Modelagem, hidratação e acabamento com toalha quente e navalha.',
  },
  {
    name: 'Pigmentação',
    price: 'R$ 50',
    duration: '50 min',
    desc: 'Pigmentação profissional para disfarçar falhas e uniformizar a barba e o cabelo.',
  },
  {
    name: 'Sobrancelha',
    price: 'R$ 15',
    duration: '15 min',
    desc: 'Design e acabamento de sobrancelha com navalha para um visual impecável.',
  },
  {
    name: 'Pacote VIP Completo',
    price: 'R$ 110',
    duration: '90 min',
    desc: 'Corte + Barba + Sobrancelha. A experiência completa da Barbearia Gomes.',
  },
]

const delayClass = ['d1', 'd2', 'd3', 'd1', 'd2', 'd3']

export default function Servicos() {
  return (
    <section id="servicos" className="py-28 md:py-36 relative">
      <div className="absolute inset-0 wood-texture opacity-30" />
      <div className="absolute inset-0 bg-charcoal-900/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="reveal">
            <div className="gold-line">
              <p className="text-gold text-[10px] tracking-[4px] uppercase font-light">
                O que oferecemos
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
              Serviços &<br />
              <em className="text-gold italic">Preços</em>
            </h2>
          </div>
          <a
            href={WPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline self-start md:self-auto reveal"
          >
            Agendar agora →
          </a>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicos.map(({ name, price, duration, desc }, i) => (
            <div key={name} className={`reveal ${delayClass[i]} service-card p-7`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-serif text-cream text-xl italic leading-tight">{name}</h3>
                <div className="text-gold font-serif text-2xl italic flex-shrink-0 ml-3">
                  {price}
                </div>
              </div>
              <p className="text-cream/45 text-sm leading-relaxed mb-5 font-light">{desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-gold/50 text-xs tracking-wide">⏱ {duration}</span>
                <a
                  href={WPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-xs tracking-[2px] uppercase hover:text-gold-light transition-colors"
                >
                  Agendar →
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-cream/30 text-xs tracking-wide text-center mt-8 reveal">
          * Preços sujeitos a alteração. Consulte disponibilidade pelo WhatsApp.
        </p>
      </div>
    </section>
  )
}