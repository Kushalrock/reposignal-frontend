/**
 * API Client
 * Base HTTP client for API requests
 */

import { checkApiAvailability } from './routes';

checkApiAvailability();

interface FetchOptions extends RequestInit {
  token?: string;
}

class ApiError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
    public details?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({
      error: {
        code: 'UNKNOWN_ERROR',
        message: 'An unknown error occurred',
      },
    }));

    throw new ApiError(
      response.status,
      error.error?.code || 'UNKNOWN_ERROR',
      error.error?.message || 'An unknown error occurred',
      error.error?.details
    );
  }

  return response.json();
}

export async function apiGet<T>(url: string, options?: FetchOptions): Promise<T> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (options?.token) {
    headers['Authorization'] = `Bearer ${options.token}`;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers,
    ...options,
  });

  return handleResponse<T>(response);
}

export async function apiPost<T>(
  url: string,
  data?: any,
  options?: FetchOptions
): Promise<T> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (options?.token) {
    headers['Authorization'] = `Bearer ${options.token}`;
  }

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: data ? JSON.stringify(data) : undefined,
    ...options,
  });

  return handleResponse<T>(response);
}

export async function apiDelete<T>(
  url: string,
  options?: FetchOptions
): Promise<T> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (options?.token) {
    headers['Authorization'] = `Bearer ${options.token}`;
  }

  const response = await fetch(url, {
    method: 'DELETE',
    headers,
    ...options,
  });

  return handleResponse<T>(response);
}

export { ApiError };
