# 📝 Instruções para Push no GitHub

## ⚠️ Erro 500 do GitHub

Se você está recebendo erro 500 ao fazer push, siga estes passos:

### 1. Verificar se o repositório existe no GitHub

1. Acesse: https://github.com/MichelAlmeida1990
2. Verifique se o repositório `Gerador-de-etiquetas` existe
3. Se não existir, crie-o:
   - Clique em "New repository"
   - Nome: `Gerador-de-etiquetas`
   - Deixe como **público** ou **privado** (sua escolha)
   - **NÃO** inicialize com README, .gitignore ou license
   - Clique em "Create repository"

### 2. Tentar push novamente

```bash
git push -u origin main
```

### 3. Se ainda der erro, tente com autenticação

**Opção A: Usar Personal Access Token**
1. Vá em GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Gere um novo token com permissão `repo`
3. Use o token como senha ao fazer push

**Opção B: Usar SSH**
```bash
# Remover o remote atual
git remote remove origin

# Adicionar com SSH
git remote add origin git@github.com:MichelAlmeida1990/Gerador-de-etiquetas.git

# Tentar push
git push -u origin main
```

### 4. Verificar autenticação

Se estiver usando HTTPS, pode ser necessário configurar credenciais:
```bash
git config --global credential.helper store
```

## ✅ Status Atual

- ✅ Git inicializado
- ✅ Branch renomeada para `main`
- ✅ Remote adicionado
- ✅ Commits locais prontos
- ⏳ Aguardando push para GitHub

## 🚀 Próximos Passos Após Push

1. **Deploy na Vercel:**
   - Acesse https://vercel.com
   - Importe o repositório do GitHub
   - Deploy automático!

2. **Ou use Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel login
   vercel --prod
   ```

## 📋 Comandos Úteis

```bash
# Ver status
git status

# Ver commits
git log --oneline

# Ver remote configurado
git remote -v

# Tentar push novamente
git push -u origin main
```

