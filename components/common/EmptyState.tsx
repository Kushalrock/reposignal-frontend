/**
 * EmptyState Component
 * Neutral, non-blaming empty state
 */

import { ReactNode } from 'react';

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <h3 className="text-lg font-medium text-neutral-300 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-neutral-500 max-w-md mb-6">{description}</p>
      )}
      {action && <div>{action}</div>}
    </div>
  );
}
