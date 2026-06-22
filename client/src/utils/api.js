const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const apiFetch = (endpoint) => {
  return fetch(`${API_URL}${endpoint}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then((response) => response.json())
}

export const apiPost = (endpoint, body) => {
  return fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify(body),
  }).then((response) => {
    if (!response.ok) throw new Error('Erreur lors de l\'envoi')
    return response.json()
  })
}