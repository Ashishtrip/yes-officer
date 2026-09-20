import { apiClient } from '@/lib/apiClient';

export const api = {
  // Auth
  getMe: () => apiClient('/auth/me').then((res: any) => res.data),

  // Tenders
  getTenders: () => apiClient('/tenders').then((res: any) => res.data),
  getTenderById: (id: string) => apiClient(`/tenders/${id}`).then((res: any) => res.data),

  // Bids
  getBidDetails: (id: string) => apiClient(`/bids/${id}`).then((res: any) => res.data),
  submitPoDecision: (id: string, decision: 'APPROVED' | 'REJECTED', comments: string) => 
    apiClient(`/bids/${id}/decision`, { data: { decision, comments } }).then((res: any) => res.data),

  // Audit Logs
  getAuditLogs: (params?: any) => {
    const query = params ? '?' + new URLSearchParams(params).toString() : '';
    return apiClient(`/audit${query}`).then((res: any) => res.data);
  },

  // Config / Rules
  getConfigRules: () => apiClient('/config/compliance-rules').then((res: any) => res.data),
  getPortalConnectors: () => apiClient('/config/portal-connectors').then((res: any) => res.data),
  updateConfigRule: (id: string, data: any) => apiClient(`/config/rules/${id}`, { data, method: 'PUT' }).then((res: any) => res.data),

  // Interactions
  getClarifications: () => apiClient('/interaction/clarifications').then((res: any) => res.data),
  getGrievances: () => apiClient('/interaction/grievances').then((res: any) => res.data),

  // Users
  getUsers: () => apiClient('/users').then((res: any) => res.data || res),
  getUserById: (id: string) => apiClient(`/users/${id}`).then((res: any) => res.data || res),

  // Vigilance Analytics
  getVigilanceStats: () => apiClient('/vigilance/analytics').then((res: any) => res.data),
  getVigilanceAlerts: () => apiClient('/vigilance/forensics').then((res: any) => res.data),
};
