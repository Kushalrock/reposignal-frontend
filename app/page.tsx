/**
 * Home Page
 * Orientation, trust messaging, CTA
 * Calm, editorial, no metrics
 */

'use client';

import Link from 'next/link';
import { Button } from '@/components/common/Button';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center">
        <div className="inline-block px-4 py-2 rounded-full bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400 mb-6">
          ✨ A calmer way to discover open source work
        </div>
        <h1 className="text-5xl sm:text-6xl font-semibold text-neutral-100 mb-6 leading-tight">
          Find issues worth your time
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-4">
          Browse open source issues with clear context. See what a repo is about before you dive in.
        </p>
        <p className="text-sm text-neutral-500 max-w-xl mx-auto mb-10">
          No scores. No pressure. Just issues matched to your skills, with enough context to make a decision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/explore">
            <Button variant="primary" size="lg">Explore issues</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" size="lg">Learn more</Button>
          </Link>
        </div>
      </section>

      {/* Value props as cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-700 transition-colors">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-300">🔎</div>
              <h3 className="text-base font-medium text-neutral-200">Issue‑first browsing</h3>
            </div>
            <p className="text-sm text-neutral-500">Start with the work. Each issue includes helpful repo context.</p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-700 transition-colors">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-300">📘</div>
              <h3 className="text-base font-medium text-neutral-200">Context before commitment</h3>
            </div>
            <p className="text-sm text-neutral-500">Languages, frameworks, domains — enough to decide if it fits you.</p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-700 transition-colors">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-300">🚪</div>
              <h3 className="text-base font-medium text-neutral-200">Works without login</h3>
            </div>
            <p className="text-sm text-neutral-500">Browse freely. Sign in later if you want to personalize.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-neutral-900">
        <h2 className="text-3xl font-semibold text-neutral-100 mb-4 text-center">How it works</h2>
        <p className="text-center text-neutral-500 mb-12 max-w-2xl mx-auto">
          Three simple steps to start exploring issues that match your interests.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-700 transition-all">
            <div className="h-12 w-12 rounded-xl bg-neutral-800 flex items-center justify-center text-2xl mb-4">1️⃣</div>
            <h3 className="text-base font-medium text-neutral-200 mb-2">Tell us what you like</h3>
            <p className="text-sm text-neutral-500">Pick a difficulty and a few technologies. Or skip and browse everything.</p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-700 transition-all">
            <div className="h-12 w-12 rounded-xl bg-neutral-800 flex items-center justify-center text-2xl mb-4">2️⃣</div>
            <h3 className="text-base font-medium text-neutral-200 mb-2">Browse matched issues</h3>
            <p className="text-sm text-neutral-500">See issues with the repo context that matters to you.</p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-700 transition-all">
            <div className="h-12 w-12 rounded-xl bg-neutral-800 flex items-center justify-center text-2xl mb-4">3️⃣</div>
            <h3 className="text-base font-medium text-neutral-200 mb-2">Open on GitHub</h3>
            <p className="text-sm text-neutral-500">When something looks right, jump to the repo and take a look.</p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-neutral-900">
        <h2 className="text-3xl font-semibold text-neutral-100 mb-4 text-center">Built for contributors</h2>
        <p className="text-center text-neutral-500 mb-12 max-w-2xl mx-auto">
          Whether you're exploring your first contribution or looking for your next project.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-3">First-time contributors</h3>
            <p className="text-sm text-neutral-500 mb-4">
              Filter by beginner-friendly difficulty levels. See what technologies a project uses before you commit time.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 text-xs rounded bg-neutral-800 text-neutral-400">Beginner-friendly</span>
              <span className="px-2 py-1 text-xs rounded bg-neutral-800 text-neutral-400">Clear context</span>
            </div>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <h3 className="text-lg font-medium text-neutral-200 mb-3">Experienced developers</h3>
            <p className="text-sm text-neutral-500 mb-4">
              Find advanced challenges in domains you care about. Match issues to your existing skills and interests.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 text-xs rounded bg-neutral-800 text-neutral-400">Advanced filters</span>
              <span className="px-2 py-1 text-xs rounded bg-neutral-800 text-neutral-400">Domain-focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* For maintainers */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-neutral-900">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-neutral-100 mb-4">For maintainers</h2>
            <p className="text-neutral-400 mb-6">
              Control when your repository appears in discovery. Set visibility to public, paused, or off.
              Help the right contributors find the right work.
            </p>
            <Link href="/maintainers">
              <Button variant="secondary">Learn about maintainer controls</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-neutral-900">
        <div className="text-center mb-8">
          <p className="text-sm text-neutral-500 mb-2">
            Reposignal keeps exploration simple and focused on the work.
          </p>
          <Link href="/philosophy" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors underline decoration-neutral-700">
            Read our philosophy →
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
          <Link href="/about" className="hover:text-neutral-300 transition-colors">About</Link>
          <Link href="/faq" className="hover:text-neutral-300 transition-colors">FAQ</Link>
          <Link href="/privacy" className="hover:text-neutral-300 transition-colors">Privacy</Link>
        </div>
      </section>
    </div>
  );
}
