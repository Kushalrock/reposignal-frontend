/**
 * Meta API Client
 * Fetch canonical languages, frameworks, domains
 */

import { apiGet } from './client';

export interface CanonicalLanguage {
  id: number;
  matchingName: string;
  displayName: string;
}

export interface CanonicalFramework {
  id: number;
  matchingName: string;
  displayName: string;
  category?: string;
}

export interface CanonicalDomain {
  id: number;
  matchingName: string;
  displayName: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

export async function getLanguages(): Promise<CanonicalLanguage[]> {
  return apiGet<CanonicalLanguage[]>(`${API_BASE}/meta/languages`);
}

export async function getFrameworks(): Promise<CanonicalFramework[]> {
  const data = await apiGet<Record<string, CanonicalFramework[]>>(
    `${API_BASE}/meta/frameworks`
  );
  // Flatten categories into a single array
  return Object.values(data).flat();
}

export async function getFrameworksGrouped(): Promise<Record<string, CanonicalFramework[]>> {
  return apiGet<Record<string, CanonicalFramework[]>>(
    `${API_BASE}/meta/frameworks`
  );
}

export async function getDomains(): Promise<CanonicalDomain[]> {
  return apiGet<CanonicalDomain[]>(`${API_BASE}/meta/domains`);
}
