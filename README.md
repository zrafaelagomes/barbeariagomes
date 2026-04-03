# 💈 Barbearia Gomes

> **A Modern Barbershop Website** | **Um Moderno Site de Barbearia**

---

## 🇬🇧 English

### About the Project

**Barbearia Gomes** is a modern, responsive website for a barbershop built with cutting-edge web technologies. The site showcases the barbershop's services, creates an engaging user experience, and integrates WhatsApp for easy scheduling.

**Key Statistics:**
- 5,000+ clients served
- 5.0★ Google rating
- 100% satisfaction guaranteed

### Features

✨ **Responsive Design** - Fully responsive on desktop, tablet, and mobile devices  
🎨 **Modern UI** - Beautiful, professional design with smooth animations  
📱 **WhatsApp Integration** - One-click appointment scheduling via WhatsApp  
🖼️ **Gallery** - Showcase of the team's work and barbershop atmosphere  
⭐ **Customer Reviews** - Display client testimonials and ratings  
🔍 **SEO Optimized** - Best practices for search engine visibility  
♿ **Accessible** - WCAG compliance with semantic HTML and ARIA labels  
⚡ **High Performance** - Fast loading with Vite's optimized build

### Technology Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript 5.9
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4
- **Code Quality:** ESLint 9

### Pages & Sections

- **Hero** - Eye-catching landing section with CTA
- **About (Sobre)** - Barbershop history and values
- **Space (Espaço)** - Showcase of the physical location
- **Services (Serviços)** - Complete service menu
- **Gallery (Galeria)** - Portfolio of cuts and styles
- **Reviews (Avaliações)** - Customer testimonials
- **Contact (Contato)** - Contact form and information
- **Navigation** - Smooth scroll navigation

### Getting Started

#### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

#### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd barbearia
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

```bash
# Start development server with hot module replacement
npm run dev

# Build for production
npm run build

# Run ESLint to check code quality
npm run lint

# Preview the production build locally
npm run preview
```

### Project Structure

```
barbearia/
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Sobre.tsx
│   │   ├── Espaco.tsx
│   │   ├── Servicos.tsx
│   │   ├── Galeria.tsx
│   │   ├── Avaliacoes.tsx
│   │   ├── Contato.tsx
│   │   └── Footer.tsx
│   ├── hooks/            # Custom React hooks
│   │   ├── useNavScroll.ts
│   │   └── useScrollReveal.ts
│   ├── styles/           # Global styles
│   │   └── global.css
│   ├── assets/           # Images and media
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static files
├── package.json          # Project dependencies
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

### Development Features

- **Hot Module Replacement (HMR)** - Instant updates during development
- **Type Safety** - Full TypeScript coverage
- **Scroll Animations** - Custom hooks for scroll reveal effects
- **Smooth Navigation** - Custom scroll navigation
- **CSS-in-JS** - Tailwind CSS for utility-first styling

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Deployment

This project can be deployed to various platforms:

```bash
# Build for production
npm run build

# The dist/ folder contains the production-ready files
```

Recommended hosting platforms:
- Vercel (recommended for React apps)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- DigitalOcean

### Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Contact

For inquiries about the barbershop or website:
- WhatsApp: +55 87 9886-18829
- Website: [Your website URL]

---

## 🇧🇷 Português

### Sobre o Projeto

**Barbearia Gomes** é um site moderno e responsivo para uma barbearia desenvolvido com as mais recentes tecnologias web. O site apresenta os serviços da barbearia, cria uma experiência de usuário envolvente e integra WhatsApp para agendamento fácil.

**Estatísticas Principais:**
- 5.000+ clientes atendidos
- Nota 5.0★ no Google
- 100% satisfação garantida

### Funcionalidades

✨ **Design Responsivo** - Totalmente responsivo em desktop, tablet e dispositivos móveis  
🎨 **Interface Moderna** - Design profissional e bonito com animações suaves  
📱 **Integração WhatsApp** - Agendamento de consultas com um clique via WhatsApp  
🖼️ **Galeria** - Vitrine dos trabalhos do time e ambiente da barbearia  
⭐ **Avaliações de Clientes** - Exibição de depoimentos e classificações  
🔍 **Otimizado para SEO** - Melhores práticas para visibilidade em mecanismos de busca  
♿ **Acessível** - Compatível com WCAG com HTML semântico e rótulos ARIA  
⚡ **Alto Desempenho** - Carregamento rápido com build otimizado do Vite

### Stack Tecnológico

- **Framework Frontend:** React 19
- **Linguagem:** TypeScript 5.9
- **Ferramenta de Build:** Vite 8
- **Estilização:** Tailwind CSS 4
- **Qualidade de Código:** ESLint 9

### Páginas e Seções

- **Hero** - Seção de destaque com chamada para ação
- **Sobre** - História e valores da barbearia
- **Espaço** - Apresentação da localização física
- **Serviços** - Menu completo de serviços
- **Galeria** - Portfólio de cortes e estilos
- **Avaliações** - Depoimentos de clientes
- **Contato** - Formulário e informações de contato
- **Navegação** - Navegação com scroll suave

### Como Começar

#### Pré-requisitos
- Node.js versão 18.0 ou superior
- npm ou gerenciador de pacotes yarn

#### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositório>
cd barbearia
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador e acesse `http://localhost:5173`

### Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento com recarregamento automático
npm run dev

# Compila para produção
npm run build

# Executa ESLint para verificar a qualidade do código
npm run lint

# Visualiza a compilação de produção localmente
npm run preview
```

### Estrutura do Projeto

```
barbearia/
├── src/
│   ├── components/        # Componentes React
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Sobre.tsx
│   │   ├── Espaco.tsx
│   │   ├── Servicos.tsx
│   │   ├── Galeria.tsx
│   │   ├── Avaliacoes.tsx
│   │   ├── Contato.tsx
│   │   └── Footer.tsx
│   ├── hooks/            # Hooks React customizados
│   │   ├── useNavScroll.ts
│   │   └── useScrollReveal.ts
│   ├── styles/           # Estilos globais
│   │   └── global.css
│   ├── assets/           # Imagens e mídia
│   ├── App.tsx           # Componente principal
│   └── main.tsx          # Ponto de entrada
├── public/               # Arquivos estáticos
├── package.json          # Dependências do projeto
├── vite.config.ts        # Configuração do Vite
├── tailwind.config.js    # Configuração do Tailwind CSS
└── tsconfig.json         # Configuração do TypeScript
```

### Funcionalidades de Desenvolvimento

- **Hot Module Replacement (HMR)** - Atualizações instantâneas durante o desenvolvimento
- **Segurança de Tipos** - Cobertura completa com TypeScript
- **Animações de Scroll** - Hooks customizados para efeitos de scroll
- **Navegação Suave** - Navegação com scroll customizado
- **CSS-in-JS** - Tailwind CSS para estilização utilitária

### Compatibilidade com Navegadores

- Chrome (última versão)
- Firefox (última versão)
- Safari (última versão)
- Edge (última versão)

### Implantação

Este projeto pode ser implantado em várias plataformas:

```bash
# Compila para produção
npm run build

# A pasta dist/ contém os arquivos prontos para produção
```

Plataformas de hospedagem recomendadas:
- Vercel (recomendado para apps React)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- DigitalOcean

### Contribuindo

Contribuições são bem-vindas! Siga estas diretrizes:

1. Faça um fork do repositório
2. Crie uma branch para sua funcionalidade (`git checkout -b feature/funcionalidade-incrível`)
3. Commit suas mudanças (`git commit -m 'Adiciona funcionalidade incrível'`)
4. Push para a branch (`git push origin feature/funcionalidade-incrível`)
5. Abra um Pull Request

### Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

---

**Made with ❤️ for Barbearia Gomes** | **Feito com ❤️ para Barbearia Gomes**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
