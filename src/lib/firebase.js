// Firebase configuration and initialization
// Client-side Firebase SDK for authentication

import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

// Firebase configuration - values from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Validação: Verifica se as variáveis de ambiente estão configuradas
if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId) {
  console.error('❌ Erro: Variáveis de ambiente do Firebase não configuradas!');
  console.error('Verifique se o arquivo .env.local existe na raiz do projeto.');
  console.error('As variáveis devem estar SEM aspas. Exemplo:');
  console.error('NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...');
  console.error('\nVariáveis encontradas:', {
    apiKey: firebaseConfig.apiKey ? '✓ Configurada' : '✗ Faltando',
    authDomain: firebaseConfig.authDomain ? '✓ Configurada' : '✗ Faltando',
    projectId: firebaseConfig.projectId ? '✓ Configurada' : '✗ Faltando',
  });
}

// Initialize Firebase (only once)
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firebase Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Configure Google provider
googleProvider.setCustomParameters({
  prompt: 'select_account', // Always show account selection
});

// Sign in with Google popup
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return { user: result.user, error: null };
  } catch (error) {
    console.error('Error signing in with Google:', error);
    return { user: null, error: error.message };
  }
};

// Sign out
export const signOutUser = async () => {
  try {
    await signOut(auth);
    return { success: true, error: null };
  } catch (error) {
    console.error('Error signing out:', error);
    return { success: false, error: error.message };
  }
};

// Listen to auth state changes
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export { auth, googleProvider };
