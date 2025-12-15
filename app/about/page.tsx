/**
 * About Page — explanation, not defense
 */

import Link from 'next/link';
import { Button } from '@/components/common/Button';

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="text-center mb-16">
        <div className="inline-block px-4 py-2 rounded-full bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400 mb-6">
          📖 Learn about Reposignal
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-100 mb-4">About Reposignal</h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">A simple way to find open source issues with enough context to decide.</p>
      </header>

      {/* Intro cards */}
      <section className="grid gap-6 md:grid-cols-3 mb-20">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8 hover:bg-neutral-900/60 transition-colors">
          <div className="text-3xl mb-4">💡</div>
          <h2 className="text-base font-medium text-neutral-200 mb-2">What Reposignal is</h2>
          <p className="text-sm text-neutral-500 leading-relaxed">A cleaner way to browse open source issues with enough context to make informed decisions about where to contribute.</p>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8 hover:bg-neutral-900/60 transition-colors">
          <div className="text-3xl mb-4">🎯</div>
          <h2 className="text-base font-medium text-neutral-200 mb-2">Why it helps</h2>
          <p className="text-sm text-neutral-500 leading-relaxed">You see the actual work first, plus essential context about the repository behind it. No endless searching required.</p>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8 hover:bg-neutral-900/60 transition-colors">
          <div className="text-3xl mb-4">👥</div>
          <h2 className="text-base font-medium text-neutral-200 mb-2">Who it's for</h2>
          <p className="text-sm text-neutral-500 leading-relaxed">Anyone interested in contributing to open source, from complete beginners to experienced maintainers.</p>
        </div>
      </section>

      <section className="mb-20 border-t border-neutral-900 pt-20">
        <h2 className="text-3xl font-semibold text-neutral-100 mb-6 text-center">Why issue‑first matters</h2>
        <p className="text-neutral-400 mb-12 max-w-3xl mx-auto text-center">
          Contributors often start with a task, not a dashboard. An issue‑first view keeps the focus on the work
          you could do today, while still showing the essentials about the repository behind it.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-3">Start with the work</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Instead of browsing repositories hoping to find something, you start with actual issues that need attention.
              This saves time and gets you contributing faster.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-3">Context included</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Each issue comes with repo context: what languages it uses, what frameworks are involved, and what domain
              the project focuses on. Everything you need to make a quick decision.
            </p>
          </div>
        </div>
      </section>

      {/* Context cards */}
      <section className="mb-20 border-t border-neutral-900 pt-20">
        <h2 className="text-3xl font-semibold text-neutral-100 mb-6 text-center">The kind of context you'll see</h2>
        <p className="text-neutral-400 mb-12 max-w-3xl mx-auto text-center">
          Every issue comes with essential information to help you decide quickly whether it's a good fit.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <div className="text-3xl mb-4">⚙️</div>
            <h3 className="text-lg font-medium text-neutral-200 mb-3">Tech stack</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">See the primary languages and frameworks used in the project. Filter by what you already know or want to learn.</p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <div className="text-3xl mb-4">🏷️</div>
            <h3 className="text-lg font-medium text-neutral-200 mb-3">Focus areas</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">Understand what domain the project focuses on—web dev, CLI tools, data science, developer experience, and more.</p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-medium text-neutral-200 mb-3">Issue details</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">When available, see issue type (bug, feature, docs) and difficulty level to match your skill level and interests.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-900 pt-20">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-16 w-16 rounded-2xl bg-neutral-800 flex items-center justify-center text-3xl mx-auto mb-6">🛠️</div>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-4">For maintainers</h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Maintainers can control when their repository appears in discovery. Set visibility to public, paused, or off.
              Update descriptions and help the right contributors find the right work.
            </p>
            <Link href="/maintainers">
              <Button variant="secondary">Learn about maintainer controls</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="border-t border-neutral-900 pt-20 mt-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-4">Ready to explore?</h2>
          <p className="text-neutral-400 mb-8">Start browsing issues matched to your interests.</p>
          <Link href="/discovery">
            <Button variant="primary" size="lg">Explore issues</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
