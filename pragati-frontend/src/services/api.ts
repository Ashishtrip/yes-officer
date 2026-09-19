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

// Response interceptor to handle 401 errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export const api = {
  // Auth
  getMe: () => apiClient.get('/auth/me').then(res => res.data),

  // Tenders
  getTenders: () => apiClient.get('/tenders').then(res => res.data),
  getTenderById: (id: string) => apiClient.get(`/tenders/${id}`).then(res => res.data),

  // Bids
  getBidDetails: (id: string) => apiClient.get(`/bids/${id}`).then(res => res.data),
  submitPoDecision: (id: string, decision: 'APPROVED' | 'REJECTED', comments: string) => 
    apiClient.post(`/bids/${id}/decision`, { decision, comments }).then(res => res.data),

  // Audit Logs
  getAuditLogs: (params?: any) => apiClient.get('/audit', { params }).then(res => res.data),

  // Config / Rules
  getConfigRules: () => apiClient.get('/config/compliance-rules').then(res => res.data),
  getPortalConnectors: () => apiClient.get('/config/portal-connectors').then(res => res.data),
  updateConfigRule: (id: string, data: any) => apiClient.put(`/config/rules/${id}`, data).then(res => res.data),

  // Interactions
  getClarifications: () => apiClient.get('/interaction/clarifications').then(res => res.data),
  getGrievances: () => apiClient.get('/interaction/grievances').then(res => res.data),

  // Users
  getUsers: () => apiClient.get('/users').then(res => res.data),
  getUserById: (id: string) => apiClient.get(`/users/${id}`).then(res => res.data),

  // Vigilance Analytics
  getVigilanceStats: () => apiClient.get('/vigilance/analytics').then(res => res.data),
  getVigilanceAlerts: () => apiClient.get('/vigilance/forensics').then(res => res.data),
};
