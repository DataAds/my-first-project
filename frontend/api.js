// src/api.js
const API_URL = '/api';

export async function fetchHello() {
  const res = await fetch(`${API_URL}`);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}
