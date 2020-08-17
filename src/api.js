import { storageService } from './utils/StorageService';
const API_VERSION = '/api/v1';
var BASE_URL = 'https://cp.perspectico.com';
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:3000';
} else {
  BASE_URL = process.env.REACT_APP_BASE_URL || 'https://cp.perspectico.com';
}

const getHeaders = () => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };
  const authToken = storageService.getAuthToken();
  if (authToken) {
    headers.authorization = `Bearer ${authToken}`;
  }
  return headers;
};

export const loginRequestApi = async (data) => {
  try {
    const response = await fetch(BASE_URL + `${API_VERSION}/login`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
