/**
 * Documentation Page — comprehensive reference guide
 */

import Link from 'next/link';
import { Button } from '@/components/common/Button';

export default function DocsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="text-center mb-16">
        <div className="inline-block px-4 py-2 rounded-full bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400 mb-6">
          📚 Complete Documentation
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-100 mb-4">Documentation</h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
          Everything you need to know about using Reposignal as a contributor or maintainer.
        </p>
      </header>

      {/* Quick navigation */}
      <section className="mb-20">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8">
          <h2 className="text-lg font-medium text-neutral-200 mb-4">Jump to section</h2>
          <div className="grid gap-3 md:grid-cols-3 text-sm">
            <a href="#getting-started" className="text-neutral-400 hover:text-neutral-200 transition-colors">Getting Started</a>
            <a href="#contributors" className="text-neutral-400 hover:text-neutral-200 transition-colors">For Contributors</a>
            <a href="#maintainers" className="text-neutral-400 hover:text-neutral-200 transition-colors">For Maintainers</a>
            <a href="#slash-commands" className="text-neutral-400 hover:text-neutral-200 transition-colors">Slash Commands</a>
            <a href="#upcoming" className="text-neutral-400 hover:text-neutral-200 transition-colors">Upcoming Features</a>
            <a href="#feedback" className="text-neutral-400 hover:text-neutral-200 transition-colors">Feedback System</a>
            <a href="#architecture" className="text-neutral-400 hover:text-neutral-200 transition-colors">Architecture</a>
            <a href="#api" className="text-neutral-400 hover:text-neutral-200 transition-colors">API Reference</a>
            <a href="#local-dev" className="text-neutral-400 hover:text-neutral-200 transition-colors">Local Development</a>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="mb-20 scroll-mt-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-neutral-100 mb-4">Getting Started</h2>
          <p className="text-neutral-400">
            Reposignal is an issue-first discovery platform that helps you find meaningful open source work without endless searching.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-neutral-200 mb-3">No account required</h3>
            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
              You can explore issues and repositories without signing in. Discovery is anonymous by default.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Create an account later if you want to save preferences and customize your discovery feed.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-medium text-neutral-200 mb-3">Start with issues</h3>
            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
              Unlike traditional platforms that show repositories first, Reposignal surfaces individual issues with full context.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              See the work first, then learn about the project behind it.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8">
          <h3 className="text-lg font-medium text-neutral-200 mb-4">Core principles</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex gap-3">
              <span className="text-neutral-500 shrink-0">→</span>
              <div>
                <p className="text-sm text-neutral-300 font-medium mb-1">Issue-First</p>
                <p className="text-sm text-neutral-500">Focus on individual issues, not repositories or stars</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-neutral-500 shrink-0">→</span>
              <div>
                <p className="text-sm text-neutral-300 font-medium mb-1">Opt-In Only</p>
                <p className="text-sm text-neutral-500">Maintainers have complete control and explicit consent required</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-neutral-500 shrink-0">→</span>
              <div>
                <p className="text-sm text-neutral-300 font-medium mb-1">Privacy-Respecting</p>
                <p className="text-sm text-neutral-500">Anonymous discovery, private feedback</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-neutral-500 shrink-0">→</span>
              <div>
                <p className="text-sm text-neutral-300 font-medium mb-1">Calm by Default</p>
                <p className="text-sm text-neutral-500">Quiet, neutral interface with no gamification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Contributors */}
      <section id="contributors" className="mb-20 border-t border-neutral-900 pt-20 scroll-mt-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-neutral-100 mb-4">For Contributors</h2>
          <p className="text-neutral-400">
            How to discover issues, understand context, and start contributing to open source projects.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Discovering Issues</h3>
            <div className="space-y-4 text-sm text-neutral-400">
              <div className="flex gap-3">
                <span className="text-neutral-500 shrink-0 mt-0.5">1.</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Browse the discovery feed</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Visit the <Link href="/discovery" className="text-neutral-400 hover:text-neutral-200 underline">Discovery page</Link> to see curated issues from projects that have opted into the platform.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-neutral-500 shrink-0 mt-0.5">2.</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Filter by your interests</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Use filters to narrow down issues by programming language, framework, domain, difficulty level, or issue type. Focus on work that matches your skills and interests.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-neutral-500 shrink-0 mt-0.5">3.</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Review issue context</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Each issue shows essential information: repository name, tech stack, difficulty level (when available), issue type, and a direct link to the GitHub issue.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-neutral-500 shrink-0 mt-0.5">4.</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Click through to GitHub</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Once you find something interesting, click to open the issue on GitHub. Read the full description, check the project's contribution guidelines, and comment to express interest.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Understanding Context</h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Every issue on Reposignal includes metadata to help you make quick decisions:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-4">
                <p className="text-sm text-neutral-300 font-medium mb-2">⚙️ Tech Stack</p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Primary programming languages and frameworks used in the project.
                </p>
              </div>
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-4">
                <p className="text-sm text-neutral-300 font-medium mb-2">🏷️ Domain</p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Project focus area (web dev, CLI tools, data science, etc.).
                </p>
              </div>
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-4">
                <p className="text-sm text-neutral-300 font-medium mb-2">📊 Difficulty</p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Maintainer-assigned difficulty level from 1 (easiest) to 5 (hardest).
                </p>
              </div>
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-4">
                <p className="text-sm text-neutral-300 font-medium mb-2">🎯 Issue Type</p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Category such as bug, feature, docs, refactor, test, or infrastructure.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Providing Feedback</h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              After your pull request is merged, you can optionally provide anonymous feedback about your experience.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Difficulty rating</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Rate the actual difficulty you experienced (1-5). This helps maintainers calibrate their estimates for future contributors.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Responsiveness rating</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Rate how responsive and helpful the maintainers were during your contribution (1-5).
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-neutral-700/50 bg-neutral-800/30 p-4 mt-4">
                <p className="text-xs text-neutral-400 leading-relaxed">
                  <strong className="text-neutral-300">Privacy guarantee:</strong> Your feedback is completely anonymous. We never store your GitHub identity with feedback submissions. Ratings are aggregated and used to improve the discovery experience for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Maintainers */}
      <section id="maintainers" className="mb-20 border-t border-neutral-900 pt-20 scroll-mt-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-neutral-100 mb-4">For Maintainers</h2>
          <p className="text-neutral-400">
            How to add your repository, manage issue visibility, and control when contributors discover your work.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Adding Your Repository</h3>
            <div className="space-y-4 text-sm text-neutral-400">
              <div className="flex gap-3">
                <span className="text-neutral-500 shrink-0 mt-0.5">1.</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Install the GitHub App</p>
                  <p className="text-neutral-500 leading-relaxed mb-2">
                    Install the Reposignal GitHub App on your repositories. You control which repositories are included—install on specific repos or all of them.
                  </p>
                  <Link href="/setup" className="text-neutral-400 hover:text-neutral-200 underline text-xs">
                    Go to setup page →
                  </Link>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-neutral-500 shrink-0 mt-0.5">2.</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Complete the onboarding</p>
                  <p className="text-neutral-500 leading-relaxed">
                    After installation, you'll complete a one-time setup where you can configure repository settings, set discovery visibility, and customize your project description.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-neutral-500 shrink-0 mt-0.5">3.</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Start classifying issues</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Use slash commands on GitHub to classify issues with difficulty levels, types, and visibility settings. Only classified issues appear in discovery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Repository Settings</h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Control how your repository appears in discovery and when contributors can find it.
            </p>
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-4">
                <p className="text-sm text-neutral-300 font-medium mb-2">🌐 Discovery Visibility</p>
                <div className="space-y-2 text-xs text-neutral-500">
                  <p><strong className="text-neutral-400">Public:</strong> Your issues appear in discovery feeds for all users</p>
                  <p><strong className="text-neutral-400">Paused:</strong> Temporarily hide from discovery (useful during feature freezes or heavy development periods)</p>
                  <p><strong className="text-neutral-400">Off:</strong> Never appear in discovery (repository stays tracked but hidden)</p>
                </div>
              </div>
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-4">
                <p className="text-sm text-neutral-300 font-medium mb-2">📝 Project Description</p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Customize how your project is described to potential contributors. This appears alongside your issues in discovery.
                </p>
              </div>
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-4">
                <p className="text-sm text-neutral-300 font-medium mb-2">🏷️ Metadata</p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Languages, frameworks, and domains are automatically detected by the Reposignal bot. You can review and adjust these in your repository settings.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Viewing Analytics</h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Access aggregated feedback and statistics to understand how contributors experience your project.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div className="text-sm">
                  <p className="text-neutral-300 font-medium mb-1">Difficulty calibration</p>
                  <p className="text-neutral-500 leading-relaxed">See how your difficulty estimates compare to contributor experiences</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div className="text-sm">
                  <p className="text-neutral-300 font-medium mb-1">Responsiveness scores</p>
                  <p className="text-neutral-500 leading-relaxed">Aggregated ratings of maintainer responsiveness</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div className="text-sm">
                  <p className="text-neutral-300 font-medium mb-1">Contribution patterns</p>
                  <p className="text-neutral-500 leading-relaxed">Understand which types of issues attract the most interest</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div className="text-sm">
                  <p className="text-neutral-300 font-medium mb-1">Audit logs</p>
                  <p className="text-neutral-500 leading-relaxed">Complete immutable history of all changes to your repository settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slash Commands */}
      <section id="slash-commands" className="mb-20 border-t border-neutral-900 pt-20 scroll-mt-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-neutral-100 mb-4">Slash Commands</h2>
          <p className="text-neutral-400">
            Use slash commands directly in GitHub issue comments to classify issues and manage visibility.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Maintainer Commands</h3>
            <p className="text-sm text-neutral-400 mb-4">
              Available to users with write, maintain, or admin permissions on the repository.
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-6">
                <div className="flex items-start justify-between mb-3">
                  <code className="text-sm text-neutral-300 font-mono">/reposignal difficulty &lt;1-5&gt;</code>
                  <span className="text-xs text-neutral-500 px-2 py-1 rounded bg-neutral-800/50">maintainer</span>
                </div>
                <p className="text-sm text-neutral-400 mb-3">Set issue difficulty level from 1 (easiest) to 5 (hardest).</p>
                <div className="text-xs text-neutral-500 space-y-1">
                  <p><strong className="text-neutral-400">Example:</strong> <code className="text-neutral-400">/reposignal difficulty 3</code></p>
                  <p className="leading-relaxed">This helps contributors understand the complexity before diving in. Be honest—it builds trust.</p>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-6">
                <div className="flex items-start justify-between mb-3">
                  <code className="text-sm text-neutral-300 font-mono">/reposignal type &lt;type&gt;</code>
                  <span className="text-xs text-neutral-500 px-2 py-1 rounded bg-neutral-800/50">maintainer</span>
                </div>
                <p className="text-sm text-neutral-400 mb-3">Set issue type to categorize the work.</p>
                <div className="text-xs text-neutral-500 space-y-2">
                  <p><strong className="text-neutral-400">Valid types:</strong></p>
                  <div className="grid grid-cols-2 gap-2 ml-4">
                    <p><code className="text-neutral-400">docs</code> — Documentation updates</p>
                    <p><code className="text-neutral-400">bug</code> — Bug fixes</p>
                    <p><code className="text-neutral-400">feature</code> — New features</p>
                    <p><code className="text-neutral-400">refactor</code> — Code refactoring</p>
                    <p><code className="text-neutral-400">test</code> — Test additions/updates</p>
                    <p><code className="text-neutral-400">infra</code> — Infrastructure work</p>
                  </div>
                  <p className="pt-2"><strong className="text-neutral-400">Example:</strong> <code className="text-neutral-400">/reposignal type bug</code></p>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-6">
                <div className="flex items-start justify-between mb-3">
                  <code className="text-sm text-neutral-300 font-mono">/reposignal hide</code>
                  <span className="text-xs text-neutral-500 px-2 py-1 rounded bg-neutral-800/50">maintainer</span>
                </div>
                <p className="text-sm text-neutral-400 mb-3">Hide specific issue from discovery.</p>
                <div className="text-xs text-neutral-500">
                  <p className="leading-relaxed">Use this for issues that aren't ready for external contributors, are on hold, or require internal context.</p>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-6">
                <div className="flex items-start justify-between mb-3">
                  <code className="text-sm text-neutral-300 font-mono">/reposignal show</code>
                  <span className="text-xs text-neutral-500 px-2 py-1 rounded bg-neutral-800/50">maintainer</span>
                </div>
                <p className="text-sm text-neutral-400 mb-3">Show previously hidden issue in discovery.</p>
                <div className="text-xs text-neutral-500">
                  <p className="leading-relaxed">Make a hidden issue visible again when it's ready for contributors.</p>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-700/50 bg-neutral-800/30 p-4 mt-4">
                <p className="text-xs text-neutral-400 leading-relaxed">
                  <strong className="text-neutral-300">Note:</strong> Commands and confirmation messages auto-delete after 1 minute to keep issue threads clean. You can use multiple commands in the same comment.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Contributor Commands</h3>
            <p className="text-sm text-neutral-400 mb-4">
              Available to PR authors after their pull request has been merged.
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-6">
                <div className="flex items-start justify-between mb-3">
                  <code className="text-sm text-neutral-300 font-mono">/reposignal rate difficulty &lt;1-5&gt;</code>
                  <span className="text-xs text-neutral-500 px-2 py-1 rounded bg-neutral-800/50">contributor</span>
                </div>
                <p className="text-sm text-neutral-400 mb-3">Rate the actual difficulty you experienced.</p>
                <div className="text-xs text-neutral-500">
                  <p><strong className="text-neutral-400">Example:</strong> <code className="text-neutral-400">/reposignal rate difficulty 4</code></p>
                  <p className="leading-relaxed mt-2">Your feedback helps maintainers calibrate difficulty estimates for future contributors.</p>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-6">
                <div className="flex items-start justify-between mb-3">
                  <code className="text-sm text-neutral-300 font-mono">/reposignal rate responsiveness &lt;1-5&gt;</code>
                  <span className="text-xs text-neutral-500 px-2 py-1 rounded bg-neutral-800/50">contributor</span>
                </div>
                <p className="text-sm text-neutral-400 mb-3">Rate maintainer responsiveness.</p>
                <div className="text-xs text-neutral-500">
                  <p><strong className="text-neutral-400">Example:</strong> <code className="text-neutral-400">/reposignal rate responsiveness 5</code></p>
                  <p className="leading-relaxed mt-2">This feedback helps the community understand what to expect when contributing.</p>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-700/50 bg-neutral-800/30 p-4 mt-4">
                <p className="text-xs text-neutral-400 leading-relaxed">
                  <strong className="text-neutral-300">Privacy:</strong> All contributor feedback is completely anonymous. Your GitHub identity is never stored with feedback submissions. Ratings are aggregated and used to improve the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section id="upcoming" className="mb-20 border-t border-neutral-900 pt-20 scroll-mt-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-neutral-100 mb-4">Upcoming Features</h2>
          <p className="text-neutral-400">
            The following features are currently in development and will be available soon.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">🔧</div>
              <h3 className="text-lg font-medium text-neutral-200">Repository Visibility Controls</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-amber-900/30 text-amber-400 border border-amber-800/50">Coming Soon</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Enhanced commands to manage your repository's overall visibility and discovery settings.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Overall visibility toggle</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Control whether your entire repository appears in discovery with a single command
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Temporary opt-out</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Pause discovery during feature freezes, heavy development periods, or when you need to focus on existing contributors
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Permanent opt-out</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Remove your repository from Reposignal entirely while maintaining your historical data and settings
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">⭐</div>
              <h3 className="text-lg font-medium text-neutral-200">Rating System Controls</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-amber-900/30 text-amber-400 border border-amber-800/50">Coming Soon</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Choose whether to enable contributor feedback and ratings for your repository.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Enable/disable ratings</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Turn contributor feedback on or off based on your preferences and community management style
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Granular feedback control</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Choose which types of feedback to collect (difficulty ratings, responsiveness, etc.)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">📋</div>
              <h3 className="text-lg font-medium text-neutral-200">Unclassified Issue Management</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-amber-900/30 text-amber-400 border border-amber-800/50">Coming Soon</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Better tools for managing issues that haven't been classified yet.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Bulk classification</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Classify multiple issues at once with batch commands
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Classification reminders</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Optional notifications for new issues that need classification
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Default visibility for unclassified</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Set whether unclassified issues should be hidden or visible by default
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-neutral-700/50 bg-neutral-800/30 p-6">
            <p className="text-sm text-neutral-400 leading-relaxed">
              <strong className="text-neutral-300">Stay updated:</strong> These features are actively being developed. Follow our{' '}
              <a href="https://github.com/Reposignal" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-neutral-100 underline">
                GitHub organization
              </a>{' '}
              for the latest updates and release announcements.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback System */}
      <section id="feedback" className="mb-20 border-t border-neutral-900 pt-20 scroll-mt-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-neutral-100 mb-4">Feedback System</h2>
          <p className="text-neutral-400">
            How anonymous contributor feedback works and why privacy matters.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">How It Works</h3>
            <div className="space-y-4 text-sm text-neutral-400">
              <div className="flex gap-3">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Post-merge only</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Feedback commands only work after your pull request is merged. This ensures you've completed the contribution and can provide informed feedback.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">One-time submission</p>
                  <p className="text-neutral-500 leading-relaxed">
                    You can provide feedback once per merged pull request. This prevents duplicate submissions and maintains data integrity.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Anonymous by design</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Your GitHub identity is never stored with feedback. The system logs that feedback was received, but not who submitted it.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Aggregated statistics</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Feedback is aggregated into repository-level statistics. No individual feedback is ever displayed publicly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Why Privacy Matters</h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              We intentionally designed the feedback system to be anonymous because:
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">1.</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Honest feedback</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Contributors can share their true experience without fear of retaliation or judgment.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">2.</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">No contributor tracking</p>
                  <p className="text-neutral-500 leading-relaxed">
                    We refuse to build reputation systems that rate individuals. Contribution is collaborative, not competitive.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">3.</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Focus on improvement</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Aggregated data helps maintainers improve their onboarding and issue classification without singling out individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="mb-20 border-t border-neutral-900 pt-20 scroll-mt-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-neutral-100 mb-4">Architecture</h2>
          <p className="text-neutral-400">
            Understanding how Reposignal works behind the scenes.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Three-Repository System</h3>
            <p className="text-sm text-neutral-400 mb-6">
              Reposignal consists of three separate repositories that work together:
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center text-lg shrink-0">🖥️</div>
                  <div>
                    <p className="text-sm text-neutral-300 font-medium mb-1">reposignal-backend</p>
                    <p className="text-xs text-neutral-500">Bun + Hono + Drizzle ORM + PostgreSQL</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-400 mb-3">Single source of truth for all data.</p>
                <div className="text-xs text-neutral-500 space-y-1">
                  <p>• GitHub OAuth authentication</p>
                  <p>• Repository and issue management</p>
                  <p>• Discovery engine with filtering</p>
                  <p>• Analytics and statistics</p>
                  <p>• Immutable audit logging</p>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center text-lg shrink-0">🌐</div>
                  <div>
                    <p className="text-sm text-neutral-300 font-medium mb-1">reposignal-frontend</p>
                    <p className="text-xs text-neutral-500">Next.js 16 + TypeScript + Tailwind CSS 4 + Zustand</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-400 mb-3">User interface for discovery and management.</p>
                <div className="text-xs text-neutral-500 space-y-1">
                  <p>• Anonymous-first design</p>
                  <p>• Issue discovery and browsing</p>
                  <p>• Repository exploration</p>
                  <p>• User profile management</p>
                  <p>• Dark mode native</p>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center text-lg shrink-0">🤖</div>
                  <div>
                    <p className="text-sm text-neutral-300 font-medium mb-1">reposignal-app</p>
                    <p className="text-xs text-neutral-500">Probot (Node.js) + BullMQ + Redis</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-400 mb-3">GitHub App for event handling and repository monitoring.</p>
                <div className="text-xs text-neutral-500 space-y-1">
                  <p>• Receives GitHub webhooks</p>
                  <p>• Processes slash commands</p>
                  <p>• Syncs repository and issue data</p>
                  <p>• Manages bot message cleanup</p>
                  <p>• Handles anonymous feedback</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Key Design Principles</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Backend owns all state</p>
                  <p className="text-neutral-500 leading-relaxed">
                    The bot has zero persistent state. It only calls backend endpoints. Frontend never calls bot endpoints.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Immutable logging</p>
                  <p className="text-neutral-500 leading-relaxed">
                    All state changes are logged permanently. Logs explain what happened, not who to judge.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 shrink-0">→</span>
                <div>
                  <p className="text-neutral-300 font-medium mb-1">Separation of concerns</p>
                  <p className="text-neutral-500 leading-relaxed">
                    Backend handles data, bot handles GitHub interactions, frontend displays information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section id="api" className="mb-20 border-t border-neutral-900 pt-20 scroll-mt-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-neutral-100 mb-4">API Reference</h2>
          <p className="text-neutral-400">
            Available API endpoints for programmatic access to Reposignal.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Public Endpoints</h3>
            <p className="text-sm text-neutral-400 mb-4">No authentication required.</p>
            <div className="space-y-3 text-sm font-mono">
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-green-900/30 text-green-400 text-xs">GET</span>
                  <code className="text-neutral-300">/public/discovery</code>
                </div>
                <p className="text-xs text-neutral-500 font-sans">Browse issues with filtering support</p>
              </div>
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-green-900/30 text-green-400 text-xs">GET</span>
                  <code className="text-neutral-300">/public/repositories/:id</code>
                </div>
                <p className="text-xs text-neutral-500 font-sans">Get repository details and metadata</p>
              </div>
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-green-900/30 text-green-400 text-xs">GET</span>
                  <code className="text-neutral-300">/public/repositories/:id/issues</code>
                </div>
                <p className="text-xs text-neutral-500 font-sans">List issues for a specific repository</p>
              </div>
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-green-900/30 text-green-400 text-xs">GET</span>
                  <code className="text-neutral-300">/public/repositories/:id/stats</code>
                </div>
                <p className="text-xs text-neutral-500 font-sans">Get aggregated repository statistics</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Metadata Endpoints</h3>
            <p className="text-sm text-neutral-400 mb-4">Get canonical taxonomy data.</p>
            <div className="space-y-3 text-sm font-mono">
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-green-900/30 text-green-400 text-xs">GET</span>
                  <code className="text-neutral-300">/meta/languages</code>
                </div>
                <p className="text-xs text-neutral-500 font-sans">List all supported programming languages</p>
              </div>
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-green-900/30 text-green-400 text-xs">GET</span>
                  <code className="text-neutral-300">/meta/frameworks</code>
                </div>
                <p className="text-xs text-neutral-500 font-sans">List all supported frameworks and libraries</p>
              </div>
              <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-green-900/30 text-green-400 text-xs">GET</span>
                  <code className="text-neutral-300">/meta/domains</code>
                </div>
                <p className="text-xs text-neutral-500 font-sans">List all project domains and categories</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Complete Documentation</h3>
            <p className="text-sm text-neutral-400 mb-4">
              View the complete API documentation with request/response schemas and examples.
            </p>
            <a 
              href={process.env.NEXT_PUBLIC_API_BASE_URL + '/documentation'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm transition-colors"
            >
              <span>View OpenAPI Documentation</span>
              <span className="text-neutral-500">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Local Development */}
      <section id="local-dev" className="mb-20 border-t border-neutral-900 pt-20 scroll-mt-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-neutral-100 mb-4">Local Development</h2>
          <p className="text-neutral-400">
            Set up Reposignal locally for development and testing.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Prerequisites</h3>
            <div className="grid gap-3 md:grid-cols-2 text-sm">
              <div className="flex gap-3 items-center">
                <span className="text-neutral-500">→</span>
                <p className="text-neutral-400">Node.js 20 or higher</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-neutral-500">→</span>
                <p className="text-neutral-400">Bun (latest version)</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-neutral-500">→</span>
                <p className="text-neutral-400">PostgreSQL 14 or higher</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-neutral-500">→</span>
                <p className="text-neutral-400">Redis 6 or higher (for bot)</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-neutral-500">→</span>
                <p className="text-neutral-400">Git</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-neutral-500">→</span>
                <p className="text-neutral-400">GitHub account</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Setup Order</h3>
            <p className="text-sm text-neutral-400 mb-4">
              Follow these steps in order to set up the complete Reposignal development environment.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm text-neutral-400 shrink-0">1</div>
                <div>
                  <p className="text-sm text-neutral-300 font-medium mb-1">Create GitHub Apps</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Create a GitHub App (for the bot) and a GitHub OAuth App (for user authentication). Save the credentials for environment configuration.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm text-neutral-400 shrink-0">2</div>
                <div>
                  <p className="text-sm text-neutral-300 font-medium mb-1">Set up Backend</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Clone reposignal-backend, install dependencies, configure environment variables, and run database migrations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm text-neutral-400 shrink-0">3</div>
                <div>
                  <p className="text-sm text-neutral-300 font-medium mb-1">Set up Frontend</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Clone reposignal-frontend, install dependencies, and configure environment variables.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm text-neutral-400 shrink-0">4</div>
                <div>
                  <p className="text-sm text-neutral-300 font-medium mb-1">Set up Bot</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Clone reposignal-app, install dependencies, set up Smee.io for webhook proxying, and configure environment variables.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">Repository Links</h3>
            <div className="space-y-3">
              <a 
                href="https://github.com/Reposignal/reposignal-backend" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg border border-neutral-800/50 bg-neutral-900/30 hover:bg-neutral-800/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center text-lg">🖥️</div>
                  <div>
                    <p className="text-sm text-neutral-300 font-medium">reposignal-backend</p>
                    <p className="text-xs text-neutral-500">API server and database</p>
                  </div>
                </div>
                <span className="text-neutral-500 group-hover:text-neutral-300 transition-colors">↗</span>
              </a>
              <a 
                href="https://github.com/Reposignal/reposignal-frontend" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg border border-neutral-800/50 bg-neutral-900/30 hover:bg-neutral-800/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center text-lg">🌐</div>
                  <div>
                    <p className="text-sm text-neutral-300 font-medium">reposignal-frontend</p>
                    <p className="text-xs text-neutral-500">Web application</p>
                  </div>
                </div>
                <span className="text-neutral-500 group-hover:text-neutral-300 transition-colors">↗</span>
              </a>
              <a 
                href="https://github.com/Reposignal/reposignal-app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg border border-neutral-800/50 bg-neutral-900/30 hover:bg-neutral-800/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center text-lg">🤖</div>
                  <div>
                    <p className="text-sm text-neutral-300 font-medium">reposignal-app</p>
                    <p className="text-xs text-neutral-500">GitHub bot</p>
                  </div>
                </div>
                <span className="text-neutral-500 group-hover:text-neutral-300 transition-colors">↗</span>
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-700 bg-neutral-800/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-3">Need detailed setup instructions?</h3>
            <p className="text-sm text-neutral-400 mb-6">
              Each repository includes comprehensive setup documentation in its README with step-by-step instructions, environment variable configuration, and troubleshooting guides.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a 
                href="https://github.com/Reposignal/reposignal-backend#readme" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="sm">Backend Setup Guide</Button>
              </a>
              <a 
                href="https://github.com/Reposignal/reposignal-frontend#readme" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="sm">Frontend Setup Guide</Button>
              </a>
              <a 
                href="https://github.com/Reposignal/reposignal-app#readme" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="sm">Bot Setup Guide</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="border-t border-neutral-900 pt-12 pb-8">
        <p className="text-center text-sm text-neutral-500">
          Last updated: <time dateTime="2026-01-12">January 12, 2026</time>
        </p>
      </section>

      {/* Additional Resources */}
      <section className="border-t border-neutral-900 pt-20">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-neutral-100 mb-4">Additional Resources</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Explore more about Reposignal's philosophy, frequently asked questions, and community guidelines.
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/about">
              <Button variant="secondary" size="lg">About Reposignal</Button>
            </Link>
            <Link href="/philosophy">
              <Button variant="secondary" size="lg">Our Philosophy</Button>
            </Link>
            <Link href="/faq">
              <Button variant="secondary" size="lg">FAQ</Button>
            </Link>
            <Link href="/discovery">
              <Button variant="primary" size="lg">Start Discovering</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
