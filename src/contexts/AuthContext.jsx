// AuthContext.jsx - Context API para gerenciamento de autenticação
// Gerencia estado global do usuário autenticado usando Firebase

'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChange, signInWithGoogle as firebaseSignIn, signOutUser as firebaseSignOut } from '@/lib/firebase';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChange((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    try {
      setError(null);
      const { user: signedInUser, error: signInError } = await firebaseSignIn();
      
      if (signInError) {
        setError(signInError);
        return { success: false, error: signInError };
      }
      
      return { success: true, user: signedInUser };
    } catch (err) {
      const errorMessage = err.message || 'Erro ao fazer login';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const signOut = async () => {
    try {
      setError(null);
      const { success, error: signOutError } = await firebaseSignOut();
      
      if (signOutError) {
        setError(signOutError);
        return { success: false, error: signOutError };
      }
      
      setUser(null);
      return { success: true };
    } catch (err) {
      const errorMessage = err.message || 'Erro ao fazer logout';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const value = {
    user,
    loading,
    error,
    signIn,
    signOut,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}
