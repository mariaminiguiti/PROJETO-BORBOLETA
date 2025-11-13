# Projeto Borboleta - Estrutura React/Next.js

## 📁 Estrutura do Projeto

```
projeto-borboleta/
├── public/                    # Arquivos estáticos (imagens, ícones)
│   ├── eventuslogobg.png
│   ├── localizacaobg.png
│   ├── perfilbg.png
│   └── ...
├── src/
│   ├── app/                   # Rotas do Next.js (App Router)
│   │   ├── layout.js         # Layout principal da aplicação
│   │   ├── page.js           # Página inicial (home)
│   │   ├── page.module.css   # Estilos da página inicial
│   │   └── globals.css       # Estilos globais
│   ├── components/            # Componentes React reutilizáveis
│   │   ├── Header.js         # Componente do cabeçalho
│   │   ├── Header.module.css
│   │   ├── EventCard.js      # Componente de card de evento
│   │   ├── EventCard.module.css
│   │   ├── Footer.js         # Componente do rodapé
│   │   └── Footer.module.css
│   └── data/                  # Dados da aplicação
│       └── events.js         # Lista de eventos
├── site/                      # Versão HTML estática (antiga)
│   ├── index.html
│   ├── style.css
│   └── ...
├── package.json
├── next.config.mjs
└── README.md
```

## 🎯 Principais Mudanças

### 1. **Componentização**
O HTML monolítico foi dividido em componentes React reutilizáveis:

- **Header**: Cabeçalho com navegação e logo
- **EventCard**: Card individual para cada evento (componente reutilizável)
- **Footer**: Rodapé com links e informações de contato

### 2. **Separação de Dados**
Os dados dos eventos foram extraídos para um arquivo separado (`src/data/events.js`), facilitando:
- Manutenção e atualização dos eventos
- Possível integração futura com API/banco de dados
- Melhor organização do código

### 3. **CSS Modular**
Cada componente possui seu próprio arquivo CSS módulo, evitando:
- Conflitos de estilo
- Especificidade CSS desnecessária
- Facilitando manutenção

### 4. **Next.js & React**
Aproveitando os benefícios do framework:
- Otimização automática de imagens com `next/image`
- Roteamento simplificado
- Server-Side Rendering (SSR)
- Performance otimizada

## 🚀 Como Usar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:3000

### Build para Produção
```bash
npm run build
npm start
```

## 📝 Como Adicionar um Novo Evento

Edite o arquivo `src/data/events.js` e adicione um novo objeto:

```javascript
{
  id: 5,
  title: "Nome do Evento",
  description: "Descrição do evento...",
  imageUrl: "URL da imagem",
  location: "Local do evento",
  date: "Data e horário"
}
```

O card será automaticamente renderizado na página inicial!

## 🎨 Personalização

### Cores
Edite as cores principais em `src/app/globals.css` ou nos arquivos de módulo CSS.

### Layout
O grid de eventos pode ser ajustado em `src/app/page.module.css`:
- Desktop: 2 colunas
- Tablet/Mobile: 1 coluna (responsivo)

## 📦 Componentes Disponíveis

### EventCard
```jsx
<EventCard
  title="Título do Evento"
  description="Descrição..."
  imageUrl="https://..."
  location="Local"
  date="Data"
/>
```

### Header
```jsx
<Header />
```

### Footer
```jsx
<Footer />
```

## 🔄 Migração do HTML Antigo

A versão HTML original está preservada na pasta `site/` para referência. A nova versão React está em `src/`.

## 🌟 Próximos Passos Sugeridos

1. **Adicionar sistema de filtros** (por data, local, tipo de evento)
2. **Integrar com API externa** (Sympla, Eventbrite, etc.)
3. **Adicionar páginas de detalhes** de cada evento
4. **Implementar sistema de login** (já tem link no header)
5. **Adicionar favoritos** e sistema de notificações
6. **SEO otimizado** para cada evento

## 📱 Responsividade

O projeto é totalmente responsivo:
- Mobile: Cards em coluna única
- Tablet: Layout adaptado
- Desktop: Grid de 2 colunas

## 🛠️ Tecnologias

- **React 19.2.0**
- **Next.js 16.0.2**
- **CSS Modules**
- **JavaScript ES6+**
