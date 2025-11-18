# 📁 Estrutura de Exemplo do Projeto

## Estrutura de Arquivos Sugerida

```
codigo-de-barras/
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── BarcodeGenerator.jsx
│   │   │   ├── BarcodePreview.jsx
│   │   │   ├── TypeSelector.jsx
│   │   │   └── ExportButtons.jsx
│   │   ├── utils/
│   │   │   ├── barcodeValidator.js
│   │   │   └── exportUtils.js
│   │   ├── styles/
│   │   │   └── App.css
│   │   └── App.jsx
│   ├── package.json
│   └── README.md
│
├── ROADMAP.md
├── EXEMPLO_ESTRUTURA.md
└── README.md
```

## Exemplo de Código Básico

### package.json
```json
{
  "name": "gerador-codigo-barras",
  "version": "1.0.0",
  "description": "Gerador de códigos de barras",
  "dependencies": {
    "jsbarcode": "^3.11.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "html2canvas": "^1.4.1"
  },
  "devDependencies": {
    "vite": "^4.4.0"
  }
}
```

### Exemplo de Componente React
```jsx
import React, { useState } from 'react';
import JsBarcode from 'jsbarcode';

function BarcodeGenerator() {
  const [value, setValue] = useState('');
  const [type, setType] = useState('ean13');
  
  const generateBarcode = () => {
    JsBarcode("#barcode", value, {
      format: type,
      width: 2,
      height: 100,
      displayValue: true
    });
  };
  
  return (
    <div>
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Digite o código"
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="ean13">EAN-13</option>
        <option value="code128">Code 128</option>
        <option value="code39">Code 39</option>
      </select>
      <button onClick={generateBarcode}>Gerar</button>
      <svg id="barcode"></svg>
    </div>
  );
}
```

## Tipos de Códigos de Barras Suportados pelo JsBarcode

- **EAN-13** - Padrão brasileiro (13 dígitos)
- **EAN-8** - Versão curta (8 dígitos)
- **UPC-A** - Padrão americano
- **UPC-E** - Versão compacta
- **Code 128** - Alfanumérico
- **Code 39** - Alfanumérico simples
- **Code 93** - Versão melhorada do Code 39
- **ITF-14** - Para embalagens
- **MSI** - Para inventário
- **Pharmacode** - Para farmácias
- **Codabar** - Para bibliotecas
- **QR Code** - Código 2D (requer biblioteca adicional)

## Validações Importantes

### EAN-13
- Deve ter exatamente 13 dígitos
- O último dígito é um dígito verificador
- Primeiros 3 dígitos indicam o país (789-790 = Brasil)

### Code 128
- Pode conter letras, números e alguns símbolos
- Mais flexível que EAN

### Code 39
- Pode conter letras maiúsculas, números e alguns símbolos
- Não diferencia maiúsculas/minúsculas

