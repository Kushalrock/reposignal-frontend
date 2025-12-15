/**
 * Maintainer Store
 * Manages repositories that the user maintains
 */

import { create } from 'zustand';

interface MaintainedRepo {
  githubRepoId: number;
  owner: string;
  name: string;
  state: 'off' | 'public' | 'paused';
  allowUnclassified: boolean;
}

interface MaintainerState {
  repos: MaintainedRepo[];
  
  // Actions
  setRepos: (repos: MaintainedRepo[]) => void;
  updateRepoState: (githubRepoId: number, state: 'off' | 'public' | 'paused') => void;
  updateRepoSettings: (githubRepoId: number, settings: Partial<MaintainedRepo>) => void;
  clearRepos: () => void;
}

export const useMaintainerStore = create<MaintainerState>()((set) => ({
  repos: [],

  setRepos: (repos) => set({ repos }),

  updateRepoState: (githubRepoId, state) =>
    set((prevState) => ({
      repos: prevState.repos.map((repo) =>
        repo.githubRepoId === githubRepoId ? { ...repo, state } : repo
      ),
    })),

  updateRepoSettings: (githubRepoId, settings) =>
    set((prevState) => ({
      repos: prevState.repos.map((repo) =>
        repo.githubRepoId === githubRepoId ? { ...repo, ...settings } : repo
      ),
    })),

  clearRepos: () => set({ repos: [] }),
}));
