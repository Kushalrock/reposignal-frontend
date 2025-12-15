/**
 * FAQ Page — human, non‑technical
 */

import Link from 'next/link';
import { Button } from '@/components/common/Button';

export default function FAQPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="text-center mb-16">
        <div className="inline-block px-4 py-2 rounded-full bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400 mb-6">
          ❓ Questions & Answers
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-100 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">Quick answers to help you get started.</p>
      </header>

      {/* FAQ grid cards */}
      <div className="grid gap-6 md:grid-cols-2 mb-20">
        <section className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8 hover:bg-neutral-900/60 transition-colors">
          <div className="text-3xl mb-4">🔓</div>
          <h2 className="text-lg font-medium text-neutral-200 mb-3">Do I need an account to browse?</h2>
          <p className="text-sm text-neutral-500 leading-relaxed">No. You can explore issues without signing in. Create an account later if you want to save your preferences and customize your discovery feed.</p>
        </section>

        <section className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8 hover:bg-neutral-900/60 transition-colors">
          <div className="text-3xl mb-4">📋</div>
          <h2 className="text-lg font-medium text-neutral-200 mb-3">What does "context" include?</h2>
          <p className="text-sm text-neutral-500 leading-relaxed">Languages, frameworks, project domains, issue types, and difficulty levels when available. Everything you need to make a quick decision.</p>
        </section>

        <section className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8 hover:bg-neutral-900/60 transition-colors">
          <div className="text-3xl mb-4">🚫</div>
          <h2 className="text-lg font-medium text-neutral-200 mb-3">Will I see scores or rankings?</h2>
          <p className="text-sm text-neutral-500 leading-relaxed">No. Reposignal focuses on helping you find work that fits your interests and skills, not grading projects or comparing contributors.</p>
        </section>

        <section className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8 hover:bg-neutral-900/60 transition-colors">
          <div className="text-3xl mb-4">🚀</div>
          <h2 className="text-lg font-medium text-neutral-200 mb-3">How do I start contributing?</h2>
          <p className="text-sm text-neutral-500 leading-relaxed">Click an issue to see full details, then open it on GitHub. Read the project's contribution guidelines and comment on the issue to express interest.</p>
        </section>

        <section className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8 hover:bg-neutral-900/60 transition-colors">
          <div className="text-3xl mb-4">⚙️</div>
          <h2 className="text-lg font-medium text-neutral-200 mb-3">I maintain a repo. Can I manage visibility?</h2>
          <p className="text-sm text-neutral-500 leading-relaxed">Yes. Maintainers can set discovery to public, paused, or off. You control when contributors find your issues and can update your project description anytime.</p>
        </section>

        <section className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8 hover:bg-neutral-900/60 transition-colors">
          <div className="text-3xl mb-4">🎯</div>
          <h2 className="text-lg font-medium text-neutral-200 mb-3">Can I filter by difficulty level?</h2>
          <p className="text-sm text-neutral-500 leading-relaxed">Yes. Use the questionnaire to set your experience level and preferred issue difficulty. We'll show issues that match your preferences when that data is available.</p>
        </section>

        <section className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8 hover:bg-neutral-900/60 transition-colors">
          <div className="text-3xl mb-4">🔍</div>
          <h2 className="text-lg font-medium text-neutral-200 mb-3">How does Reposignal find issues?</h2>
          <p className="text-sm text-neutral-500 leading-relaxed">We track repositories that maintainers add to Reposignal and surface their open issues. Only projects with active discovery settings appear in your feed.</p>
        </section>
      </div>

      {/* CTA section */}
      <section className="border-t border-neutral-900 pt-20">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-12 text-center">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-4">Still have questions?</h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            Learn more about how Reposignal works or explore our approach to discovery.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/about">
              <Button variant="secondary" size="lg">About Reposignal</Button>
            </Link>
            <Link href="/philosophy">
              <Button variant="secondary" size="lg">Our Philosophy</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
