const WPP = 'https://wa.me/5587988618829?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20Barbearia%20Gomes.'
const IG  = 'https://www.instagram.com/barbearia.gomes_?igsh=aHk2dGJqNGxzOG16'

type NavItem = [string, string]

const navLinks: NavItem[] = [
  ['Início',      '#inicio'],
  ['Sobre',       '#sobre'],
  ['Serviços',    '#servicos'],
  ['Galeria',     '#galeria'],
  ['Localização', '#contato'],
]

export default function Footer() {
  return (
    <footer
      className="bg-charcoal-950 border-t border-gold/10 py-12 px-6 md:px-12"
      aria-label="Rodapé — Barbearia Gomes"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">

          {/* Logo */}
          <a href="#inicio" aria-label="Voltar ao início" className="text-center md:text-left">
            <div className="font-display text-cream text-3xl tracking-wide">Barbearia</div>
            <div className="font-display text-gold text-2xl tracking-widest italic">Gomes</div>
          </a>

          {/* Nav — opacidade aumentada de /30 para /55 */}
          <nav aria-label="Links de navegação do rodapé">
            <ul className="flex flex-wrap gap-8 justify-center list-none">
              {navLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-cream/55 hover:text-gold text-xs tracking-[2px] uppercase transition-colors focus:outline-none focus:text-gold focus:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes sociais */}
          <div className="flex gap-4" aria-label="Redes sociais">
            <a
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Barbearia Gomes — @barbearia.gomes_"
              className="w-9 h-9 border border-gold/30 flex items-center justify-center text-gold/60 hover:border-gold hover:text-gold transition-all text-xs tracking-wider focus:outline-none focus:ring-2 focus:ring-gold rounded"
            >
              IG
            </a>
            <a
              href={WPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Barbearia Gomes — agendar horário"
              className="w-9 h-9 border border-gold/30 flex items-center justify-center text-gold/60 hover:border-gold hover:text-gold transition-all text-xs tracking-wider focus:outline-none focus:ring-2 focus:ring-gold rounded"
            >
              WA
            </a>
          </div>
        </div>

        {/* Copyright — opacidade aumentada de /25 para /50 */}
        <div className="border-t border-gold/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-cream/50 text-xs tracking-wide">
          <p>© 2025 Barbearia Gomes · Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{' '}
            <a
              href="#"
              className="text-gold/70 hover:text-gold transition-colors focus:outline-none focus:underline"
              aria-label="Desenvolvido por Rafaela Gomes"
            >
              Rafaela Gomes
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}