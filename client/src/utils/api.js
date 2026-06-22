const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const apiFetch = (endpoint) => {
  return fetch(`${API_URL}${endpoint}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then((response) => response.json())
}