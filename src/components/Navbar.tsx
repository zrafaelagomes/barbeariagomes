import { useState, useEffect, useRef } from 'react'
import { useNavScroll } from '../hooks/useNavScroll'

type NavLink = [string, string]

const links: NavLink[] = [
  ['Início',      '#inicio'],
  ['Sobre',       '#sobre'],
  ['Serviços',    '#servicos'],
  ['Localização', '#contato'],
]

const WPP = 'https://wa.me/5587988618829?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20Barbearia%20Gomes.'

export default function Navbar() {
  const scrolled = useNavScroll()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const btnRef  = useRef<HTMLButtonElement>(null)

  // Fecha o menu ao pressionar ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        btnRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  // Bloqueia scroll do body quando menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        role="navigation"
        aria-label="Menu principal"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 flex items-center justify-between ${
          scrolled
            ? 'bg-charcoal-900/97 backdrop-blur-md border-b border-gold/10 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        {/* Logo */}
        <a href="#inicio" aria-label="Ir para o início — Barbearia Gomes">
          <div className="flex flex-col leading-none">
            <span className="font-display text-cream text-2xl md:text-3xl tracking-wide">
              Barbearia
            </span>
            <span className="font-display text-gold text-xl md:text-2xl italic tracking-widest">
              Gomes
            </span>
          </div>
        </a>

        {/* Links desktop */}
        <ul className="hidden lg:flex gap-10 list-none" role="menubar">
          {links.map(([label, href]) => (
            <li key={label} role="none">
              <a
                href={href}
                role="menuitem"
                className="text-cream/55 hover:text-gold text-xs uppercase tracking-[2.5px] font-light transition-colors duration-300 focus:outline-none focus:text-gold focus:underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburguer */}
        <div className="flex items-center gap-4">
          <a
            href={WPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block btn-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal-900"
            aria-label="Agendar horário pelo WhatsApp"
          >
            <span>Agendar</span>
          </a>

          <button
            ref={btnRef}
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-[5px] p-2 relative z-50 focus:outline-none focus:ring-2 focus:ring-gold rounded"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className={`block w-7 h-[1px] bg-gold transition-all duration-300 ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-7 h-[1px] bg-gold transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-7 h-[1px] bg-gold transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Menu mobile fullscreen */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-charcoal-950/98 backdrop-blur-xl transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <span className="absolute top-8 left-1/2 -translate-x-1/2 font-display text-gold/20 text-6xl select-none" aria-hidden="true">
          ✦
        </span>

        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            className="font-display text-cream text-4xl hover:text-gold transition-colors duration-300 tracking-wide focus:outline-none focus:text-gold focus:underline"
            tabIndex={open ? 0 : -1}
          >
            {label}
          </a>
        ))}

        <a
          href={WPP}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="btn-gold mt-4 focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Agendar horário pelo WhatsApp"
          tabIndex={open ? 0 : -1}
        >
          <span>Agendar Horário</span>
        </a>
      </div>
    </>
  )
}