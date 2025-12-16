/**
 * Setup Query Sync Component
 * Parses URL query params and hydrates setup store
 * ONLY place where useSearchParams is allowed in setup route
 */

'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useSetupStore } from '@/store/setup.store';

export default function SetupQuerySync() {
  const params = useSearchParams();
  const initialized = useRef(false);
  const { setInstallationId, setError } = useSetupStore();

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const idParam = params?.get('installation_id');

    if (!idParam || !/^\d+$/.test(idParam)) {
      setError('Invalid installation link.');
      return;
    }

    const id = Number(idParam);
    setInstallationId(id);
  }, [params, setInstallationId, setError]);

  return null;
}
