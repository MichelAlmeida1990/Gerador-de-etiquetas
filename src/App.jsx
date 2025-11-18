import React, { useState, useEffect, useRef } from 'react'
import JsBarcode from 'jsbarcode'
import html2canvas from 'html2canvas'
import './App.css'

function App() {
  const [nomeProduto, setNomeProduto] = useState('')
  const [preco, setPreco] = useState('')
  const [codigoBarras, setCodigoBarras] = useState('')
  const [larguraEtiqueta, setLarguraEtiqueta] = useState(80) // mm
  const barcodeRef = useRef(null)
  const etiquetaRef = useRef(null)

  // Gerar código de barras quando o código mudar
  useEffect(() => {
    if (codigoBarras && barcodeRef.current) {
      try {
        JsBarcode(barcodeRef.current, codigoBarras, {
          format: 'EAN13',
          width: 2,
          height: 60,
          displayValue: true,
          fontSize: 14,
          margin: 0,
          background: '#ffffff',
          lineColor: '#000000'
        })
      } catch (error) {
        console.error('Erro ao gerar código de barras:', error)
      }
    }
  }, [codigoBarras])

  // Validar e formatar código EAN-13
  const validarEAN13 = (codigo) => {
    // Remove caracteres não numéricos
    const numeros = codigo.replace(/\D/g, '')
    
    // EAN-13 deve ter 13 dígitos
    if (numeros.length === 13) {
      return numeros
    } else if (numeros.length < 13) {
      // Preenche com zeros à esquerda se necessário
      return numeros.padStart(13, '0')
    } else {
      // Se tiver mais de 13, pega os primeiros 13
      return numeros.substring(0, 13)
    }
  }

  const handleCodigoChange = (e) => {
    const valor = e.target.value
    const codigoFormatado = validarEAN13(valor)
    setCodigoBarras(codigoFormatado)
  }

  // Formatar preço para exibição
  const formatarPreco = (valor) => {
    if (!valor) return 'R$ 0,00'
    const numero = parseFloat(valor.replace(',', '.')) || 0
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(numero)
  }

  // Gerar código aleatório EAN-13 para teste
  const gerarCodigoAleatorio = () => {
    let codigo = '789' // Código do Brasil
    for (let i = 0; i < 9; i++) {
      codigo += Math.floor(Math.random() * 10)
    }
    // Calcular dígito verificador
    let soma = 0
    for (let i = 0; i < 12; i++) {
      const digito = parseInt(codigo[i])
      soma += digito * (i % 2 === 0 ? 1 : 3)
    }
    const digitoVerificador = (10 - (soma % 10)) % 10
    setCodigoBarras(codigo + digitoVerificador)
  }

  // Download da etiqueta como imagem
  const downloadEtiqueta = async () => {
    if (!etiquetaRef.current) return

    try {
      const canvas = await html2canvas(etiquetaRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false
      })
      
      const link = document.createElement('a')
      link.download = `etiqueta-${nomeProduto || 'produto'}-${Date.now()}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (error) {
      console.error('Erro ao exportar etiqueta:', error)
      alert('Erro ao exportar etiqueta. Tente novamente.')
    }
  }

  // Imprimir etiqueta
  const imprimirEtiqueta = () => {
    const janela = window.open('', '_blank')
    const conteudo = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Etiqueta - ${nomeProduto || 'Produto'}</title>
          <style>
            @media print {
              @page {
                size: ${larguraEtiqueta}mm auto;
                margin: 0;
              }
              body {
                margin: 0;
                padding: 0;
              }
            }
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 10px;
            }
            ${document.querySelector('#etiqueta-styles')?.innerHTML || ''}
          </style>
        </head>
        <body>
          ${etiquetaRef.current?.outerHTML || ''}
        </body>
      </html>
    `
    janela.document.write(conteudo)
    janela.document.close()
    janela.onload = () => {
      janela.print()
    }
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>🏷️ Smart Store</h1>
          <p>Crie etiquetas de produtos com código de barras EAN-13</p>
        </header>

        <div className="content">
          <div className="formulario">
            <h2>Informações do Produto</h2>
            
            <div className="campo">
              <label htmlFor="nome">Nome do Produto *</label>
              <input
                id="nome"
                type="text"
                value={nomeProduto}
                onChange={(e) => setNomeProduto(e.target.value)}
                placeholder="Ex: Arroz Tipo 1 - 5kg"
                maxLength={40}
              />
            </div>

            <div className="campo">
              <label htmlFor="preco">Preço (R$) *</label>
              <input
                id="preco"
                type="text"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                placeholder="Ex: 25,90"
              />
            </div>

            <div className="campo">
              <label htmlFor="codigo">Código de Barras EAN-13 *</label>
              <div className="codigo-input-group">
                <input
                  id="codigo"
                  type="text"
                  value={codigoBarras}
                  onChange={handleCodigoChange}
                  placeholder="7891234567890"
                  maxLength={13}
                />
                <button 
                  type="button" 
                  onClick={gerarCodigoAleatorio}
                  className="btn-gerar"
                  title="Gerar código aleatório"
                >
                  🎲 Gerar
                </button>
              </div>
              <small>Digite 13 dígitos ou use o botão para gerar automaticamente</small>
            </div>

            <div className="campo">
              <label htmlFor="largura">Largura da Etiqueta (mm)</label>
              <input
                id="largura"
                type="number"
                value={larguraEtiqueta}
                onChange={(e) => setLarguraEtiqueta(parseInt(e.target.value) || 80)}
                min="50"
                max="150"
              />
            </div>

            <div className="acoes">
              <button 
                onClick={downloadEtiqueta}
                disabled={!nomeProduto || !preco || !codigoBarras}
                className="btn btn-download"
              >
                📥 Download PNG
              </button>
              <button 
                onClick={imprimirEtiqueta}
                disabled={!nomeProduto || !preco || !codigoBarras}
                className="btn btn-print"
              >
                🖨️ Imprimir
              </button>
            </div>
          </div>

          <div className="preview">
            <h2>Preview da Etiqueta</h2>
            <div 
              ref={etiquetaRef}
              className="etiqueta"
              style={{ width: `${larguraEtiqueta}mm` }}
            >
              <div className="etiqueta-header">
                <div className="etiqueta-nome">
                  {nomeProduto || 'Nome do Produto'}
                </div>
                <div className="etiqueta-preco">
                  {formatarPreco(preco)}
                </div>
              </div>
              
              <div className="etiqueta-barcode">
                {codigoBarras ? (
                  <svg ref={barcodeRef}></svg>
                ) : (
                  <div className="barcode-placeholder">
                    Digite um código de barras para visualizar
                  </div>
                )}
              </div>
              
              <div className="etiqueta-footer">
                <div className="etiqueta-codigo-texto">
                  {codigoBarras || '0000000000000'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style id="etiqueta-styles">
        {`
          .etiqueta {
            width: ${larguraEtiqueta}mm;
            background: white;
            border: 2px solid #000;
            padding: 8px;
            font-family: Arial, sans-serif;
          }
          .etiqueta-header {
            text-align: center;
            margin-bottom: 8px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 8px;
          }
          .etiqueta-nome {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 4px;
            word-wrap: break-word;
          }
          .etiqueta-preco {
            font-size: 20px;
            font-weight: bold;
            color: #d32f2f;
          }
          .etiqueta-barcode {
            text-align: center;
            margin: 8px 0;
          }
          .etiqueta-footer {
            text-align: center;
            margin-top: 4px;
          }
          .etiqueta-codigo-texto {
            font-size: 12px;
            letter-spacing: 1px;
          }
        `}
      </style>
    </div>
  )
}

export default App

