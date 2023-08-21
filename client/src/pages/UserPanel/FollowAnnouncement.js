import { API, headers } from 'api/api';
import { useEffect, useState } from 'react';
import SingleAdvertisement from '../../components/advertisement/SingleAdvertisement';

const FollowAnnouncement = () => {
  const [advertisementsFollowUser, setAdvertisementsFollowUser] = useState([]);
  const [allAdvertisements, setAllAdvertisements] = useState([]);

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
        setAdvertisementsFollowUser(data);
      });
  };

  useEffect(() => {
    getAdvertisementUserDataToServer();
  }, []);
  console.log(advertisementsFollowUser);

  return (
    <>
      <div>Polubione użytkownika</div>
    </>
  );
};

export default FollowAnnouncement;
