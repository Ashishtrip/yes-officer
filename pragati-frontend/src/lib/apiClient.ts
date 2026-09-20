export class ApiError extends Error {
  status: number;
  payload: any;

  constructor(message: string, status: number, payload: any = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.payload = payload;
  }
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';

interface RequestOptions extends RequestInit {
  data?: any;
}

export const apiClient = async (endpoint: string, options: RequestOptions = {}) => {
  const { data, headers, ...customConfig } = options;

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const config: RequestInit = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    ...customConfig,
  };

  const res = await fetch(`${API_BASE_URL}${endpoint}`, config);

  if (!res.ok) {
    let payload = null;
    try {
      payload = await res.json();
    } catch (_) {}

    throw new ApiError(
      payload?.error || payload?.message || 'Request failed',
      res.status,
      payload
    );
  }

  // Handle empty responses safely
  if (res.status === 204) return null;

  const text = await res.text();
  return text ? JSON.parse(text) : null;
};

// Retry with Exponential Backoff
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const fetchWithBackoff = async (fn: () => Promise<any>, retries = 3, delay = 300): Promise<any> => {
  try {
    return await fn();
  } catch (err: any) {
    const isAbort = err.name === 'AbortError';
    const isHttpError = typeof err.status === 'number';
    const isRetryable = !isAbort && (!isHttpError || err.status >= 500);

    if (retries <= 0 || !isRetryable) throw err;

    const nextDelay = delay * 2 + Math.random() * 100;
    await sleep(nextDelay);

    return fetchWithBackoff(fn, retries - 1, nextDelay);
  }
};
