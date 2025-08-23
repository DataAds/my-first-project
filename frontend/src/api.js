// src/api.js
const API_URL = '/api'; // путь, который nginx проксирует на FastAPI

export async function fetchHello() {
  const res = await fetch(`${API_URL}/`); // делаем GET-запрос на /api/
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json(); // возвращаем JSON от FastAPI
}
