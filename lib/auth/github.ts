/**
 * GitHub Auth Utilities
 */

import { authRoutes } from '../api/routes';

export function redirectToGitHubLogin() {
  if (typeof window !== 'undefined') {
    window.location.href = authRoutes.githubLogin;
  }
}

export async function logout() {
  try {
    await fetch(authRoutes.logout, {
      method: 'POST',
      credentials: 'include',
    });
    
    return { success: true };
  } catch (error) {
    console.error('Logout failed:', error);
    return { success: false };
  }
}
