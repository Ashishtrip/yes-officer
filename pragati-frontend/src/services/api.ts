import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add the auth token
apiClient.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const api = {
  // Tenders
  getTenders: () => apiClient.get('/tenders').then(res => res.data),
  getTenderById: (id: string) => apiClient.get(`/tenders/${id}`).then(res => res.data),

  // Bids
  getBidDetails: (id: string) => apiClient.get(`/bids/${id}`).then(res => res.data),
  submitPoDecision: (id: string, decision: 'APPROVED' | 'REJECTED', comments: string) => 
    apiClient.post(`/bids/${id}/decision`, { decision, comments }).then(res => res.data),
};
