/**
 * Repository Detail Page
 * Shows repository context, discovery state, and issues
 */

'use client';

import { useEffect, useState } from 'react';
import { use } from 'react';
import { getRepository, getRepositoryIssues, Repository, Issue } from '@/lib/api/public';
import { EmptyState } from '@/components/common/EmptyState';

export default function RepositoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [repoData, issuesData] = await Promise.all([
          getRepository(parseInt(id)),
          getRepositoryIssues(parseInt(id)),
        ]);
        setRepository(repoData);
        setIssues(issuesData);
      } catch (err) {
        console.error('Failed to load repository:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-neutral-500">Loading repository...</div>
      </div>
    );
  }

  if (!repository) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EmptyState title="Repository not found" />
      </div>
    );
  }

  const githubUrl = `https://github.com/${repository.owner}/${repository.name}`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Repository Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-neutral-100 mb-4">
          {repository.owner}/{repository.name}
        </h1>

        {/* Domains */}
        {repository.domains.length > 0 && (
          <div className="flex gap-2 mb-4">
            {repository.domains.map((domain) => (
              <span
                key={domain}
                className="px-3 py-1 text-sm rounded bg-neutral-900 text-neutral-400"
              >
                {domain}
              </span>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="flex gap-6 text-sm text-neutral-500 mb-6">
          <span>{repository.starsCount} stars</span>
          <span>{repository.openIssuesCount} open issues</span>
        </div>

        {/* View on GitHub */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-lg text-sm transition-colors"
        >
          View on GitHub
        </a>
      </div>

      {/* Languages & Frameworks */}
      <div className="border-t border-neutral-900 pt-8 mb-8">
        <h2 className="text-lg font-medium text-neutral-200 mb-4">
          Languages & Frameworks
        </h2>
        <div className="flex flex-wrap gap-2">
          {repository.languages.map((lang) => (
            <span
              key={lang}
              className="px-3 py-1 text-sm rounded bg-neutral-900 text-neutral-400"
            >
              {lang}
            </span>
          ))}
          {repository.frameworks.map((fw) => (
            <span
              key={fw.framework}
              className="px-3 py-1 text-sm rounded bg-neutral-900 text-neutral-400"
            >
              {fw.framework}
            </span>
          ))}
        </div>
      </div>

      {/* Issues */}
      <div className="border-t border-neutral-900 pt-8">
        <h2 className="text-lg font-medium text-neutral-200 mb-4">
          Available Issues ({issues.length})
        </h2>

        {issues.length > 0 ? (
          <div className="space-y-4">
            {issues.map((issue) => (
              <div
                key={issue.id}
                className="border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  {issue.issueType && (
                    <span className="px-2 py-1 text-xs rounded bg-neutral-800 text-neutral-400">
                      {issue.issueType}
                    </span>
                  )}
                  {issue.difficulty && (
                    <span className="text-xs text-neutral-500">
                      Difficulty: {issue.difficulty}
                    </span>
                  )}
                </div>
                <a
                  href={`${githubUrl}/issues/${issue.githubIssueId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors"
                >
                  #{issue.githubIssueId}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            title="No issues available"
            description="This repository currently has no discoverable issues."
          />
        )}
      </div>
    </div>
  );
}
