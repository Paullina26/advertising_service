import { API, headers } from 'api/api';
import { useEffect, useState } from 'react';
import SingleAdvertisement from '../../components/advertisement/SingleAdvertisement';

const FollowAnnouncement = () => {
  const [advFollowUser, setAdvFollowUser] = useState([]);
  const [allAdvertisements, setAllAdvertisements] = useState([]);

  const getAdvertisementFollowUserData = () => {
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
        setAdvFollowUser(data);
      });
  };

  const getAdvertisementData = () => {
    // loading true
    fetch(API.getAdvertisement, {
      method: 'GET',
      headers,
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setAllAdvertisements(data);
      });
    // .finally() => //loading false;
  };

  useEffect(() => {
    getAdvertisementFollowUserData();
    getAdvertisementData();
  }, []);

  const advIdFollow = advFollowUser.filter(adv => adv.isFav).map(adv => adv.advertisementId);
  const advFollow = allAdvertisements.filter(adv => advIdFollow.includes(adv._id));

  const advertisementRender = advFollow.map(advertisement => (
    <SingleAdvertisement key={advertisement._id} data={advertisement} isFollow />
  ));

  return (
    <>
      <div>
        {advertisementRender.length === 0 ? 'Brak polubionych ogłoszeń' : advertisementRender}
      </div>
    </>
  );
};

export default FollowAnnouncement;
