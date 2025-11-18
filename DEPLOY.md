# 🚀 Guia de Deploy - Smart Store

## Deploy na Vercel

### Opção 1: Deploy via GitHub (Recomendado)

1. **Certifique-se de que o código está no GitHub:**
   ```bash
   git push -u origin main
   ```

2. **Acesse a Vercel:**
   - Vá para https://vercel.com
   - Faça login com sua conta GitHub

3. **Importe o projeto:**
   - Clique em "Add New Project"
   - Selecione o repositório `Gerador-de-etiquetas`
   - A Vercel detectará automaticamente que é um projeto Vite

4. **Configure o projeto:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build` (já configurado)
   - **Output Directory:** `dist` (já configurado)
   - **Install Command:** `npm install` (já configurado)

5. **Deploy:**
   - Clique em "Deploy"
   - Aguarde o build completar
   - Seu site estará online!

### Opção 2: Deploy via Vercel CLI

1. **Instale a Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Faça login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Para produção:**
   ```bash
   vercel --prod
   ```

## Configuração Automática

O arquivo `vercel.json` já está configurado com:
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ✅ Framework: Vite
- ✅ Rewrites para SPA (Single Page Application)

O arquivo `.nvmrc` garante que o Node.js versão 18+ seja usado no build.

## Variáveis de Ambiente

Atualmente não há variáveis de ambiente necessárias. Se precisar adicionar no futuro, configure na Vercel:
- Settings → Environment Variables

## Domínio Personalizado

Para adicionar um domínio personalizado:
1. Vá em Settings → Domains
2. Adicione seu domínio
3. Configure os registros DNS conforme instruções

## Atualizações Automáticas

Após o primeiro deploy, toda vez que você fizer push para a branch `main`, a Vercel fará deploy automático!

## Troubleshooting

### Erro no build
- Verifique se todas as dependências estão no `package.json`
- Certifique-se de que o Node.js versão 18+ está sendo usado

### Erro 404 nas rotas
- O `vercel.json` já está configurado com rewrites para SPA
- Se persistir, verifique se o arquivo está na raiz do projeto

### Problemas com GitHub
- Se o push falhar, tente novamente após alguns minutos
- Verifique se o repositório existe no GitHub
- Certifique-se de ter permissões de escrita no repositório

