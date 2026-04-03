import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Sobre      from './components/Sobre'
import Espaco     from './components/Espaco'
import Servicos   from './components/Servicos'
import Galeria    from './components/Galeria'
import Avaliacoes from './components/Avaliacoes'
import Contato    from './components/Contato'
import Footer     from './components/Footer'

import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Espaco />
      <Servicos />
      <Galeria />
      <Avaliacoes />
      <Contato />
      <Footer />
    </>
  )
}