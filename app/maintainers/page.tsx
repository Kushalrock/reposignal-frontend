/**
 * Maintainers Landing — value overview + CTA
 * Redirects to Maintainer Panel when already authenticated
 */

'use client';

import Link from 'next/link';
import { Button } from '@/components/common/Button';

export default function MaintainersLandingPage() {

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <header className="text-center mb-16">
        <div className="inline-block px-4 py-2 rounded-full bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400 mb-6">
          🛠️ For Maintainers
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-100 mb-4">Reach the right contributors</h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
          Reposignal helps you surface clear, actionable issues with just enough context for people to confidently contribute.
        </p>
      </header>

      {/* Value props */}
      <section className="grid gap-6 md:grid-cols-3 mb-20">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8 hover:bg-neutral-900/60 transition-colors">
          <div className="text-3xl mb-4">🎯</div>
          <h2 className="text-base font-medium text-neutral-200 mb-2">Issue‑first discovery</h2>
          <p className="text-sm text-neutral-500 leading-relaxed">Contributors find your work via issues—not dashboards—so interest starts with an actual task.</p>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8 hover:bg-neutral-900/60 transition-colors">
          <div className="text-3xl mb-4">⚙️</div>
          <h2 className="text-base font-medium text-neutral-200 mb-2">Simple visibility controls</h2>
          <p className="text-sm text-neutral-500 leading-relaxed">Set discovery to public, paused, or off. Invite help only when it’s useful.</p>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8 hover:bg-neutral-900/60 transition-colors">
          <div className="text-3xl mb-4">🧭</div>
          <h2 className="text-base font-medium text-neutral-200 mb-2">Context that matters</h2>
          <p className="text-sm text-neutral-500 leading-relaxed">Show languages, frameworks, and domains so contributors can match skills and interests quickly.</p>
        </div>
      </section>

      {/* How it helps */}
      <section className="mb-20 border-t border-neutral-900 pt-20">
        <h2 className="text-3xl font-semibold text-neutral-100 mb-6 text-center">How Reposignal helps maintainers</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-neutral-200 mb-3">Better signal, less noise</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">Clear issue cards with practical context attract contributors who are a good fit—no gamification or rankings.</p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <div className="text-3xl mb-4">⏱️</div>
            <h3 className="text-lg font-medium text-neutral-200 mb-3">Save time on triage</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">Discovery routes the right eyes to the right issues, reducing repeated questions and misaligned interest.</p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mb-20">
        <h2 className="text-lg font-medium text-neutral-200 mb-4">Get started in three steps</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
            <div className="text-xl mb-2">1️⃣</div>
            <p className="text-sm text-neutral-500">Sign in with GitHub as a maintainer.</p>
          </div>
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
            <div className="text-xl mb-2">2️⃣</div>
            <p className="text-sm text-neutral-500">Add your repository and set discovery state.</p>
          </div>
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
            <div className="text-xl mb-2">3️⃣</div>
            <p className="text-sm text-neutral-500">Write clear issue descriptions with essentials.</p>
          </div>
        </div>
      </section>

      {/* Callout + CTA */}
      <section className="border-t border-neutral-900 pt-20">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-12 text-center">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-4">Ready to manage discovery?</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/maintainer">
              <Button variant="primary" size="lg">Go to Maintainer Panel</Button>
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
