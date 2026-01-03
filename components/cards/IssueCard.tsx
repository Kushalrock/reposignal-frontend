/**
 * Issue Card Component
 * Displays an issue with repository context
 * Follows calm, editorial design
 */

'use client';

import Link from 'next/link';
import { DiscoveryResult } from '@/lib/api/public';

interface IssueCardProps {
  result: DiscoveryResult;
  onClick?: () => void;
}

const difficultyLabels: Record<number, string> = {
  1: 'Beginner',
  2: 'Intermediate',
  3: 'Moderate',
  4: 'Advanced',
  5: 'Expert',
};

export function IssueCard({ result, onClick }: IssueCardProps) {
  const { issue, repository } = result;

  return (
    <Link
      href={`/repository/${repository.githubRepoId}`}
      className="block border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors cursor-pointer"
      onClick={onClick}
    >
      {/* Repository Context */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm text-neutral-500">
          {repository.owner}/{repository.name}
        </span>
        {repository.domains.length > 0 && (
          <>
            <span className="text-neutral-700">·</span>
            <span className="text-xs text-neutral-600">{repository.domains[0].displayName}</span>
          </>
        )}
      </div>

      {/* Issue Type & Difficulty */}
      <div className="flex items-center gap-3 mb-4">
        {issue.issueType && (
          <span className="px-2 py-1 text-xs rounded bg-neutral-800 text-neutral-400">
            {issue.issueType}
          </span>
        )}
        {issue.difficulty && (
          <span className="text-xs text-neutral-500">
            {difficultyLabels[issue.difficulty]}
          </span>
        )}
      </div>

      {/* Languages & Frameworks */}
      {(repository.languages.length > 0 || repository.frameworks.length > 0) && (
        <div className="flex flex-wrap gap-2 mt-4">
          {repository.languages.slice(0, 3).map((lang) => (
            <span
              key={lang.id}
              className="text-xs px-2 py-1 rounded bg-neutral-900 text-neutral-500"
            >
              {lang.displayName}
            </span>
          ))}
          {repository.frameworks.slice(0, 2).map((fw) => (
            <span
              key={fw.id}
              className="text-xs px-2 py-1 rounded bg-neutral-900 text-neutral-500"
            >
              {fw.displayName}
            </span>
          ))}
        </div>
      )}

      {/* Repository Signals (Subtle) */}
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-neutral-900">
        <span className="text-xs text-neutral-600">{repository.starsCount} stars</span>
        <span className="text-xs text-neutral-600">
          {repository.openIssuesCount} open issues
        </span>
      </div>
    </Link>
  );
}
