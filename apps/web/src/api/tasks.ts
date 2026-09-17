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

export function listTasks(fetchWithAuth: FetchWithAuth) {
  return fetchWithAuth(`${API_BASE_URL}/tasks/my-tasks`).then((res) => asJson<any>(res));
}

export function createTask(fetchWithAuth: FetchWithAuth, data: any) {
  return fetchWithAuth(`${API_BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => asJson<any>(res));
}

export function updateTaskStatus(fetchWithAuth: FetchWithAuth, taskId: number, status: string) {
  return fetchWithAuth(`${API_BASE_URL}/tasks/${taskId}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  }).then((res) => asJson<any>(res));
}
