# 🏷️ Smart Store - Gerador de Etiquetas

Gerador de etiquetas de produtos no padrão brasileiro, com código de barras EAN-13, nome do produto e preço formatado.

## ✨ Funcionalidades

- ✅ Geração de código de barras EAN-13 (padrão brasileiro)
- ✅ Etiqueta com nome do produto
- ✅ Preço formatado em Real (R$)
- ✅ Preview em tempo real
- ✅ Download da etiqueta como imagem PNG
- ✅ Impressão direta
- ✅ Geração automática de código EAN-13 válido
- ✅ Validação e formatação automática
- ✅ Ajuste de largura da etiqueta

## 🚀 Como Usar

### Instalação

```bash
npm install
```

### Executar em desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para produção

```bash
npm run build
```

## 📋 Como Funciona

1. **Preencha os dados:**
   - Nome do produto
   - Preço (formato: 25,90 ou 25.90)
   - Código de barras EAN-13 (13 dígitos) ou clique em "Gerar" para criar um automaticamente

2. **Visualize:**
   - A etiqueta é gerada automaticamente no preview

3. **Exporte:**
   - Clique em "Download PNG" para salvar a etiqueta
   - Clique em "Imprimir" para imprimir diretamente

## 🎨 Características da Etiqueta

A etiqueta segue o padrão brasileiro com:
- Nome do produto em destaque
- Preço em Real (R$) em vermelho
- Código de barras EAN-13 legível
- Número do código abaixo do código de barras
- Layout limpo e profissional

## 📦 Tecnologias Utilizadas

- **React** - Framework JavaScript
- **Vite** - Build tool rápida
- **JsBarcode** - Geração de códigos de barras
- **html2canvas** - Exportação para imagem

## 📝 Notas

- O código EAN-13 deve ter 13 dígitos
- Códigos brasileiros geralmente começam com 789 ou 790
- O dígito verificador é calculado automaticamente ao gerar código aleatório
- A largura padrão da etiqueta é 80mm (padrão brasileiro)

## 🔧 Personalização

Você pode ajustar:
- Largura da etiqueta (50mm a 150mm)
- Cores e estilos no arquivo `src/App.css`
- Tamanho da fonte e espaçamentos

## 📄 Licença

Este projeto é open source e está disponível para uso livre.

