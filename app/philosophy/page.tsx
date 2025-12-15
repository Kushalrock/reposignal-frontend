/**
 * Philosophy Page — optional reading
 */

import Link from 'next/link';
import { Button } from '@/components/common/Button';

export default function PhilosophyPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="text-center mb-16">
        <div className="inline-block px-4 py-2 rounded-full bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400 mb-6">
          💭 Optional Reading
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-100 mb-4">Our Philosophy</h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">How Reposignal thinks about discovery and contribution.</p>
      </header>

      {/* Philosophy principles grid */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-neutral-100 mb-6 text-center">How we think about discovery</h2>
        <p className="text-neutral-400 mb-12 max-w-3xl mx-auto text-center">
          These principles guide every decision we make about how Reposignal works.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <div className="text-3xl mb-4">🎮</div>
            <h2 className="text-lg font-medium text-neutral-200 mb-3">Why we avoid gamification</h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Scores, streaks, and leaderboards can push people toward the wrong goals. We'd rather help you find work that feels genuinely useful, then let the repository's community guide the rest. No artificial incentives.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <div className="text-3xl mb-4">📊</div>
            <h2 className="text-lg font-medium text-neutral-200 mb-3">No contributor performance tracking</h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Contribution is collaborative, not competitive. We don't rate individuals, track stats, or compare output across contributors. Reposignal is a place to discover opportunities, not measure people.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <div className="text-3xl mb-4">🛡️</div>
            <h2 className="text-lg font-medium text-neutral-200 mb-3">Maintainers control visibility</h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Every project has seasons. Maintainers can set discovery to public, paused, or off, giving them full control over when their issues appear. Invite contribution when it's actually helpful.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <div className="text-3xl mb-4">🧭</div>
            <h2 className="text-lg font-medium text-neutral-200 mb-3">A reference surface, not a requirement</h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Reposignal is here when you want a clearer way to explore open source. Use it when it helps. Head to GitHub when you're ready to contribute. This tool exists to make browsing easier, not to change how you work.
            </p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="border-t border-neutral-900 pt-20 mb-20">
        <h2 className="text-3xl font-semibold text-neutral-100 mb-12 text-center">Core values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8 text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-lg font-medium text-neutral-200 mb-3">Trust over growth</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              We prioritize building a tool contributors and maintainers trust, even if it means growing more slowly.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8 text-center">
            <div className="text-4xl mb-4">🌙</div>
            <h3 className="text-lg font-medium text-neutral-200 mb-3">Calm by default</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              No notifications, no urgency, no pressure. Browse issues at your own pace and contribute when it makes sense.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8 text-center">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-lg font-medium text-neutral-200 mb-3">Anonymous-first</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              You can explore and discover without creating an account. Sign in only when you want to save preferences.
            </p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="border-t border-neutral-900 pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-4">Experience the difference</h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            See how a calm, trust-first approach to discovery feels in practice.
          </p>
          <Link href="/discovery">
            <Button variant="primary" size="lg">Start exploring</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
