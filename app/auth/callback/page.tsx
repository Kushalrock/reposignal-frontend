/**
 * GitHub OAuth Callback Page
 * Handles GitHub OAuth callback
 */

'use client';

import { useEffect } from 'react';
import { use } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth.store';

export default function AuthCallbackPage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>;
}) {
  const params = use(searchParams);
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  useEffect(() => {
    async function handleCallback() {
      const code = params.code;

      if (!code) {
        router.push('/');
        return;
      }

      try {
        // TODO: Exchange code for session token via backend
        // For now, redirect to home
        router.push('/');
      } catch (err) {
        console.error('Auth callback error:', err);
        router.push('/');
      }
    }

    handleCallback();
  }, [params.code, router, setAuth]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <div className="text-neutral-400">Completing authentication...</div>
      </div>
    </div>
  );
}
