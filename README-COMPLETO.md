# 🦋 Projeto Borboleta - Estrutura JSX Final

## ✅ Migração Completa - 100% JSX com Estilos Inline

---

## 📂 Estrutura de Arquivos

```
projeto-borboleta/
│
├── public/                          # Imagens e assets estáticos
│   ├── eventuslogobg.png
│   ├── localizacaobg.png
│   ├── perfilbg.png
│   ├── facebookbg.png
│   ├── instabg.png
│   ├── xbg.png
│   └── tiktokbg.png
│
├── src/
│   │
│   ├── App.jsx/                     # 🎯 COMPONENTE PRINCIPAL
│   │   └── App.jsx                  # • Aplicação centralizada
│   │                                # • Dados dos eventos
│   │                                # • Estilos da página
│   │                                # • Lógica de renderização
│   │
│   ├── Components.jsx/              # 📦 COMPONENTES REUTILIZÁVEIS
│   │   ├── Header.jsx               # • Cabeçalho (estilos inline)
│   │   ├── EventCard.jsx            # • Card de evento (estilos inline)
│   │   ├── Footer.jsx               # • Rodapé (estilos inline)
│   │   └── index.jsx                # • Barrel exports
│   │
│   └── app/                         # Next.js App Router (mínimo)
│       ├── layout.js                # • Layout global (estilos inline)
│       ├── page.js                  # • Página que chama App.jsx
│       └── favicon.ico              # • Ícone do site
│
├── site/                            # Versão HTML antiga (referência)
│   ├── index.html
│   ├── style.css
│   └── imgs/
│
├── package.json                     # Dependências do projeto
├── next.config.mjs                  # Configuração Next.js
├── jsconfig.json                    # Configuração JavaScript
└── eslint.config.mjs                # Configuração ESLint
```

---

## 📋 Inventário de Arquivos

### ✅ Arquivos JSX Criados (7 arquivos)

1. **src/App.jsx/App.jsx**
   - Componente principal da aplicação
   - Contém array de eventos
   - Todos os estilos da página (inline)
   - Renderiza Header, Cards, Footer

2. **src/Components.jsx/Header.jsx**
   - Componente do cabeçalho
   - Estilos inline
   - Logo, navegação, perfil

3. **src/Components.jsx/EventCard.jsx**
   - Componente de card reutilizável
   - Estilos inline com hover effects
   - Props: title, description, imageUrl, location, date

4. **src/Components.jsx/Footer.jsx**
   - Componente do rodapé
   - Estilos inline com hover em links
   - Logo, links, redes sociais, contatos

5. **src/Components.jsx/index.jsx**
   - Barrel export dos componentes
   - Facilita importações

6. **src/app/layout.js**
   - Layout global do Next.js
   - Estilos globais inline (no body)
   - Metadata da aplicação

7. **src/app/page.js**
   - Página inicial do Next.js
   - Importa e renderiza App.jsx

---

### ❌ Arquivos Removidos

**CSS (0 arquivos CSS no projeto):**
- ❌ src/app/globals.css - REMOVIDO
- ❌ src/app/page.module.css - REMOVIDO
- ❌ src/components/Header.module.css - REMOVIDO
- ❌ src/components/EventCard.module.css - REMOVIDO
- ❌ src/components/Footer.module.css - REMOVIDO

**JS/Pastas antigas:**
- ❌ src/components/ - PASTA REMOVIDA
- ❌ src/data/events.js - REMOVIDO (dados agora em App.jsx)

---

## 🎨 Sistema de Estilos

### Todos os estilos são objetos JavaScript inline:

```jsx
// Exemplo de estilos inline
const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  background: '#110031',
  width: '100%',
  height: '90px',
  color: '#f4f6ec',
};

return <header style={headerStyle}>...</header>
```

### Hover Effects com JavaScript:

```jsx
<Link 
  href="#footer" 
  style={navStyle}
  onMouseEnter={(e) => e.currentTarget.style.color = '#ffcc00'}
  onMouseLeave={(e) => e.currentTarget.style.color = '#f4f6ec'}
>
  Contatos
</Link>
```

---

## 🔄 Fluxo de Renderização

```
1. Next.js inicia
   ↓
2. src/app/layout.js (carrega metadata e estilos globais)
   ↓
3. src/app/page.js (importa App.jsx)
   ↓
4. src/App.jsx/App.jsx (componente principal)
   ↓
   ├── Importa: Header, EventCard, Footer
   ├── Define: array de eventos
   ├── Define: estilos inline
   ↓
5. Renderiza:
   ├── <Header /> (com estilos inline)
   ├── <main>
   │   ├── <EventCard /> × 4 (com estilos inline)
   │   └── (mapeado do array events)
   └── <Footer /> (com estilos inline)
```

---

## 📊 Dados dos Eventos

Os dados agora estão **dentro** do App.jsx:

```jsx
// src/App.jsx/App.jsx

const events = [
  {
    id: 1,
    title: "Oktoberfesta de Moema",
    description: "...",
    imageUrl: "https://...",
    location: "Praça Ns. Aparecida de Moema, São Paulo - SP",
    date: "04 out - 2025 • 10:30 às 22:30"
  },
  // ... mais 3 eventos
];
```

---

## 🎯 Como Usar

### Adicionar Novo Evento:

1. Abra `src/App.jsx/App.jsx`
2. Localize o array `events`
3. Adicione um novo objeto:

```jsx
{
  id: 5,
  title: "Nome do Novo Evento",
  description: "Descrição completa do evento...",
  imageUrl: "https://url-da-imagem.jpg",
  location: "Local do evento, Cidade - Estado",
  date: "DD mmm - YYYY • HH:MM às HH:MM"
}
```

4. Salve → O card aparece automaticamente! ✨

---

### Modificar Estilos:

**Mudar cor do header:**
```jsx
// src/Components.jsx/Header.jsx
const headerStyle = {
  background: '#110031',  // ← Mude aqui
  // ...
};
```

**Mudar tamanho dos cards:**
```jsx
// src/Components.jsx/EventCard.jsx
const cardStyle = {
  padding: '20px',      // ← Ajuste o padding
  borderRadius: '8px',  // ← Ajuste as bordas
  // ...
};
```

**Mudar cores do footer:**
```jsx
// src/Components.jsx/Footer.jsx
const footerStyle = {
  backgroundColor: '#110031',  // ← Cor de fundo
  color: '#f4f6ec',           // ← Cor do texto
  // ...
};
```

---

## 🚀 Comandos

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
# ou
node node_modules/next/dist/bin/next dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

**Acesse:** http://localhost:3000

---

## 📱 Responsividade

A responsividade é tratada via JavaScript no App.jsx:

```jsx
const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;

const responsiveMainStyle = isMobile ? {
  ...mainStyle,
  gridTemplateColumns: '1fr',
  padding: '20px',
} : mainStyle;
```

**Desktop (>1024px):**
- Grid de 2 colunas
- Padding 40px

**Mobile (≤1024px):**
- Grid de 1 coluna
- Padding 20px

---

## 🎨 Paleta de Cores

```
Primárias:
- Roxo Escuro:  #110031  (header, footer)
- Amarelo:      #ffcc00  (destaques, hover)
- Branco Suave: #f4f6ec  (background)

Secundárias:
- Branco:       #ffffff  (cards)
- Preto:        #333333  (texto)
```

---

## ✨ Características Técnicas

### ✅ Sem CSS Externo
- Zero arquivos .css
- Todos os estilos são objetos JavaScript
- Estilos colocalizados com componentes

### ✅ Componentes JSX Puros
- Todos os arquivos usam extensão .jsx
- Componentes funcionais React
- Props tipadas via desestruturação

### ✅ Estilos Inline
- Estilos definidos como objetos
- Hover effects via JavaScript
- Estilos dinâmicos possíveis

### ✅ Estrutura Centralizada
- App.jsx/ → aplicação principal
- Components.jsx/ → todos os componentes
- Fácil navegação e manutenção

### ✅ Next.js Integration
- Otimização automática de imagens
- Server-Side Rendering
- Roteamento otimizado
- Fast Refresh

---

## 📈 Métricas do Projeto

| Métrica | Valor |
|---------|-------|
| **Arquivos JSX** | 7 |
| **Arquivos CSS** | 0 (ZERO) |
| **Componentes** | 3 (Header, EventCard, Footer) |
| **Linhas de Código** | ~350 (total JSX) |
| **Eventos Cadastrados** | 4 |
| **Pastas Principais** | 2 (App.jsx, Components.jsx) |
| **Dependências** | React, Next.js |

---

## 🎓 Conceitos Aplicados

1. **Componentização**
   - Código dividido em componentes reutilizáveis
   - Separação de responsabilidades

2. **Estilos Inline**
   - CSS-in-JS nativo do React
   - Estilos colocalizados com lógica

3. **Props**
   - Passagem de dados via props
   - Componentes parametrizados

4. **Map & Render**
   - Renderização dinâmica de lista
   - Array.map() para criar múltiplos cards

5. **Event Handlers**
   - Hover effects com onMouseEnter/Leave
   - Manipulação de estilos via JavaScript

6. **Next.js**
   - Framework React com otimizações
   - Image optimization
   - Roteamento automático

---

## 🎉 Resultado Final

✅ **Projeto 100% JSX**  
✅ **Zero arquivos CSS**  
✅ **Estilos inline em JavaScript**  
✅ **Estrutura centralizada em pastas JSX**  
✅ **Componentes reutilizáveis e modulares**  
✅ **Fácil manutenção e escalabilidade**  
✅ **Totalmente funcional e responsivo**  

---

## 📚 Documentação Adicional

- **ESTRUTURA.md** - Documentação da estrutura anterior (React com CSS Modules)
- **TRANSFORMACAO.md** - Explicação da primeira migração (HTML → React)
- **ESTRUTURA-JSX.md** - Este documento (migração para JSX puro)

---

## 🔗 Próximos Passos Sugeridos

1. **TypeScript** - Adicionar tipagem estática
2. **Styled Components** - Migrar para CSS-in-JS mais robusto (opcional)
3. **Context API** - Gerenciamento de estado global
4. **API Integration** - Buscar eventos de APIs externas
5. **Rotas dinâmicas** - Páginas individuais para cada evento
6. **Autenticação** - Sistema de login/cadastro
7. **Testes** - Jest + React Testing Library

---

**Última atualização:** Novembro 2025  
**Versão:** 2.0 (Estrutura JSX Pura)
