interface Depoimento {
  name: string
  rating: number
  text: string
  since: string
  emoji: string
}

const depoimentos: Depoimento[] = [
  {
    name: 'Carlos Eduardo',
    rating: 5,
    text: 'Melhor barbearia de Petrolina, sem dúvida. O Gilberto é um artista. Meu cabelo nunca ficou tão bem feito. Saio de lá me sentindo outra pessoa.',
    since: 'Cliente desde 2018',
    emoji: '👨🏽',
  },
  {
    name: 'Marcos Vinicius',
    rating: 5,
    text: 'Atendimento impecável, ambiente premium e o resultado sempre supera as expectativas. Não troco por nada. Já indiquei pra toda a galera.',
    since: 'Cliente desde 2020',
    emoji: '👨🏻',
  },
  {
    name: 'João Paulo',
    rating: 5,
    text: 'Fui pela primeira vez indicado por um amigo e nunca mais fui em outra barbearia. A experiência completa — barba, corte, café... top demais.',
    since: 'Cliente desde 2021',
    emoji: '👨🏿',
  },
  {
    name: 'Rafael Souza',
    rating: 5,
    text: 'O ambiente é incrível, parece que você está num lugar exclusivo. E o trabalho é perfeito. Sempre saio satisfeito.',
    since: 'Cliente desde 2019',
    emoji: '👨🏼',
  },
  {
    name: 'André Lima',
    rating: 5,
    text: 'Profissionalismo em cada detalhe. Toalha quente, produtos de qualidade, papo ótimo. Vale cada centavo. Barbearia Gomes é referência.',
    since: 'Cliente desde 2022',
    emoji: '👨🏾',
  },
  {
    name: 'Thiago Alves',
    rating: 5,
    text: 'Levei meu filho pela primeira vez e ele adorou. Tem muita paciência e habilidade. Ponto final: o melhor do nordeste.',
    since: 'Cliente desde 2023',
    emoji: '👨',
  },
]

const delayClass = ['d1', 'd2', 'd3']

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 wood-texture opacity-25" />
      <div className="absolute inset-0 bg-charcoal-900/92" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-6 reveal">
          <div className="ornament mb-5">
            <span className="text-gold font-display text-lg">✦</span>
          </div>
          <p className="text-gold text-[10px] tracking-[5px] uppercase mb-4">O que dizem</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">
            Avaliações dos<br />
            <em className="text-gold italic">Clientes</em>
          </h2>
        </div>

        {/* Média */}
        <div className="flex flex-col items-center mb-14 reveal">
          <div className="stars text-3xl mb-2">★★★★★</div>
          <div className="font-serif text-gold text-5xl italic mb-1">5.0</div>
          <div className="text-cream/40 text-xs tracking-[3px] uppercase">
            Nota máxima no Google
          </div>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {depoimentos.map(({ name, rating, text, since, emoji }, i) => (
            <div
              key={name}
              className={`reveal ${delayClass[i % 3]} border border-gold/10 bg-charcoal-800/60 p-7 hover:border-gold/25 hover:bg-charcoal-800/90 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="avatar-ring text-2xl">{emoji}</div>
                <div>
                  <div className="text-cream text-sm font-medium">{name}</div>
                  <div className="text-cream/35 text-xs mt-0.5">{since}</div>
                </div>
                <div className="ml-auto text-gold text-xs">
                  {'★'.repeat(rating)}
                </div>
              </div>
              <p className="text-cream/55 text-sm leading-relaxed font-light italic">
                "{text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}