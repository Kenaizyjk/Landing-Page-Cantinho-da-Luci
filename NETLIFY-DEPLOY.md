# 🚀 Guia de Deploy no Netlify

## ⚠️ Problema Atual

O erro de deploy mostra:
```
Deploy directory 'opt/build/repo/.next' does not exist
publish: /opt/build/repo/opt/build/repo/.next
```

Isso acontece porque a configuração na **UI do Netlify** está duplicando o caminho.

---

## ✅ Solução

### Opção 1: Limpar Configuração na UI (Recomendado)

1. **Acesse o painel do Netlify:**
   - Vá em: https://app.netlify.com
   - Selecione seu site

2. **Limpe as configurações de build:**
   - Vá em: `Site Settings` → `Build & Deploy` → `Build Settings`
   - **Base directory:** deixe em branco
   - **Build command:** deixe em branco
   - **Publish directory:** deixe em branco
   - Clique em `Save`

3. **O arquivo `netlify.toml` será usado automaticamente:**
   - Já está configurado corretamente no repositório
   - Build command: `npm run build`
   - Plugin: `@netlify/plugin-nextjs` (cuida do publish directory)

4. **Faça um novo deploy:**
   - Vá em `Deploys` → `Trigger deploy` → `Deploy site`

---

### Opção 2: Configurar Manualmente na UI

Se preferir não usar o `netlify.toml`, configure manualmente:

1. **Site Settings → Build & Deploy → Build Settings:**
   - **Base directory:** (deixe em branco)
   - **Build command:** `npm run build`
   - **Publish directory:** (deixe em branco ou coloque `.next`)
   - **Functions directory:** (deixe em branco)

2. **Site Settings → Build & Deploy → Environment:**
   - Adicione: `NODE_VERSION = 20`

3. **Plugins:**
   - Certifique-se que `@netlify/plugin-nextjs` está instalado

---

## 🔧 Arquivo `netlify.toml`

O arquivo `netlify.toml` já está configurado no repositório:

```toml
[build]
  command = "npm run build"

[build.environment]
  NODE_VERSION = "20"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 📝 Notas Importantes

- ✅ **Não especifique** `publish directory` quando usar o plugin `@netlify/plugin-nextjs`
- ✅ O plugin cuida automaticamente do output do Next.js
- ✅ Node.js 20 é necessário para Next.js 16
- ✅ Certifique-se de que não há configurações conflitantes na UI

---

## 🎯 Resultado Esperado

Após fazer o deploy com a configuração correta, você verá:

```
✅ Build command from netlify.toml: npm run build
✅ Using @netlify/plugin-nextjs
✅ Build successful
✅ Site deployed
```

---

## 🆘 Se o Problema Persistir

1. **Delete e recrie o site no Netlify:**
   - Às vezes configurações antigas ficam em cache
   - Delete o site e conecte novamente o repositório

2. **Verifique os logs de build:**
   - Procure por erros de TypeScript ou dependências
   - O `next.config.mjs` tem `ignoreBuildErrors: true`, mas isso pode esconder problemas

3. **Teste localmente:**
   ```bash
   npm install
   npm run build
   npm start
   ```

---

**Desenvolvido para o Cantinho da Luci** ❤️
