# 🦋 Projeto Borboleta - Migração para React/Next.js

## ✅ Transformações Realizadas

### 🎯 1. Estrutura Antiga (HTML Estático)
```
site/
├── index.html          # Um único arquivo HTML com todo o conteúdo
├── style.css           # CSS global
└── imgs/               # Imagens
```

**Problemas:**
- ❌ Código repetitivo (cards duplicados)
- ❌ Difícil manutenção
- ❌ Sem reutilização de código
- ❌ Não escalável

### 🚀 2. Estrutura Nova (React/Next.js)
```
src/
├── app/
│   ├── layout.js       # Layout global da aplicação
│   ├── page.js         # Página principal (usa os componentes)
│   ├── page.module.css
│   └── globals.css
├── components/         # ✨ COMPONENTES REUTILIZÁVEIS
│   ├── Header.js       # Componente isolado do cabeçalho
│   ├── EventCard.js    # Componente de card (usado 4x)
│   ├── Footer.js       # Componente isolado do rodapé
│   └── *.module.css    # CSS específico de cada componente
└── data/
    └── events.js       # Dados separados da apresentação
```

**Benefícios:**
- ✅ Componentes reutilizáveis
- ✅ Código organizado e modular
- ✅ Fácil adicionar/remover eventos
- ✅ CSS isolado (sem conflitos)
- ✅ Otimizações automáticas do Next.js

---

## 📦 Componentes Criados

### 1️⃣ **Header.js**
```jsx
<Header />
```
**Elementos:**
- Logo do Eventus
- Localização (São Paulo)
- Links de navegação (Contatos, Login)
- Ícone de perfil

**Arquivo CSS:** `Header.module.css`

---

### 2️⃣ **EventCard.js** (⭐ Principal)
```jsx
<EventCard
  title="Nome do Evento"
  description="Descrição..."
  imageUrl="URL da imagem"
  location="Local do evento"
  date="Data e horário"
/>
```

**O que mudou:**
- **ANTES:** 4 sections HTML idênticas com conteúdo diferente
- **AGORA:** 1 componente reutilizado 4 vezes com props diferentes

**Vantagens:**
- Adicionar evento = 1 objeto no array
- Atualizar design = editar 1 arquivo
- Manter consistência visual

**Arquivo CSS:** `EventCard.module.css`

---

### 3️⃣ **Footer.js**
```jsx
<Footer />
```
**Elementos:**
- Logo
- Links para locais culturais
- Redes sociais
- Informações de contato

**Arquivo CSS:** `Footer.module.css`

---

## 🎨 Sistema de Estilos

### CSS Modules (Isolado)
Cada componente tem seu próprio CSS que **não conflita** com outros:

```css
/* Header.module.css */
.header { ... }
.nav { ... }

/* EventCard.module.css */
.card { ... }
.eventImage { ... }

/* Footer.module.css */
.footer { ... }
.redes { ... }
```

### Globals.css
Estilos base da aplicação:
- Reset CSS
- Tipografia
- Cores principais

---

## 📊 Dados Separados (events.js)

**ANTES (HTML):**
```html
<section class="card">
  <h2>Oktoberfesta de Moema</h2>
  <p>Realizada no coração de Moema...</p>
  <!-- Conteúdo hardcoded -->
</section>
```

**AGORA (React):**
```javascript
// events.js
export const events = [
  {
    id: 1,
    title: "Oktoberfesta de Moema",
    description: "Realizada no coração de Moema...",
    imageUrl: "https://...",
    location: "Praça Ns. Aparecida de Moema",
    date: "04 out - 2025 • 10:30 às 22:30"
  },
  // ... mais eventos
];

// page.js
{events.map(event => (
  <EventCard key={event.id} {...event} />
))}
```

---

## 🔄 Fluxo de Renderização

```
page.js (Página Principal)
    ↓
┌─────────────────────────────┐
│   <Header />                │  ← Componente Header
├─────────────────────────────┤
│   <h3>Título</h3>           │
├─────────────────────────────┤
│   <main>                    │
│     events.map():           │
│       <EventCard />  ←──────┼──── Componente reutilizado
│       <EventCard />  ←──────┼──── 4 vezes com dados
│       <EventCard />  ←──────┼──── diferentes de
│       <EventCard />  ←──────┼──── events.js
│   </main>                   │
├─────────────────────────────┤
│   <Footer />                │  ← Componente Footer
└─────────────────────────────┘
```

---

## ⚡ Vantagens da Nova Estrutura

### 1. **Manutenibilidade**
- Editar header? → Apenas `Header.js`
- Mudar estilo de card? → Apenas `EventCard.module.css`
- Adicionar evento? → Apenas adicionar objeto em `events.js`

### 2. **Escalabilidade**
- Fácil adicionar páginas (perfil, login, detalhes do evento)
- Componentes podem ser usados em outras páginas
- Preparado para crescimento

### 3. **Performance**
- Otimização automática de imagens (Next.js)
- Code splitting
- Server-Side Rendering
- Fast Refresh (desenvolvimento)

### 4. **Developer Experience**
- Código organizado
- Fácil localizar bugs
- Melhor IDE support
- TypeScript ready (futuro)

---

## 🎯 Como Funciona Agora

### Adicionar um Novo Evento:
1. Abra `src/data/events.js`
2. Adicione um objeto:
```javascript
{
  id: 5,
  title: "Novo Evento",
  description: "Descrição...",
  imageUrl: "https://...",
  location: "Local",
  date: "Data"
}
```
3. **Pronto!** O card aparece automaticamente ✨

### Editar o Design dos Cards:
1. Abra `src/components/EventCard.module.css`
2. Altere os estilos
3. **Todos** os 4 cards atualizam automaticamente

### Mudar o Cabeçalho:
1. Abra `src/components/Header.js`
2. Edite o JSX
3. Aparece em **todas** as páginas do site

---

## 📱 Responsividade Mantida

O projeto continua responsivo:

**Desktop (>1024px):**
```
┌──────────┬──────────┐
│ Card 1   │ Card 2   │
├──────────┼──────────┤
│ Card 3   │ Card 4   │
└──────────┴──────────┘
```

**Mobile (<1024px):**
```
┌──────────┐
│ Card 1   │
├──────────┤
│ Card 2   │
├──────────┤
│ Card 3   │
├──────────┤
│ Card 4   │
└──────────┘
```

---

## 🚀 Para Rodar o Projeto

```bash
# Instalar dependências
npm install

# Modo desenvolvimento
npm run dev

# Acesse: http://localhost:3000
```

---

## 📂 Comparação Final

| Aspecto | HTML Antigo | React/Next.js Novo |
|---------|-------------|-------------------|
| **Arquivos** | 2 (HTML + CSS) | 12+ (organizados) |
| **Reutilização** | ❌ Nenhuma | ✅ Total |
| **Manutenção** | 🔴 Difícil | 🟢 Fácil |
| **Escalabilidade** | 🔴 Limitada | 🟢 Excelente |
| **Performance** | 🟡 Básica | 🟢 Otimizada |
| **DX** | 🔴 Ruim | 🟢 Excelente |

---

## 🎉 Resultado

✨ **Código mais limpo, organizado e profissional**  
✨ **Fácil manutenção e escalabilidade**  
✨ **Preparado para crescimento futuro**  
✨ **Padrão da indústria (React/Next.js)**
