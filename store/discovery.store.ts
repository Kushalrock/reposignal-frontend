/**
 * Discovery Store
 * Manages discovery filters and display preferences
 * Power-user filter surface with persistent state
 */

import { create } from 'zustand';

interface DiscoveryState {
  // Filters (IDs and primitives)
  difficulties: number[];
  languageIds: number[];
  frameworkIds: number[];
  domainIds: number[];
  includeUnclassified: boolean;

  // UI State
  expandedSections: Record<string, boolean>;

  // Actions
  toggleDifficulty: (difficulty: number) => void;
  setLanguageIds: (ids: number[]) => void;
  toggleLanguageId: (id: number) => void;
  setFrameworkIds: (ids: number[]) => void;
  toggleFrameworkId: (id: number) => void;
  setDomainIds: (ids: number[]) => void;
  toggleDomainId: (id: number) => void;
  setIncludeUnclassified: (value: boolean) => void;
  toggleSection: (sectionName: string) => void;
  clearFilters: () => void;
}

export const useDiscoveryStore = create<DiscoveryState>()((set) => ({
  difficulties: [],
  languageIds: [],
  frameworkIds: [],
  domainIds: [],
  includeUnclassified: false,
  expandedSections: {
    difficulty: true,
    languages: true,
    frameworks: true,
    domains: true,
  },

  toggleDifficulty: (difficulty) =>
    set((s) => ({
      difficulties: s.difficulties.includes(difficulty)
        ? s.difficulties.filter((d) => d !== difficulty)
        : [...s.difficulties, difficulty].sort(),
    })),

  setLanguageIds: (ids) => set({ languageIds: ids }),

  toggleLanguageId: (id) =>
    set((s) => ({
      languageIds: s.languageIds.includes(id)
        ? s.languageIds.filter((lid) => lid !== id)
        : [...s.languageIds, id],
    })),

  setFrameworkIds: (ids) => set({ frameworkIds: ids }),

  toggleFrameworkId: (id) =>
    set((s) => ({
      frameworkIds: s.frameworkIds.includes(id)
        ? s.frameworkIds.filter((fid) => fid !== id)
        : [...s.frameworkIds, id],
    })),

  setDomainIds: (ids) => set({ domainIds: ids }),

  toggleDomainId: (id) =>
    set((s) => ({
      domainIds: s.domainIds.includes(id)
        ? s.domainIds.filter((did) => did !== id)
        : [...s.domainIds, id],
    })),

  setIncludeUnclassified: (value) => set({ includeUnclassified: value }),

  toggleSection: (sectionName) =>
    set((s) => ({
      expandedSections: {
        ...s.expandedSections,
        [sectionName]: !s.expandedSections[sectionName],
      },
    })),

  clearFilters: () =>
    set({
      difficulties: [],
      languageIds: [],
      frameworkIds: [],
      domainIds: [],
      includeUnclassified: false,
    }),
}));
