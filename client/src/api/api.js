export const API_BASE_URL = 'adv-server-paullina26-paulinas-projects-d76507c2.vercel.app/api/';

export const headers = {
  Accept: 'application.json',
  'Content-Type': 'application/json',
};

export const API = {
  register: `${API_BASE_URL}auth/register`,
  login: `${API_BASE_URL}auth/login`,
  user: `${API_BASE_URL}auth/user`,
  postAdvertisement: `${API_BASE_URL}advertisement/add`,
  getAdvertisement: `${API_BASE_URL}advertisement/all`,
  getAdvertisementUser: `${API_BASE_URL}advertisement/all-user`,
  postFavoriteAdvertisement: `${API_BASE_URL}favorites/update`,
  getFavoriteAdvertisementUser: `${API_BASE_URL}favorites/user-favorites`,
};

//  ogłoszenia danego usera przekazać token do zapytania /all-user
// PUT favorite/favorite - dodanie/usunięcie
// GET favorite/user-favorites - pobranie wszystkich ulubionych usera
