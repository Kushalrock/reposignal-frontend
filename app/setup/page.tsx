/**
 * Setup Page
 * First-time GitHub App installation configuration
 * Installation ID only; backend validates everything
 */

import { Suspense } from 'react';
import SetupClient from './SetupClient';

export default function SetupPage() {
  return (
    <Suspense fallback={null}>
      <SetupClient />
    </Suspense>
  );
}
