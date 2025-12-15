/**
 * Setup API Client
 * Handles first-time setup context and completion
 */

import { apiGet, apiPost } from './client';
import { publicRoutes } from './routes';

export interface SetupContextResponse {
  accountLogin: string;
  repositories: Array<{
    id: number;
    owner: string;
    name: string;
    state: 'off' | 'public' | 'paused';
  }>;
  setupExpiresAt: string;
}

export interface SetupCompletePayload {
  installation_id: number;
  repositories: Array<{
    repoId: number;
    state: 'off' | 'public' | 'paused';
  }>;
  settings: {
    allowUnclassified: boolean;
    allowClassification: boolean;
    allowInference: boolean;
    feedbackEnabled: boolean;
  };
}

export async function getSetupContext(
  installationId: number
): Promise<SetupContextResponse> {
  const url = `${publicRoutes.setupContext}?installation_id=${installationId}`;
  return apiGet<SetupContextResponse>(url);
}

export async function completeSetup(
  payload: SetupCompletePayload
): Promise<{ success: boolean }> {
  return apiPost<{ success: boolean }>(publicRoutes.setupComplete, payload);
}
