/**
 * Discovery Query Sync Component
 * Parses URL query params and hydrates discovery store
 * ONLY place where useSearchParams is allowed in discovery route
 */

'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useDiscoveryStore } from '@/store/discovery.store';

export default function DiscoveryQuerySync() {
  const params = useSearchParams();
  const initialized = useRef(false);
  const store = useDiscoveryStore();

  useEffect(() => {
    if (initialized.current) return;
    if (!params) return;

    const queryString = params.toString();
    if (!queryString) return;

    initialized.current = true;

    // Parse difficulties as array
    const diffParam = params.get('difficulties');
    if (diffParam) {
      const difficulties = diffParam
        .split(',')
        .map(Number)
        .filter((n) => !Number.isNaN(n));
      if (difficulties.length > 0) {
        difficulties.forEach((d) => store.toggleDifficulty(d));
      }
    }

    // Parse languageIds
    const languageIdsParam = params.get('languageIds');
    if (languageIdsParam) {
      const ids = languageIdsParam
        .split(',')
        .map(Number)
        .filter((n) => !Number.isNaN(n));
      ids.forEach((id) => store.toggleLanguageId(id));
    }

    // Parse frameworkIds
    const frameworkIdsParam = params.get('frameworkIds');
    if (frameworkIdsParam) {
      const ids = frameworkIdsParam
        .split(',')
        .map(Number)
        .filter((n) => !Number.isNaN(n));
      ids.forEach((id) => store.toggleFrameworkId(id));
    }

    // Parse domainIds
    const domainIdsParam = params.get('domainIds');
    if (domainIdsParam) {
      const ids = domainIdsParam
        .split(',')
        .map(Number)
        .filter((n) => !Number.isNaN(n));
      ids.forEach((id) => store.toggleDomainId(id));
    }

    // Parse includeUnclassified
    const includeParam = params.get('includeUnclassified');
    if (includeParam === '1') {
      store.setIncludeUnclassified(true);
    }
  }, [params, store]);

  return null;
}
