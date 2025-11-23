# 🏡 Cantinho da Luci - Landing Page

> Landing page oficial do Cantinho da Luci - Restaurante e Pousada em Lapinha, Lagoa Santa - MG

[![Deploy Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)
[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38bdf8)](https://tailwindcss.com/)

## 📋 Sobre o Projeto

Site institucional desenvolvido para o **Cantinho da Luci**, um aconchegante restaurante e pousada localizado na bela região da Lapinha, em Lagoa Santa - MG. O estabelecimento oferece autêntica culinária mineira preparada em fogão a lenha e acomodações confortáveis em meio à natureza.

### ✨ Características do Site

- 🎨 Design moderno e responsivo
- 🚀 Performance otimizada com Next.js 16
- 📱 Totalmente adaptado para mobile
- 🎯 SEO otimizado
- 🖼️ Galeria de imagens do restaurante e pousada
- 📍 Integração com Google Maps
- 💬 Links diretos para WhatsApp
- ⚡ Deploy automático via Netlify

## 🛠️ Tecnologias Utilizadas

### Core
- **[Next.js 16.0.3](https://nextjs.org/)** - Framework React com SSR/SSG
- **[React 19.2.0](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática

### Estilização
- **[Tailwind CSS 4.1.9](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes reutilizáveis
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis
- **[Lucide React](https://lucide.dev/)** - Ícones SVG

### Ferramentas
- **[Vercel Analytics](https://vercel.com/analytics)** - Análise de performance
- **[Netlify](https://www.netlify.com/)** - Hospedagem e CI/CD

## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js 20.x ou superior
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Kenaizyjk/Landing-Page-Cantinho-da-Luci.git
cd Landing-Page-Cantinho-da-Luci
```

2. Instale as dependências:
```bash
npm install --legacy-peer-deps
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📦 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa o linter
npm run format       # Formata o código
npm run type-check   # Verifica tipagem TypeScript
```

## 🌐 Deploy

### Deploy Automático com Netlify

Este projeto está configurado para deploy automático via Netlify. Cada push para o branch principal dispara um novo build automaticamente.

#### Configuração do Netlify

1. Conecte seu repositório ao Netlify
2. Configure as seguintes build settings:
   - **Build command**: `npm install && npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `20`

3. O arquivo `netlify.toml` já está configurado com:
   - ✅ Build otimizado
   - ✅ Headers de cache
   - ✅ Segurança HTTP
   - ✅ Plugin Next.js

#### Deploy Manual

```bash
# Build de produção
npm run build

# Deploy via Netlify CLI (requer instalação)
netlify deploy --prod
```

## 📁 Estrutura do Projeto

```
Landing-Page-Cantinho-da-Luci/
├── app/                    # Rotas e páginas Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React reutilizáveis
│   ├── ui/               # Componentes UI (shadcn)
│   └── theme-provider.tsx
├── public/               # Arquivos estáticos
│   ├── *.jpeg           # Imagens do restaurante e pousada
│   └── *.png            # Logos e ícones
├── lib/                 # Utilitários e helpers
├── hooks/               # Custom React Hooks
├── styles/              # Estilos adicionais
├── netlify.toml         # Configuração do Netlify
├── next.config.mjs      # Configuração do Next.js
├── tailwind.config.ts   # Configuração do Tailwind
└── tsconfig.json        # Configuração do TypeScript
```

## 🏪 Sobre o Cantinho da Luci

### 🍽️ Restaurante
- Comida mineira autêntica preparada em fogão a lenha
- Buffet completo servido aos finais de semana e feriados
- Pratos típicos: torresmo, feijão tropeiro, angu, carnes defumadas
- Doces caseiros em compota

### 🛏️ Pousada
- Suítes aconchegantes com decoração rústica
- Wi-Fi gratuito
- Café da manhã incluso
- Piscina cercada pela natureza

### 📍 Localização
**Endereço**: R. João Francisco Avelar, 94 - Lapinha, Lagoa Santa - MG, 33242-000

### 📞 Contato
- **Telefone/WhatsApp**: (31) 99648-1646
- **Funcionamento**:
  - Restaurante: Sábados, domingos e feriados
  - Pousada: Todos os dias (com reserva)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ para o Cantinho da Luci

---

**[⬆ Voltar ao topo](#-cantinho-da-luci---landing-page)**
