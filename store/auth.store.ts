/**
 * Auth Store
 * Manages authentication state
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  githubUserId: number;
  username: string;
  avatarUrl: string | null;
  bio: string | null;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  sessionToken: string | null;
  
  // Actions
  setAuth: (user: User, token: string) => void;
  clearAuth: () => void;
  updateUser: (updates: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      sessionToken: null,

      setAuth: (user, token) =>
        set({
          isLoggedIn: true,
          user,
          sessionToken: token,
        }),

      clearAuth: () =>
        set({
          isLoggedIn: false,
          user: null,
          sessionToken: null,
        }),

      updateUser: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),
    }),
    {
      name: 'reposignal-auth',
    }
  )
);
