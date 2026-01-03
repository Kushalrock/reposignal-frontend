/**
 * Repository Card Component
 * Displays repository overview
 */

'use client';

import Link from 'next/link';
import { Repository } from '@/lib/api/public';

interface RepositoryCardProps {
  repository: Repository;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <Link
      href={`/repository/${repository.githubRepoId}`}
      className="block border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors"
    >
      {/* Repository Name */}
      <h3 className="text-lg font-medium text-neutral-100 mb-2">
        {repository.owner}/{repository.name}
      </h3>

      {/* Domains */}
      {repository.domains.length > 0 && (
        <div className="flex gap-2 mb-4">
          {repository.domains.map((domain) => (
            <span
              key={domain.id}
              className="text-xs px-2 py-1 rounded bg-neutral-900 text-neutral-500"
            >
              {domain.displayName}
            </span>
          ))}
        </div>
      )}

      {/* Languages & Frameworks */}
      <div className="flex flex-wrap gap-2 mb-4">
        {repository.languages.slice(0, 3).map((lang) => (
          <span
            key={lang.id}
            className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-400"
          >
            {lang.displayName}
          </span>
        ))}
        {repository.frameworks.slice(0, 2).map((fw) => (
          <span
            key={fw.id}
            className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-400"
          >
            {fw.displayName}
          </span>
        ))}
      </div>

      {/* Repository Stats */}
      <div className="flex items-center gap-4 text-xs text-neutral-600 pt-4 border-t border-neutral-900">
        <span>{repository.starsCount} stars</span>
        <span>{repository.openIssuesCount} open issues</span>
      </div>
    </Link>
  );
}
