/**
 * UI Store
 * Manages UI state (modals, overlays, theme)
 */

import { create } from 'zustand';

interface IssueDetailOverlay {
  issueId: number;
  repoId: number;
}

interface UIState {
  // Overlays
  issueDetailOverlay: IssueDetailOverlay | null;
  
  // Modals
  showQuestionnaireModal: boolean;
  
  // Actions
  openIssueDetail: (issueId: number, repoId: number) => void;
  closeIssueDetail: () => void;
  openQuestionnaire: () => void;
  closeQuestionnaire: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  issueDetailOverlay: null,
  showQuestionnaireModal: false,

  openIssueDetail: (issueId, repoId) =>
    set({ issueDetailOverlay: { issueId, repoId } }),

  closeIssueDetail: () => set({ issueDetailOverlay: null }),

  openQuestionnaire: () => set({ showQuestionnaireModal: true }),

  closeQuestionnaire: () => set({ showQuestionnaireModal: false }),
}));
