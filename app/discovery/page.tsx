import { Suspense } from 'react';
import DiscoveryClient from './DiscoveryClient';

export const dynamic = 'force-dynamic';

export default function DiscoveryPage() {
  return (
    <Suspense fallback={null}>
      <DiscoveryClient />
    </Suspense>
  );
}
