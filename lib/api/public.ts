/**
 * Public API Client
 * Handles all public (unauthenticated) API calls
 */

import { apiGet } from './client';
import { publicRoutes } from './routes';

export interface Issue {
  id: number;
  githubIssueId: number;
  difficulty: 1 | 2 | 3 | 4 | 5 | null;
  issueType: 'docs' | 'bug' | 'feature' | 'refactor' | 'test' | 'infra' | null;
  hidden: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Repository {
  githubRepoId: number;
  owner: string;
  name: string;
  starsCount: number;
  forksCount: number;
  openIssuesCount: number;
  domains: string[];
  frameworks: Array<{
    framework: string;
    source: 'inferred' | 'maintainer';
  }>;
  languages: string[];
}

export interface DiscoveryResult {
  score: number;
  issue: Issue;
  repository: Repository;
  feedback: {
    avgDifficultyBucket: number | null;
    avgResponsivenessBucket: number | null;
  } | null;
}

export interface DiscoveryParams {
  difficulties?: number[];
  languageIds?: number[];
  frameworkIds?: number[];
  domainIds?: number[];
  includeUnclassified?: boolean;
  limit?: number;
  offset?: number;
}

export async function getDiscovery(params: DiscoveryParams = {}): Promise<DiscoveryResult[]> {
  const queryParams = new URLSearchParams();

  if (params.difficulties && params.difficulties.length > 0) {
    params.difficulties.forEach((d) => queryParams.append('difficulty', d.toString()));
  }
  if (params.languageIds && params.languageIds.length > 0) {
    params.languageIds.forEach((l) => queryParams.append('languageIds', l.toString()));
  }
  if (params.frameworkIds && params.frameworkIds.length > 0) {
    params.frameworkIds.forEach((f) => queryParams.append('frameworkIds', f.toString()));
  }
  if (params.domainIds && params.domainIds.length > 0) {
    params.domainIds.forEach((d) => queryParams.append('domainIds', d.toString()));
  }
  if (params.includeUnclassified) queryParams.append('includeUnclassified', 'true');
  if (params.limit) queryParams.append('limit', params.limit.toString());
  if (params.offset) queryParams.append('offset', params.offset.toString());

  const url = `${publicRoutes.discovery}?${queryParams.toString()}`;
  return apiGet<DiscoveryResult[]>(url);
}

export async function getRepository(id: number): Promise<Repository> {
  return apiGet<Repository>(publicRoutes.repository(id));
}

export async function getRepositoryIssues(
  id: number,
  params: { limit?: number; offset?: number } = {}
): Promise<Issue[]> {
  const queryParams = new URLSearchParams();
  if (params.limit) queryParams.append('limit', params.limit.toString());
  if (params.offset) queryParams.append('offset', params.offset.toString());

  const url = `${publicRoutes.repositoryIssues(id)}?${queryParams.toString()}`;
  return apiGet<Issue[]>(url);
}

export async function getRepositoryStats(id: number): Promise<any> {
  return apiGet<any>(publicRoutes.repositoryStats(id));
}

export async function healthCheck(): Promise<{ status: string; timestamp: string }> {
  return apiGet<{ status: string; timestamp: string }>(publicRoutes.health);
}
