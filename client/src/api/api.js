export const API_BASE_URL = 'http://localhost:8080/api/';

export const headers = {
  Accept: 'application.json',
  'Content-Type': 'application/json',
};

export const API = {
  login: `${API_BASE_URL}auth/login`,
  postAdvertisement: `${API_BASE_URL}advertisement/add`,
  getAdvertisement: `${API_BASE_URL}advertisement/all`,
  getAdvertisementUser: `${API_BASE_URL}advertisement/all-user`,
  postFavoriteAdvertisement: `${API_BASE_URL}favorites/update`,
  getFavoriteAdvertisementUser: `${API_BASE_URL}favorites/user-favorites`,
};

//  ogłoszenia danego usera przekazać token do zapytania /all-user
// PUT favorite/favorite - dodanie/usunięcie
// GET favorite/user-favorites - pobranie wszystkich ulubionych usera
