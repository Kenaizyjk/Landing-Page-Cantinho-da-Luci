# 🤖 Configuração do Chatbot - Cantinho da Luci

Este guia mostrará como configurar a API do chatbot flutuante no site.

## 📋 Passo a Passo

### 1. Escolher o Provedor de IA

O chatbot suporta 3 provedores diferentes. Escolha um:

#### Opção A: OpenAI (ChatGPT) - **RECOMENDADO**
- ✅ Mais fácil de configurar
- ✅ Boa relação custo-benefício
- ✅ Respostas rápidas e precisas
- 💰 Custo aproximado: $0.001 por conversa

**Como obter a chave:**
1. Acesse: https://platform.openai.com/api-keys
2. Crie uma conta ou faça login
3. Clique em "Create new secret key"
4. Copie a chave (começa com `sk-...`)

#### Opção B: Anthropic (Claude)
- ✅ Respostas mais naturais e contextualizadas
- ✅ Excelente para conversas longas
- 💰 Custo aproximado: $0.003 por conversa

**Como obter a chave:**
1. Acesse: https://console.anthropic.com/
2. Crie uma conta
3. Vá em "API Keys" e crie uma nova chave
4. Copie a chave

#### Opção C: Google AI (Gemini)
- ✅ Plano gratuito generoso
- ✅ Boa performance
- 💰 Gratuito até 60 requisições por minuto

**Como obter a chave:**
1. Acesse: https://makersuite.google.com/app/apikey
2. Faça login com sua conta Google
3. Clique em "Create API Key"
4. Copie a chave

---

### 2. Configurar as Variáveis de Ambiente

1. **Copie o arquivo de exemplo:**
   ```bash
   cp .env.example .env
   ```

2. **Edite o arquivo `.env` e adicione suas credenciais:**

   **Para OpenAI (Recomendado):**
   ```env
   CHATBOT_PROVIDER=openai
   OPENAI_API_KEY=sk-sua_chave_aqui
   CHATBOT_MODEL=gpt-4o-mini
   ```

   **Para Anthropic (Claude):**
   ```env
   CHATBOT_PROVIDER=anthropic
   ANTHROPIC_API_KEY=sua_chave_aqui
   CHATBOT_MODEL=claude-3-5-sonnet-20241022
   ```

   **Para Google AI (Gemini):**
   ```env
   CHATBOT_PROVIDER=google
   GOOGLE_AI_API_KEY=sua_chave_aqui
   CHATBOT_MODEL=gemini-1.5-flash
   ```

---

### 3. Instalar Dependências (se necessário)

```bash
npm install
# ou
yarn install
```

---

### 4. Testar Localmente

```bash
npm run dev
# ou
yarn dev
```

Acesse http://localhost:3000 e clique no botão flutuante no canto inferior direito!

---

### 5. Deploy

Quando fizer deploy no Vercel, Netlify ou outra plataforma:

1. Vá nas configurações do projeto
2. Adicione as variáveis de ambiente:
   - `CHATBOT_PROVIDER`
   - `OPENAI_API_KEY` (ou a chave do provedor escolhido)
   - `CHATBOT_MODEL`

---

## 🎨 Personalização

### Editar as Respostas do Chatbot

Edite o arquivo `lib/chatbot-config.ts` para:
- Alterar o prompt do sistema
- Adicionar mais informações sobre o negócio
- Personalizar o tom das respostas

### Alterar a Aparência

O componente do chatbot está em `components/floating-chatbot.tsx`:
- Cores principais: `#D4AF37` (dourado) e `stone-900` (preto)
- Ajuste conforme sua identidade visual

---

## 💡 Dicas

1. **Comece com OpenAI (gpt-4o-mini)** - É a opção mais econômica e eficiente
2. **Monitore o uso** - Configure alertas de billing no painel do provedor
3. **Teste bem** - Faça várias perguntas antes de colocar em produção
4. **Fallback automático** - Se a API falhar, o chatbot exibe uma mensagem amigável com o WhatsApp

---

## 🔒 Segurança

⚠️ **IMPORTANTE:**
- NUNCA compartilhe suas chaves API publicamente
- NUNCA faça commit do arquivo `.env` no git
- O arquivo `.env` já está no `.gitignore`

---

## 📞 Suporte

Se tiver problemas:
1. Verifique se as variáveis de ambiente estão corretas
2. Confira os logs no console do navegador (F12)
3. Verifique se há créditos disponíveis na sua conta da API

---

## 🎯 Recursos do Chatbot

✅ Botão flutuante fixo no canto da tela
✅ Animação de "bounce" para chamar atenção
✅ Interface de chat moderna e responsiva
✅ Suporte a múltiplos provedores de IA
✅ Fallback automático em caso de erro
✅ Histórico de conversa durante a sessão
✅ Indicador de "digitando..."
✅ Design alinhado com a identidade visual do site

---

**Desenvolvido com ❤️ para o Cantinho da Luci**
