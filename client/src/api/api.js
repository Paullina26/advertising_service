export const API_BASE_URL = 'http://localhost:8080/api/';

export const headers = {
  Accept: 'application.json',
  'Content-Type': 'application/json',
};

export const API = {
  login: `${API_BASE_URL}auth/login`,
  addAdvertisement: `${API_BASE_URL}advertisement/add`,
};
