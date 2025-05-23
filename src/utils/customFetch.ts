type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: any;
};

const BASE_URL = "https://fb2f-1-215-227-114.ngrok-free.app";

export const customFetch = async <T = any>(
  endPoint: string,
  options: FetchOptions = {}
): Promise<T> => {
  const { method = "GET", headers = {}, body } = options;

  const res = await fetch(BASE_URL + endPoint, {
    method,
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "69420",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API Error: ${res.status} - ${errorText}`);
  }

  return res.json();
};
