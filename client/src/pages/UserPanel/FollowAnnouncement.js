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

  const getAdvertisementDataToServer = () => {
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
        // console.log(data);
      });
    // .finally() => //loading false;
  };

  useEffect(() => {
    getAdvertisementFollowUserData();
    getAdvertisementDataToServer();
  }, []);

  const advIdFollow = advFollowUser.map(id => id.advertisementId);
  const x = allAdvertisements.filter(adv => advIdFollow.includes(adv._id));

  const advertisementRender = x.map(advertisement => (
    <SingleAdvertisement key={advertisement._id} data={advertisement} />
  ));

  return (
    <>
      <div>{advertisementRender}</div>
    </>
  );
};

export default FollowAnnouncement;
