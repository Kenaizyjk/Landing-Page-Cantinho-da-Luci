# Cantinho da Luci - Landing Page

Landing page moderna e responsiva para o **Cantinho da Luci**, restaurante e pousada localizado na Lapinha, Lagoa Santa - MG.

## 🌟 Sobre o Projeto

Site desenvolvido com Next.js 16 e React 19, apresentando:
- **Gastronomia Mineira**: Destaque para o buffet servido no fogão a lenha
- **Hospedagem**: Informações sobre as suítes aconchegantes
- **Piscina e Lazer**: Área de lazer em meio à natureza
- **Contato e Localização**: Integração com Google Maps e WhatsApp

## 🚀 Tecnologias

- **[Next.js 16](https://nextjs.org/)** - Framework React de última geração
- **[React 19](https://react.dev/)** - Biblioteca JavaScript para UI
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI reutilizáveis
- **[Lucide Icons](https://lucide.dev/)** - Ícones modernos
- **[pnpm](https://pnpm.io/)** - Gerenciador de pacotes rápido e eficiente

## 📋 Pré-requisitos

- Node.js 20.x ou superior
- pnpm (recomendado) ou npm

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/Kenaizyjk/Landing-Page-Cantinho-da-Luci.git

# Entre no diretório
cd Landing-Page-Cantinho-da-Luci

# Instale as dependências
pnpm install
```

## 🎯 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Iniciar servidor de produção
pnpm start

# Lint do código
pnpm lint
```

## 📦 Deploy no Netlify

Este projeto está configurado para deploy automático no Netlify:

1. Push para o repositório dispara o build automaticamente
2. Build command: `pnpm install && pnpm run build`
3. Publish directory: `.next`
4. Node version: 20

### Netlify Plugins
- `@netlify/plugin-nextjs` - Otimizações específicas para Next.js

## 🎨 Estrutura do Projeto

```
.
├── app/                  # App Router do Next.js
│   ├── globals.css      # Estilos globais
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página inicial
├── components/          # Componentes React
│   ├── ui/             # Componentes shadcn/ui
│   └── theme-provider.tsx
├── hooks/              # Custom hooks
├── lib/                # Utilitários
├── public/             # Arquivos estáticos (imagens)
├── styles/             # Estilos adicionais
├── netlify.toml        # Configuração Netlify
├── next.config.mjs     # Configuração Next.js
├── tailwind.config.ts  # Configuração Tailwind
└── tsconfig.json       # Configuração TypeScript
```

## 🎨 Design

O design foi criado com foco em:
- **Estética rústica e acolhedora** - Refletindo o ambiente do restaurante
- **Cores terrosas** - Paleta stone/brown/gold
- **Responsividade total** - Funciona perfeitamente em mobile e desktop
- **Performance** - Otimizado para carregamento rápido
- **Acessibilidade** - Seguindo as melhores práticas

## 📱 Contato

- **Endereço**: R. João Francisco Avelar, 94 - Lapinha, Lagoa Santa - MG
- **WhatsApp**: (31) 99648-1646
- **Google Maps**: [Ver localização](https://www.google.com/maps/place/Restaurante%2FPousada+Cantinho+da+Luci)

## 📝 Licença

© 2025 Cantinho da Luci. Todos os direitos reservados.

---

Desenvolvido com ❤️ para o Cantinho da Luci
