import { API, headers } from 'api/api';
import { useEffect, useState } from 'react';
import SingleAdvertisement from '../../components/advertisement/SingleAdvertisement';

const UserAnnouncement = () => {
  const [advertisementsUser, setAdvertisementsUser] = useState([]);

  const getAdvertisementUserDataToServer = () => {
    const token = localStorage.TOKEN;

    fetch(API.getAdvertisementUser, {
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
  };

  useEffect(() => {
    getAdvertisementUserDataToServer();
  }, []);

  const advertisementRender = advertisementsUser.map(advertisement => (
    <SingleAdvertisement key={advertisement._id} data={advertisement} />
  ));

  return (
    <>
      <div>{advertisementRender.length === 0 ? 'Brak ogłoszeń' : advertisementRender}</div>
    </>
  );
};

export default UserAnnouncement;
