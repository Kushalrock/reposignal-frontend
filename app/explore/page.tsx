/**
 * Explore Page
 * Guided, calm card-based exploration preferences
 * Full-page flow with step indicator
 */

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useExploreStore } from '@/store/explore.store';
import {
  getLanguages,
  getFrameworks,
  getDomains,
  CanonicalLanguage,
  CanonicalFramework,
  CanonicalDomain,
} from '@/lib/api/meta';
import { Button } from '@/components/common/Button';

const DIFFICULTY_OPTIONS = [
  { value: 1, title: 'Very small', description: 'Minimal context, good first issue' },
  { value: 2, title: 'Small', description: 'Contained task, some reading' },
  { value: 3, title: 'Moderate', description: 'Meaningful work, needs understanding' },
  { value: 4, title: 'Advanced', description: 'Touches core logic' },
  { value: 5, title: 'Core', description: 'Architectural or system-level' },
];

export default function ExplorePage() {
  const router = useRouter();
  const {
    currentStep,
    selectedDifficulties,
    selectedLanguageIds,
    selectedFrameworkIds,
    selectedDomainIds,
    includeUnclassified,
    languageSearchQuery,
    frameworkSearchQuery,
    domainSearchQuery,
    toggleDifficulty,
    toggleLanguageId,
    toggleFrameworkId,
    toggleDomainId,
    setLanguageSearchQuery,
    setFrameworkSearchQuery,
    setDomainSearchQuery,
    setIncludeUnclassified,
    setCurrentStep,
    buildQueryString,
  } = useExploreStore();

  const [languages, setLanguages] = useState<CanonicalLanguage[]>([]);
  const [frameworks, setFrameworks] = useState<CanonicalFramework[]>([]);
  const [domains, setDomains] = useState<CanonicalDomain[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch meta data
  useEffect(() => {
    async function fetch() {
      try {
        const [langs, fws, doms] = await Promise.all([
          getLanguages(),
          getFrameworks(),
          getDomains(),
        ]);
        setLanguages(langs);
        setFrameworks(fws);
        setDomains(doms);
      } catch (err) {
        console.error('Failed to load meta data:', err);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  const handleSkip = () => {
    router.push('/discovery');
  };

  const handleComplete = () => {
    const query = buildQueryString();
    router.push(query ? `/discovery?${query}` : '/discovery');
  };

  const topLanguages = languages.slice(0, 10);
  const topFrameworks = frameworks.slice(0, 10);
  const topDomains = domains.slice(0, 10);

  const filteredLanguages = languageSearchQuery.trim()
    ? languages.filter((l) =>
        l.displayName.toLowerCase().includes(languageSearchQuery.toLowerCase()) ||
        l.matchingName.toLowerCase().includes(languageSearchQuery.toLowerCase())
      )
    : topLanguages;

  const filteredFrameworks = frameworkSearchQuery.trim()
    ? frameworks.filter((f) =>
        f.displayName.toLowerCase().includes(frameworkSearchQuery.toLowerCase()) ||
        f.matchingName.toLowerCase().includes(frameworkSearchQuery.toLowerCase())
      )
    : topFrameworks;

  const filteredDomains = domainSearchQuery.trim()
    ? domains.filter((d) =>
        d.displayName.toLowerCase().includes(domainSearchQuery.toLowerCase()) ||
        d.matchingName.toLowerCase().includes(domainSearchQuery.toLowerCase())
      )
    : topDomains;

  // Pinned selected cards that should always appear
  const pinnedLanguages = languages.filter((l) => selectedLanguageIds.includes(l.id));
  const pinnedFrameworks = frameworks.filter((f) => selectedFrameworkIds.includes(f.id));
  const pinnedDomains = domains.filter((d) => selectedDomainIds.includes(d.id));

  const visibleLanguages = [
    ...pinnedLanguages,
    ...filteredLanguages.filter((l) => !selectedLanguageIds.includes(l.id)),
  ];

  const visibleFrameworks = [
    ...pinnedFrameworks,
    ...filteredFrameworks.filter((f) => !selectedFrameworkIds.includes(f.id)),
  ];

  const visibleDomains = [
    ...pinnedDomains,
    ...filteredDomains.filter((d) => !selectedDomainIds.includes(d.id)),
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-neutral-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Step Indicator */}
        <div className="mb-8 text-center">
          <p className="text-sm text-neutral-500 mb-2">
            Step {currentStep} of 3
          </p>
          <div className="flex gap-1.5 justify-center">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-1 rounded-full ${
                  step <= currentStep ? 'bg-neutral-700 w-12' : 'bg-neutral-800 w-8'
                } transition-all`}
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8">
          {/* STEP 1: DIFFICULTY */}
          {currentStep === 1 && (
            <div>
              <h1 className="text-3xl font-semibold text-neutral-100 mb-2">
                What kind of issue are you looking for?
              </h1>
              <p className="text-neutral-400 mb-8">
                Select one or more difficulty levels. You can change this later.
              </p>

              <div className="space-y-3 mb-8">
                {DIFFICULTY_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => toggleDifficulty(opt.value)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedDifficulties.includes(opt.value)
                        ? 'border-neutral-600 bg-neutral-800'
                        : 'border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div className="font-medium text-neutral-100">{opt.title}</div>
                    <div className="text-sm text-neutral-500">{opt.description}</div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between gap-3">
                <Button variant="ghost" onClick={handleSkip}>
                  Skip
                </Button>
                <Button variant="secondary" onClick={() => setCurrentStep(2)}>
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2: LANGUAGES & FRAMEWORKS */}
          {currentStep === 2 && (
            <div>
              <h1 className="text-3xl font-semibold text-neutral-100 mb-2">
                What technologies do you work with?
              </h1>
              <p className="text-neutral-400 mb-8">
                Select languages and frameworks. This helps surface relevant opportunities.
              </p>

              <div className="space-y-8 mb-8">
                {/* Languages */}
                <div>
                  <h2 className="text-lg font-medium text-neutral-200 mb-3">Languages</h2>
                  <input
                    type="text"
                    placeholder="Search languages..."
                    value={languageSearchQuery}
                    onChange={(e) => setLanguageSearchQuery(e.target.value)}
                    className="w-full mb-4 px-4 py-2 rounded-lg border border-neutral-800 bg-neutral-900/40 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-neutral-700"
                  />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {visibleLanguages.map((lang) => (
                      <button
                        key={lang.id}
                        onClick={() => toggleLanguageId(lang.id)}
                        className={`p-3 rounded-lg border text-sm text-center transition-all ${
                          selectedLanguageIds.includes(lang.id)
                            ? 'border-neutral-600 bg-neutral-800 text-neutral-100 font-medium'
                            : 'border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        {lang.displayName}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Frameworks */}
                <div>
                  <h2 className="text-lg font-medium text-neutral-200 mb-3">Frameworks</h2>
                  <input
                    type="text"
                    placeholder="Search frameworks..."
                    value={frameworkSearchQuery}
                    onChange={(e) => setFrameworkSearchQuery(e.target.value)}
                    className="w-full mb-4 px-4 py-2 rounded-lg border border-neutral-800 bg-neutral-900/40 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-neutral-700"
                  />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {visibleFrameworks.map((fw) => (
                      <button
                        key={fw.id}
                        onClick={() => toggleFrameworkId(fw.id)}
                        className={`p-3 rounded-lg border text-sm text-center transition-all ${
                          selectedFrameworkIds.includes(fw.id)
                            ? 'border-neutral-600 bg-neutral-800 text-neutral-100 font-medium'
                            : 'border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        {fw.displayName}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Unclassified Issues */}
                <div className="pt-4 border-t border-neutral-800">
                  <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-neutral-900/40 transition-colors">
                    <input
                      type="checkbox"
                      checked={includeUnclassified}
                      onChange={(e) => setIncludeUnclassified(e.target.checked)}
                      className="mt-1 accent-neutral-700"
                    />
                    <div>
                      <p className="text-sm font-medium text-neutral-200">
                        Include issues without a difficulty label
                      </p>
                      <p className="text-xs text-neutral-500 mt-1">
                        Unclassified issues may require additional reading to understand scope and difficulty.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex justify-between gap-3">
                <Button variant="ghost" onClick={() => setCurrentStep(1)}>
                  Back
                </Button>
                <div className="flex gap-3">
                  <Button variant="ghost" onClick={handleSkip}>
                    Skip
                  </Button>
                  <Button variant="secondary" onClick={() => setCurrentStep(3)}>
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: DOMAINS */}
          {currentStep === 3 && (
            <div>
              <h1 className="text-3xl font-semibold text-neutral-100 mb-2">
                Any areas you're interested in?
              </h1>
              <p className="text-neutral-400 mb-8">
                Select domains that match your interests. This is optional.
              </p>

              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Search domains..."
                  value={domainSearchQuery}
                  onChange={(e) => setDomainSearchQuery(e.target.value)}
                  className="w-full mb-4 px-4 py-2 rounded-lg border border-neutral-800 bg-neutral-900/40 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-neutral-700"
                />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {visibleDomains.map((domain) => (
                    <button
                      key={domain.id}
                      onClick={() => toggleDomainId(domain.id)}
                      className={`p-3 rounded-lg border text-sm text-center transition-all ${
                        selectedDomainIds.includes(domain.id)
                          ? 'border-neutral-600 bg-neutral-800 text-neutral-100 font-medium'
                          : 'border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      {domain.displayName}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between gap-3">
                <Button variant="ghost" onClick={() => setCurrentStep(2)}>
                  Back
                </Button>
                <div className="flex gap-3">
                  <Button variant="ghost" onClick={handleSkip}>
                    Skip
                  </Button>
                  <Button variant="primary" onClick={handleComplete}>
                    Explore issues
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
