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

export function listEmployees(fetchWithAuth: FetchWithAuth, params?: string) {
  const qs = params ? `?${params}` : '';
  return fetchWithAuth(`${API_BASE_URL}/employees${qs}`).then((res) => asJson<any>(res));
}

export function getEmployee(fetchWithAuth: FetchWithAuth, id: number) {
  return fetchWithAuth(`${API_BASE_URL}/employees/${id}`).then((res) => asJson<any>(res));
}
