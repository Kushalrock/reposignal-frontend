/**
 * Issue Detail Overlay
 * Shows issue context and link to GitHub
 * No interaction, just context
 */

'use client';

import { useEffect, useState } from 'react';
import { useUIStore } from '@/store/ui.store';
import { Issue, Repository, getRepository } from '@/lib/api/public';

export function IssueDetailOverlay() {
  const overlay = useUIStore((state) => state.issueDetailOverlay);
  const closeIssueDetail = useUIStore((state) => state.closeIssueDetail);
  const [repository, setRepository] = useState<Repository | null>(null);

  useEffect(() => {
    if (overlay) {
      getRepository(overlay.repoId)
        .then(setRepository)
        .catch(console.error);
    } else {
      setRepository(null);
    }
  }, [overlay]);

  if (!overlay || !repository) return null;

  const githubIssueUrl = `https://github.com/${repository.owner}/${repository.name}/issues/${overlay.issueId}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="bg-neutral-900 border border-neutral-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800">
          <h2 className="text-lg font-medium text-neutral-100">Issue Context</h2>
          <button
            onClick={closeIssueDetail}
            className="text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Repository Context */}
        <div className="p-6 border-b border-neutral-800">
          <div className="text-sm text-neutral-500 mb-2">Repository</div>
          <div className="text-base text-neutral-100 mb-4">
            {repository.owner}/{repository.name}
          </div>

          {repository.domains.length > 0 && (
            <div className="flex gap-2">
              {repository.domains.map((domain) => (
                <span
                  key={domain}
                  className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-400"
                >
                  {domain}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Languages & Frameworks */}
        <div className="p-6 border-b border-neutral-800">
          <div className="text-sm text-neutral-500 mb-3">Languages & Frameworks</div>
          <div className="flex flex-wrap gap-2">
            {repository.languages.map((lang) => (
              <span
                key={lang}
                className="text-xs px-2 py-1 rounded bg-neutral-900 text-neutral-500"
              >
                {lang}
              </span>
            ))}
            {repository.frameworks.map((fw) => (
              <span
                key={fw.framework}
                className="text-xs px-2 py-1 rounded bg-neutral-900 text-neutral-500"
              >
                {fw.framework}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-6">
          <a
            href={githubIssueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-lg transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
