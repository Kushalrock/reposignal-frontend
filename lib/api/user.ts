/**
 * User API Client
 * Handles all authenticated user API calls
 */

import { apiPost, apiGet } from './client';
import { userRoutes } from './routes';

export interface Profile {
  githubUserId: number;
  username: string;
  avatarUrl: string | null;
  bio: string | null;
}

export interface UpdateProfileData {
  avatarUrl?: string | null;
  bio?: string | null;
}

export interface RepositorySettings {
  state: 'off' | 'public' | 'paused';
  allowUnclassified?: boolean;
}

export interface LogEntry {
  id: number;
  actorType: 'system' | 'user' | 'bot';
  actorGithubId: number | null;
  actorUsername: string | null;
  action: string;
  entityType: string;
  entityId: string;
  context: any;
  createdAt: string;
}

export async function updateProfile(
  data: UpdateProfileData,
  token: string
): Promise<Profile> {
  return apiPost<Profile>(userRoutes.updateProfile, data, { token });
}

export async function updateRepositorySettings(
  repoId: number,
  settings: RepositorySettings,
  token: string
): Promise<any> {
  return apiPost<any>(userRoutes.updateRepositorySettings(repoId), settings, { token });
}

export async function getRepositoryLogs(
  repoId: number,
  token: string,
  params: { limit?: number; offset?: number } = {}
): Promise<LogEntry[]> {
  const queryParams = new URLSearchParams();
  if (params.limit) queryParams.append('limit', params.limit.toString());
  if (params.offset) queryParams.append('offset', params.offset.toString());

  const url = `${userRoutes.getRepositoryLogs(repoId)}?${queryParams.toString()}`;
  return apiGet<LogEntry[]>(url, { token });
}
