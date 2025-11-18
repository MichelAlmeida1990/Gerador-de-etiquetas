# 📤 Como Fazer Push Manual para o GitHub

O repositório está configurado localmente, mas o push automático está encontrando problemas de autenticação. Siga estes passos:

## ✅ Status Atual

- ✅ Git inicializado
- ✅ Todos os arquivos commitados
- ✅ Branch `main` configurada
- ✅ Remote origin configurado
- ⏳ Aguardando push para GitHub

## 🚀 Opção 1: Push via Terminal (Recomendado)

1. **Abra o terminal na pasta do projeto**

2. **Tente fazer o push:**
   ```bash
   git push -u origin main
   ```

3. **Se pedir autenticação:**
   - **Username:** Seu usuário do GitHub (MichelAlmeida1990)
   - **Password:** Use um **Personal Access Token** (não sua senha normal)
   
   **Como criar um Personal Access Token:**
   - Acesse: https://github.com/settings/tokens
   - Clique em "Generate new token" → "Generate new token (classic)"
   - Dê um nome (ex: "Smart Store")
   - Selecione o escopo `repo` (marcar todas as opções de repo)
   - Clique em "Generate token"
   - **COPIE O TOKEN** (você só verá uma vez!)
   - Use esse token como senha ao fazer push

## 🚀 Opção 2: Usar GitHub Desktop

1. Baixe o GitHub Desktop: https://desktop.github.com/
2. Faça login com sua conta GitHub
3. File → Add Local Repository
4. Selecione a pasta do projeto
5. Clique em "Publish repository"
6. Marque "Keep this code private" se quiser (opcional)
7. Clique em "Publish repository"

## 🚀 Opção 3: Usar VS Code

1. Abra o projeto no VS Code
2. Vá na aba "Source Control" (ícone de branch)
3. Clique nos três pontos (...) → "Push"
4. Se pedir autenticação, use o Personal Access Token

## 📋 Verificar Status

Para ver o que está pronto para push:
```bash
git status
git log --oneline
```

## ✅ Após o Push Funcionar

Depois que o código estiver no GitHub, você pode fazer deploy na Vercel:

1. Acesse: https://vercel.com
2. Faça login com GitHub
3. "Add New Project"
4. Selecione o repositório `Gerador-de-etiquetas`
5. Clique em "Deploy"

O arquivo `vercel.json` já está configurado!

## 🔧 Comandos Úteis

```bash
# Ver commits locais
git log --oneline

# Ver status
git status

# Ver remote configurado
git remote -v

# Tentar push novamente
git push -u origin main
```

