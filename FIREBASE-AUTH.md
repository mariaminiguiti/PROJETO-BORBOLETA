# 🔐 Firebase Authentication - Guia de Configuração

## 📋 Visão Geral

Este projeto utiliza Firebase Authentication com Google Sign-In para autenticação de usuários. O sistema permite que usuários façam login usando suas contas Google e acessem funcionalidades personalizadas.

## 🚀 Instalação

### 1. Instalar Dependências

```bash
npm install firebase
```

### 2. Configurar Firebase Console

#### a) Criar Projeto Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Adicionar projeto" ou selecione um existente
3. Siga o assistente de configuração:
   - Escolha um nome para o projeto (ex: "Eventus")
   - (Opcional) Habilite Google Analytics
   - Aceite os termos e crie o projeto

#### b) Registrar Aplicação Web

1. No Dashboard do projeto, clique no ícone Web (`</>`)
2. Registre o app com um apelido (ex: "Eventus Web")
3. **NÃO** marque "Firebase Hosting" (a menos que vá usar)
4. Clique em "Registrar app"
5. **Copie as credenciais** do objeto `firebaseConfig`

#### c) Habilitar Google Authentication

1. No menu lateral, vá em **Authentication**
2. Clique em **Começar** (se for a primeira vez)
3. Vá na aba **Sign-in method**
4. Clique em **Google** na lista de provedores
5. **Ative** o provedor Google
6. Selecione um **email de suporte do projeto** (obrigatório)
7. Clique em **Salvar**

### 3. Configurar Variáveis de Ambiente

#### a) Criar Arquivo de Ambiente

Na **raiz do projeto**, crie um arquivo chamado `.env.local`:

```bash
# Windows PowerShell
New-Item .env.local

# Linux/Mac
touch .env.local
```

#### b) Adicionar Credenciais

Abra `.env.local` e adicione suas credenciais do Firebase:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu-projeto
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu-projeto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

> **⚠️ IMPORTANTE**: O arquivo `.env.local` está no `.gitignore` e **NÃO deve ser commitado** no Git!

Use `.env.local.example` como referência para a estrutura.

### 4. Configurar OAuth Consent Screen (Opcional para Produção)

Para publicar o app em produção com Google Sign-In:

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Selecione o projeto Firebase
3. Vá em **APIs & Services** > **OAuth consent screen**
4. Configure:
   - **User Type**: External (para acesso público)
   - **App name**: Eventus
   - **User support email**: seu-email@example.com
   - **Developer contact**: seu-email@example.com
5. Adicione **Scopes**: `email`, `profile`, `openid`
6. Adicione **Test users** (para modo de teste)
7. Publique o app quando estiver pronto

## 🏗️ Arquitetura do Sistema

### Estrutura de Arquivos

```
projeto-borboleta/
├── src/
│   ├── lib/
│   │   └── firebase.js              # Configuração Firebase + Helpers
│   ├── contexts/
│   │   └── AuthContext.jsx          # Context API para estado auth
│   ├── Components.jsx/
│   │   ├── LoginPage.jsx            # Página de login com Google
│   │   └── Header.jsx               # Header com user dropdown
│   └── app/
│       ├── login/
│       │   └── page.js              # Rota /login
│       └── layout.js                # AuthProvider wrapper
├── .env.local                       # Credenciais (NÃO commitar!)
└── .env.local.example               # Template de env vars
```

### Componentes Principais

#### 1. `firebase.js`
- **Responsabilidade**: Inicialização do Firebase SDK e funções helper
- **Exports**:
  - `signInWithGoogle()`: Abre popup de login Google
  - `signOutUser()`: Faz logout do usuário
  - `onAuthStateChange(callback)`: Observa mudanças no estado de auth

```javascript
import { signInWithGoogle, signOutUser } from '@/lib/firebase';

// Login
const { user, error } = await signInWithGoogle();

// Logout
const { success, error } = await signOutUser();
```

#### 2. `AuthContext.jsx`
- **Responsabilidade**: Context API para gerenciar estado global de autenticação
- **Provides**:
  - `user`: Objeto do usuário autenticado (ou `null`)
  - `loading`: Estado de carregamento inicial
  - `error`: Mensagens de erro
  - `isAuthenticated`: Boolean indicando se há usuário logado
  - `signIn()`: Função para fazer login
  - `signOut()`: Função para fazer logout

```javascript
import { useAuth } from '@/contexts/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, signOut } = useAuth();
  
  return (
    <div>
      {isAuthenticated ? (
        <p>Bem-vindo, {user.displayName}!</p>
      ) : (
        <p>Faça login</p>
      )}
    </div>
  );
}
```

#### 3. `LoginPage.jsx`
- **Responsabilidade**: Interface de login com Google Sign-In
- **Features**:
  - Botão "Continuar com Google"
  - Loading states durante autenticação
  - Mensagens de erro
  - Glassmorphism design (shadcn pattern)
  - Redirect automático para home após login

#### 4. `Header.jsx` (Atualizado)
- **Responsabilidade**: Navegação com estado de autenticação
- **Features**:
  - Mostra "Login" quando não autenticado
  - Mostra foto + nome do usuário quando autenticado
  - Dropdown com opção "Sair"
  - Hover effects e transitions

## 🔒 Segurança

### Boas Práticas Implementadas

1. **Client-Side Auth**: Usado Firebase SDK (não Admin) para autenticação no navegador
2. **Environment Variables**: Credenciais armazenadas em `.env.local` (não commitado)
3. **Prefixo NEXT_PUBLIC_**: Variáveis expostas no cliente explicitamente
4. **Error Handling**: Try/catch em todas as operações async
5. **OAuth Popup**: Popup mode para melhor UX e segurança

### ⚠️ Limitações

- **Sem Protected Routes**: Atualmente, as rotas não estão protegidas por autenticação
- **Sem Server-Side Verification**: Tokens não são validados no servidor
- **Client-Side Only**: Autenticação acontece apenas no frontend

### 🔐 Para Produção

Se precisar de autenticação server-side (API routes protegidas):

1. Instale Firebase Admin SDK: `npm install firebase-admin`
2. Configure Service Account (credenciais privadas)
3. Valide tokens nas API routes:

```javascript
// app/api/protected/route.js
import { adminAuth } from '@/lib/firebase-admin';

export async function GET(request) {
  const token = request.headers.get('authorization')?.split('Bearer ')[1];
  
  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    // Token válido, prossiga...
  } catch (error) {
    return Response.json({ error: 'Não autorizado' }, { status: 401 });
  }
}
```

## 🧪 Testando a Integração

### 1. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

### 2. Testar Fluxo de Login

1. Acesse `http://localhost:3000`
2. Clique em "Login" no header
3. Na página de login, clique em "Continuar com Google"
4. Selecione uma conta Google
5. Após autenticação, você será redirecionado para home
6. O header deve mostrar sua foto e nome
7. Clique na foto para abrir dropdown
8. Clique em "Sair" para fazer logout

### 3. Verificar Dados do Usuário

No DevTools Console, você pode acessar:

```javascript
// Em qualquer componente
const { user } = useAuth();

console.log(user);
// {
//   uid: 'firebase-user-id',
//   email: 'user@gmail.com',
//   displayName: 'Nome do Usuário',
//   photoURL: 'https://lh3.googleusercontent.com/...',
//   emailVerified: true,
//   ...
// }
```

## 🐛 Troubleshooting

### Erro: "Firebase não inicializado"

**Causa**: Variáveis de ambiente não configuradas

**Solução**:
1. Verifique se `.env.local` existe na raiz
2. Confira se todas as variáveis estão preenchidas
3. Reinicie o servidor: `Ctrl+C` e `npm run dev`

### Erro: "API key not valid"

**Causa**: API Key incorreta ou restrita

**Solução**:
1. Verifique se copiou a API Key correta do Firebase Console
2. Em **Project Settings** > **General**, confira a chave
3. Verifique restrições em **APIs & Services** > **Credentials** (Google Cloud Console)

### Erro: "This domain is not authorized"

**Causa**: Localhost não está nos domínios autorizados

**Solução**:
1. Firebase Console > **Authentication** > **Settings** (aba)
2. Role até **Authorized domains**
3. Adicione `localhost` (já vem por padrão)
4. Para produção, adicione seu domínio (ex: `eventus.com`)

### Popup de Login não Abre

**Causa**: Bloqueador de popups do navegador

**Solução**:
1. Verifique se o navegador bloqueou o popup (ícone na barra de endereço)
2. Permita popups para `localhost:3000`
3. Tente em uma janela anônima

### Erro: "auth/popup-closed-by-user"

**Causa**: Usuário fechou o popup antes de autenticar

**Solução**:
- Isso é esperado! O app mostra a mensagem de erro automaticamente
- Usuário pode tentar novamente

## 📚 Recursos Adicionais

- [Firebase Auth Documentation](https://firebase.google.com/docs/auth?hl=pt-br)
- [Google Sign-In Setup](https://firebase.google.com/docs/auth/web/google-signin?hl=pt-br)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup?hl=pt-br) (para server-side)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)

## 📞 Suporte

Se encontrar problemas:

1. Verifique o **Console do navegador** (F12) para erros
2. Verifique os **logs do terminal** onde o Next.js está rodando
3. Consulte o [Firebase Error Codes](https://firebase.google.com/docs/reference/js/auth#autherrorcodes)
4. Revise a [documentação oficial](https://firebase.google.com/docs)

---

**Desenvolvido com 💜 seguindo padrões shadcn e boas práticas Next.js 15**
