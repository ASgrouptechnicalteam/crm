import { API_BASE_URL } from '../config';

type FetchWithAuth = (url: string, options?: RequestInit) => Promise<Response>;

async function asJson<T>(res: Response): Promise<T> {
  const data = await res.json();
  if (!res.ok) {
    const message = data?.error || data?.message || 'Request failed';
    throw { res, data, message };
  }
  return data as T;
}

export function listLeads(fetchWithAuth: FetchWithAuth) {
  return fetchWithAuth(`${API_BASE_URL}/leads`).then((res) => asJson<any>(res));
}

export function getLead(fetchWithAuth: FetchWithAuth, leadId: number) {
  return fetchWithAuth(`${API_BASE_URL}/leads/${leadId}`).then((res) => asJson<any>(res));
}

export function createLead(fetchWithAuth: FetchWithAuth, data: any) {
  return fetchWithAuth(`${API_BASE_URL}/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => asJson<any>(res));
}

export function updateLead(fetchWithAuth: FetchWithAuth, leadId: number, data: any) {
  return fetchWithAuth(`${API_BASE_URL}/leads/${leadId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => asJson<any>(res));
}
