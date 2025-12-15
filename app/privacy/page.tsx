/**
 * Privacy Page
 * Plain language privacy and data use policy
 */

import Link from 'next/link';
import { Button } from '@/components/common/Button';

export default function PrivacyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="text-center mb-16">
        <div className="inline-block px-4 py-2 rounded-full bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400 mb-6">
          🔒 Privacy & Data Use
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-100 mb-4">Privacy Policy</h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
          We collect minimal data and prioritize your privacy. Here's exactly what we do.
        </p>
      </header>

      <div className="space-y-12">
        {/* What we collect */}
        <section>
          <div className="flex items-start gap-4 mb-6">
            <div className="text-3xl">📊</div>
            <div>
              <h2 className="text-2xl font-semibold text-neutral-100 mb-2">
                What data we collect
              </h2>
              <p className="text-neutral-400">
                Reposignal collects minimal data required to provide the service.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-base font-medium text-neutral-200 mb-3">Anonymous users</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Discovery preferences (difficulty, languages, frameworks) are stored locally in your browser. 
                We do not track your activity or behavior.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-base font-medium text-neutral-200 mb-3">Logged-in users</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Your GitHub username, avatar, and bio (if provided). Session tokens are used for authentication only.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-base font-medium text-neutral-200 mb-3">Maintainers</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Repository visibility settings (public/paused/off) and activity logs for your repositories.
              </p>
            </div>
          </div>
        </section>

        {/* What we don't collect */}
        <section className="border-t border-neutral-900 pt-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-3xl">🚫</div>
            <div>
              <h2 className="text-2xl font-semibold text-neutral-100 mb-2">
                What we don't collect
              </h2>
              <p className="text-neutral-400">
                We deliberately avoid tracking or measuring individual behavior.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg border border-neutral-800 bg-neutral-900/20 p-5">
              <div className="text-xl mt-1">✓</div>
              <div>
                <p className="text-sm text-neutral-300 font-medium mb-1">No browsing behavior tracking</p>
                <p className="text-sm text-neutral-500">We don't track which issues you view or how long you spend browsing.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-neutral-800 bg-neutral-900/20 p-5">
              <div className="text-xl mt-1">✓</div>
              <div>
                <p className="text-sm text-neutral-300 font-medium mb-1">No performance metrics</p>
                <p className="text-sm text-neutral-500">We don't collect analytics on your contributions or measure your activity.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-neutral-800 bg-neutral-900/20 p-5">
              <div className="text-xl mt-1">✓</div>
              <div>
                <p className="text-sm text-neutral-300 font-medium mb-1">No third-party sharing</p>
                <p className="text-sm text-neutral-500">We don't sell or share your data with anyone. Period.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-neutral-800 bg-neutral-900/20 p-5">
              <div className="text-xl mt-1">✓</div>
              <div>
                <p className="text-sm text-neutral-300 font-medium mb-1">No advertising or profiling</p>
                <p className="text-sm text-neutral-500">We don't build profiles, target ads, or monetize your information.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How we use data */}
        <section className="border-t border-neutral-900 pt-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-3xl">⚙️</div>
            <div>
              <h2 className="text-2xl font-semibold text-neutral-100 mb-2">
                How we use your data
              </h2>
              <p className="text-neutral-400">
                Data is used exclusively to provide the Reposignal service.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="text-lg mt-1">→</div>
                <div>
                  <p className="text-sm text-neutral-300 font-medium mb-1">Discovery preferences</p>
                  <p className="text-sm text-neutral-500">Used to rank and filter issues based on your interests and skill level.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-lg mt-1">→</div>
                <div>
                  <p className="text-sm text-neutral-300 font-medium mb-1">Authentication data</p>
                  <p className="text-sm text-neutral-500">Used to identify you and provide maintainer features when signed in.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-lg mt-1">→</div>
                <div>
                  <p className="text-sm text-neutral-300 font-medium mb-1">Repository settings</p>
                  <p className="text-sm text-neutral-500">Control when and how your issues appear in discovery feeds.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Data retention & Security */}
        <section className="border-t border-neutral-900 pt-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl">🗄️</div>
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-100 mb-2">
                    Data retention
                  </h2>
                </div>
              </div>
              <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
                <p>
                  Anonymous preferences are stored in your browser and can be cleared at any time.
                  Logged-in user data is retained as long as your account is active.
                </p>
                <p>
                  You can request account deletion at any time. All associated data will be permanently removed
                  from our systems.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl">🔐</div>
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-100 mb-2">
                    Security
                  </h2>
                </div>
              </div>
              <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
                <p>
                  We use industry-standard security practices to protect your data. Session tokens
                  are encrypted, and API endpoints require authentication for sensitive operations.
                </p>
                <p>
                  All data is transmitted over HTTPS, and we regularly review our security practices
                  to ensure your information stays safe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Updates & Contact */}
        <section className="border-t border-neutral-900 pt-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8">
              <div className="text-2xl mb-4">📝</div>
              <h2 className="text-lg font-semibold text-neutral-100 mb-3">
                Changes to this policy
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                We may update this privacy policy as Reposignal evolves. Changes will be posted on
                this page with a revision date. Continued use of the service constitutes acceptance of updates.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8">
              <div className="text-2xl mb-4">💬</div>
              <h2 className="text-lg font-semibold text-neutral-100 mb-3">
                Questions or concerns?
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                If you have questions about privacy or data use, or want to request account deletion,
                please reach out to us.
              </p>
              <p className="text-sm text-neutral-500 italic">Contact information coming soon.</p>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="border-t border-neutral-900 pt-12">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-12 text-center">
            <h2 className="text-2xl font-semibold text-neutral-100 mb-4">Privacy-first by design</h2>
            <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
              Reposignal is built on trust. We collect only what's necessary and never measure or track your contributions.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/philosophy">
                <Button variant="secondary" size="lg">Our Philosophy</Button>
              </Link>
              <Link href="/discovery">
                <Button variant="primary" size="lg">Start exploring</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
