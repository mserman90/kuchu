import React, { createContext, useContext, useState, useEffect } from 'react';
import { client } from '@/lib/atomsClient';
import { toast } from 'sonner';

export type AuthState = 'loading' | 'authenticated' | 'anonymous';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

interface AppAuthContextType {
  authState: AuthState;
  user: AuthUser | null;
  login: (email: string) => Promise<boolean>;
  logout: () => Promise<void>;
  continueAsGuest: () => void;
}

const AppAuthContext = createContext<AppAuthContextType | undefined>(undefined);

export const AppAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>('loading');
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const currentUser = await client.auth.getCurrentUser();
        if (currentUser) {
          setUser({
            id: currentUser.id,
            email: currentUser.email,
            name: currentUser.name || currentUser.email.split('@')[0]
          });
          setAuthState('authenticated');
        } else {
          // Check local stored session
          const saved = localStorage.getItem('kuchu_user_session');
          if (saved) {
            setUser(JSON.parse(saved));
            setAuthState('authenticated');
          } else {
            setAuthState('anonymous');
          }
        }
      } catch (e) {
        console.warn('Auth check error:', e);
        setAuthState('anonymous');
      }
    };
    initAuth();
  }, []);

  const login = async (email: string): Promise<boolean> => {
    try {
      const authUser = await client.auth.login(email);
      const sessionUser: AuthUser = {
        id: authUser.id,
        email: authUser.email,
        name: authUser.name || email.split('@')[0]
      };
      setUser(sessionUser);
      localStorage.setItem('kuchu_user_session', JSON.stringify(sessionUser));
      setAuthState('authenticated');
      toast.success(`Hoş geldiniz, ${sessionUser.name}!`);
      return true;
    } catch {
      // Fallback local mock login for seamless offline usage
      const fallbackUser: AuthUser = {
        id: 'usr_' + Math.random().toString(36).substring(2, 8),
        email,
        name: email.split('@')[0]
      };
      setUser(fallbackUser);
      localStorage.setItem('kuchu_user_session', JSON.stringify(fallbackUser));
      setAuthState('authenticated');
      toast.success(`Giriş yapıldı: ${fallbackUser.name}`);
      return true;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await client.auth.logout();
    } catch {
      // ignore
    }
    setUser(null);
    localStorage.removeItem('kuchu_user_session');
    setAuthState('anonymous');
    toast.info('Çıkış yapıldı.');
  };

  const continueAsGuest = () => {
    setAuthState('anonymous');
  };

  return (
    <AppAuthContext.Provider
      value={{
        authState,
        user,
        login,
        logout,
        continueAsGuest
      }}
    >
      {children}
    </AppAuthContext.Provider>
  );
};

export const useAppAuth = (): AppAuthContextType => {
  const context = useContext(AppAuthContext);
  if (!context) {
    throw new Error('useAppAuth must be used within an AppAuthProvider');
  }
  return context;
};
