/**
 * Explore Store
 * Manages guided exploration preferences before discovery
 * IDs only — no display names cached
 */

import { create } from 'zustand';

export type ExploreStep = 1 | 2 | 3;

interface ExploreState {
  // Step 1: Difficulty
  selectedDifficulties: number[];

  // Step 2: Languages & Frameworks
  selectedLanguageIds: number[];
  selectedFrameworkIds: number[];
  languageSearchQuery: string;
  frameworkSearchQuery: string;

  // Step 2.5: Unclassified
  includeUnclassified: boolean;

  // Step 3: Domains
  selectedDomainIds: number[];
  domainSearchQuery: string;

  // Navigation
  currentStep: ExploreStep;

  // Actions
  toggleDifficulty: (difficulty: number) => void;
  toggleLanguageId: (id: number) => void;
  toggleFrameworkId: (id: number) => void;
  toggleDomainId: (id: number) => void;
  setLanguageSearchQuery: (query: string) => void;
  setFrameworkSearchQuery: (query: string) => void;
  setDomainSearchQuery: (query: string) => void;
  setIncludeUnclassified: (value: boolean) => void;
  setCurrentStep: (step: ExploreStep) => void;
  reset: () => void;

  // Build redirect URL
  buildQueryString: () => string;
}

export const useExploreStore = create<ExploreState>()((set, get) => ({
  selectedDifficulties: [],
  selectedLanguageIds: [],
  selectedFrameworkIds: [],
  languageSearchQuery: '',
  frameworkSearchQuery: '',
  includeUnclassified: false,
  selectedDomainIds: [],
  domainSearchQuery: '',
  currentStep: 1,

  toggleDifficulty: (difficulty) =>
    set((s) => ({
      selectedDifficulties: s.selectedDifficulties.includes(difficulty)
        ? s.selectedDifficulties.filter((d) => d !== difficulty)
        : [...s.selectedDifficulties, difficulty],
    })),

  toggleLanguageId: (id) =>
    set((s) => ({
      selectedLanguageIds: s.selectedLanguageIds.includes(id)
        ? s.selectedLanguageIds.filter((lid) => lid !== id)
        : [...s.selectedLanguageIds, id],
    })),

  toggleFrameworkId: (id) =>
    set((s) => ({
      selectedFrameworkIds: s.selectedFrameworkIds.includes(id)
        ? s.selectedFrameworkIds.filter((fid) => fid !== id)
        : [...s.selectedFrameworkIds, id],
    })),

  toggleDomainId: (id) =>
    set((s) => ({
      selectedDomainIds: s.selectedDomainIds.includes(id)
        ? s.selectedDomainIds.filter((did) => did !== id)
        : [...s.selectedDomainIds, id],
    })),

  setLanguageSearchQuery: (query) => set({ languageSearchQuery: query }),

  setFrameworkSearchQuery: (query) => set({ frameworkSearchQuery: query }),

  setDomainSearchQuery: (query) => set({ domainSearchQuery: query }),

  setIncludeUnclassified: (value) => set({ includeUnclassified: value }),

  setCurrentStep: (step) => set({ currentStep: step }),

  reset: () =>
    set({
      selectedDifficulties: [],
      selectedLanguageIds: [],
      selectedFrameworkIds: [],
      languageSearchQuery: '',
      frameworkSearchQuery: '',
      includeUnclassified: false,
      selectedDomainIds: [],
      domainSearchQuery: '',
      currentStep: 1,
    }),

  buildQueryString: () => {
    const s = get();
    const params = new URLSearchParams();

    if (s.selectedDifficulties.length > 0) {
      params.set('difficulties', s.selectedDifficulties.join(','));
    }
    if (s.selectedLanguageIds.length > 0) {
      params.set('languageIds', s.selectedLanguageIds.join(','));
    }
    if (s.selectedFrameworkIds.length > 0) {
      params.set('frameworkIds', s.selectedFrameworkIds.join(','));
    }
    if (s.selectedDomainIds.length > 0) {
      params.set('domainIds', s.selectedDomainIds.join(','));
    }
    if (s.includeUnclassified) {
      params.set('includeUnclassified', '1');
    }

    return params.toString();
  },
}));
