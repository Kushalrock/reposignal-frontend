/**
 * requireMaintainer Guard
 * Checks if user maintains any repositories
 */

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth.store';
import { useMaintainerStore } from '@/store/maintainer.store';

export function useRequireMaintainer() {
  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const repos = useMaintainerStore((state) => state.repos);

  const isMaintainer = isLoggedIn && repos.length > 0;

  useEffect(() => {
    if (!isLoggedIn || repos.length === 0) {
      router.push('/');
    }
  }, [isLoggedIn, repos.length, router]);

  return isMaintainer;
}
