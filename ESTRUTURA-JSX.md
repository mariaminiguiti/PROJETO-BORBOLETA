# 🎨 Nova Estrutura JSX - Projeto Borboleta

## ✅ Migração Completa para JSX com Estilos Inline

### 📁 Estrutura Final

```
src/
├── App.jsx/                    # 🎯 Componente principal centralizado
│   └── App.jsx                 # App principal com todos os estilos inline
│
├── Components.jsx/             # 📦 Todos os componentes reutilizáveis
│   ├── Header.jsx             # Cabeçalho (estilos inline)
│   ├── EventCard.jsx          # Card de evento (estilos inline)
│   ├── Footer.jsx             # Rodapé (estilos inline)
│   └── index.jsx              # Barrel export dos componentes
│
└── app/                        # Next.js routing (mínimo necessário)
    ├── layout.js              # Layout global (estilos inline)
    ├── page.js                # Página que importa App.jsx
    └── favicon.ico
```

---

## 🎯 O Que Foi Feito

### ✅ 1. Estrutura Centralizada em Pastas JSX
- **App.jsx/** - Pasta contendo o componente principal
- **Components.jsx/** - Pasta contendo todos os componentes

### ✅ 2. Removidos TODOS os arquivos CSS
- ❌ `globals.css` - REMOVIDO
- ❌ `page.module.css` - REMOVIDO
- ❌ `Header.module.css` - REMOVIDO
- ❌ `EventCard.module.css` - REMOVIDO
- ❌ `Footer.module.css` - REMOVIDO

### ✅ 3. Removidos arquivos .js antigos
- ❌ Pasta `components/` - REMOVIDA
- ❌ Pasta `data/` - REMOVIDA
- ❌ Arquivos `.module.css` - TODOS REMOVIDOS

### ✅ 4. Estilos Inline em JSX
Todos os estilos agora são objetos JavaScript dentro dos componentes:

```jsx
const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  background: '#110031',
  color: '#f4f6ec',
};

return <header style={headerStyle}>...</header>
```

---

## 📦 Componentes JSX

### 1️⃣ **App.jsx/App.jsx** (Principal)

Este é o arquivo **CENTRAL** do projeto. Contém:
- ✅ Importação de todos os componentes
- ✅ Dados dos eventos (array dentro do componente)
- ✅ Todos os estilos da página (inline)
- ✅ Lógica de renderização

```jsx
import { Header, EventCard, Footer } from '@/Components.jsx';

const events = [ /* dados aqui */ ];

export default function App() {
  const pageStyle = { /* estilos */ };
  // ... mais estilos
  
  return (
    <div style={pageStyle}>
      <Header />
      <main>
        {events.map(event => <EventCard {...event} />)}
      </main>
      <Footer />
    </div>
  );
}
```

---

### 2️⃣ **Components.jsx/Header.jsx**

Cabeçalho com:
- ✅ Logo
- ✅ Localização
- ✅ Links de navegação
- ✅ **Estilos inline** (objetos JavaScript)

```jsx
export default function Header() {
  const headerStyle = {
    display: 'flex',
    background: '#110031',
    // ... todos os estilos aqui
  };
  
  return <header style={headerStyle}>...</header>
}
```

---

### 3️⃣ **Components.jsx/EventCard.jsx**

Card de evento com:
- ✅ Props: title, description, imageUrl, location, date
- ✅ Estilos inline
- ✅ Efeitos hover via JavaScript (onMouseEnter/Leave)

```jsx
export default function EventCard({ title, description, imageUrl, location, date }) {
  const cardStyle = {
    background: 'white',
    borderRadius: '8px',
    // ... estilos
  };
  
  return (
    <section 
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
    >
      {/* conteúdo */}
    </section>
  );
}
```

---

### 4️⃣ **Components.jsx/Footer.jsx**

Rodapé com:
- ✅ Logo
- ✅ Links externos
- ✅ Redes sociais
- ✅ Informações de contato
- ✅ **Hover effects inline**

---

### 5️⃣ **Components.jsx/index.jsx**

Barrel export para facilitar importações:

```jsx
export { default as Header } from './Header.jsx';
export { default as EventCard } from './EventCard.jsx';
export { default as Footer } from './Footer.jsx';
```

---

## 🔧 Como Funciona Agora

### Fluxo de Importação:

```
page.js (Next.js)
    ↓
App.jsx (Componente principal)
    ↓
Components.jsx/index.jsx
    ↓
├── Header.jsx
├── EventCard.jsx
└── Footer.jsx
```

### Estrutura de Estilos:

**ANTES (CSS separado):**
```jsx
import styles from './Header.module.css';
<header className={styles.header}>
```

**AGORA (Inline JSX):**
```jsx
const headerStyle = { background: '#110031' };
<header style={headerStyle}>
```

---

## ✨ Vantagens da Nova Estrutura

### 1. **Sem Dependência de CSS**
- ✅ Não precisa de arquivos CSS externos
- ✅ Estilos colocados junto com o componente
- ✅ Mais fácil ver o que cada estilo faz

### 2. **Tudo Centralizado**
- ✅ `App.jsx/` - Todo o código da aplicação
- ✅ `Components.jsx/` - Todos os componentes
- ✅ Fácil de encontrar qualquer arquivo

### 3. **Estilos Dinâmicos**
- ✅ Estilos podem usar variáveis JavaScript
- ✅ Estilos condicionais mais fáceis
- ✅ Hover effects com JavaScript

### 4. **Mais Portável**
- ✅ Cada componente é autocontido
- ✅ Copiar um arquivo = copiar componente + estilos
- ✅ Sem dependências entre arquivos CSS

---

## 🎨 Como Adicionar Novos Eventos

Edite **App.jsx/App.jsx** e adicione no array `events`:

```jsx
const events = [
  // eventos existentes...
  {
    id: 5,
    title: "Novo Evento",
    description: "Descrição completa...",
    imageUrl: "https://...",
    location: "Local do evento",
    date: "Data e horário"
  }
];
```

**Pronto!** O card aparece automaticamente.

---

## 🎨 Como Modificar Estilos

### Exemplo: Mudar cor do header

Abra `Components.jsx/Header.jsx`:

```jsx
const headerStyle = {
  background: '#110031',  // ← Mude esta cor
  // ...
};
```

### Exemplo: Mudar tamanho dos cards

Abra `Components.jsx/EventCard.jsx`:

```jsx
const cardStyle = {
  padding: '20px',  // ← Aumente o padding
  borderRadius: '8px',  // ← Mude o arredondamento
  // ...
};
```

---

## 📱 Responsividade

A responsividade é tratada via JavaScript no **App.jsx**:

```jsx
const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;

const responsiveMainStyle = isMobile ? {
  ...mainStyle,
  gridTemplateColumns: '1fr',
} : mainStyle;
```

---

## 🚀 Como Rodar

```bash
# Desenvolvimento
npm run dev

# Acesse: http://localhost:3000
```

---

## 📊 Comparação

| Aspecto | Estrutura Antiga | Nova Estrutura JSX |
|---------|-----------------|-------------------|
| **Arquivos CSS** | 5 arquivos .css | 0 (ZERO) |
| **Arquivos JS** | Múltiplos .js | Apenas .jsx |
| **Organização** | Espalhada | Centralizada |
| **Estilos** | CSS Modules | Inline JSX |
| **Manutenção** | Arquivos separados | Tudo junto |
| **Portabilidade** | Média | Alta |

---

## 🎯 Estrutura Final Simplificada

```
projeto-borboleta/
├── public/                    # Imagens estáticas
├── src/
│   ├── App.jsx/              # 🎯 APP PRINCIPAL
│   │   └── App.jsx           # Tudo centralizado aqui
│   │
│   ├── Components.jsx/       # 📦 COMPONENTES
│   │   ├── Header.jsx
│   │   ├── EventCard.jsx
│   │   ├── Footer.jsx
│   │   └── index.jsx
│   │
│   └── app/                   # Next.js (mínimo)
│       ├── layout.js
│       └── page.js
│
├── package.json
└── next.config.mjs
```

---

## ✅ Resumo das Mudanças

1. ✅ **Criadas pastas** `App.jsx/` e `Components.jsx/`
2. ✅ **Removidos TODOS** os arquivos `.css`
3. ✅ **Removidos** componentes `.js` antigos
4. ✅ **Convertidos** todos componentes para `.jsx`
5. ✅ **Implementados** estilos inline em JavaScript
6. ✅ **Centralizado** todo código na estrutura JSX
7. ✅ **Mantida** compatibilidade com Next.js

---

## 🎉 Resultado

✨ **Projeto 100% JSX com estilos inline**  
✨ **Zero arquivos CSS**  
✨ **Estrutura centralizada e organizada**  
✨ **Mais fácil de manter e modificar**
