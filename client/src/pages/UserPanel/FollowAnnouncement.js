import { API, headers } from 'api/api';
import { useEffect, useState } from 'react';
import SingleAdvertisement from '../../components/advertisement/SingleAdvertisement';

const FollowAnnouncement = () => {
  const [advertisementsUser, setAdvertisementsUser] = useState([]);

  const getAdvertisementUserDataToServer = () => {
    const token = localStorage.TOKEN;

    fetch(API.getFavoriteAdvertisementUser, {
      method: 'GET',
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : null,
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setAdvertisementsUser(data);
      });
    console.log(advertisementsUser);
  };

  useEffect(() => {
    getAdvertisementUserDataToServer();
  }, []);

  return (
    <>
      <div>Polubione użytkownika</div>
    </>
  );
};

export default FollowAnnouncement;
