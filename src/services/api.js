// services/api.js

const API_BASE_URL = 'http://localhost:3001';

const fetchSellers = async () => {
  const response = await fetch(`${API_BASE_URL}/seller`);
  const data = await response.json();
  return data;
};

const updateSeller = async (id, updatedData) => {
  const response = await fetch(`${API_BASE_URL}/seller/${id}`, {
    method: 'PATCH', // or 'PUT' depending on your API
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    throw new Error('Failed to update seller on the server');
  }
};

export { fetchSellers, updateSeller };
