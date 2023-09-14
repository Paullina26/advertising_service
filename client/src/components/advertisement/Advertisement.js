import { API, headers } from 'api/api';
import { useEffect, useState } from 'react';
import SingleAdvertisement from './SingleAdvertisement';

export const Advertisement = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [advFollowUser, setAdvFollowUser] = useState([]);
  // const [isLoading]

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
        setAdvertisements(data);
        // console.log('DataAdv', data);
      });
    // .finally() => //loading false;
  };

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

  useEffect(() => {
    getAdvertisementFollowUserData();
    getAdvertisementData();
  }, []);
  // console.log('AllAdv', advertisements);
  // console.log('Follow', advFollowUser);

  const advIdFollow = advFollowUser.filter(adv => adv.isFav).map(adv => adv.advertisementId);
  // console.log('ID', advIdFollow);
  const advFollow = advertisements.filter(adv => advIdFollow.includes(adv._id));
  // console.log('includes', advFollow);
  const xID = advFollow.map(adv => adv._id);

  // console.log('testy', advertisements.map(adv => adv._id).includes(xID));
  // console.log('testy', advertisements.map(adv => adv._id)xID.includes(adv._id));

  const advertisementRender = advertisements.map(adv => (
    <SingleAdvertisement key={adv._id} data={adv} isFollow={xID.includes(adv._id)} />
  ));

  return <div>{advertisementRender.length === 0 ? 'Brak ogłoszeń' : advertisementRender}</div>;
};

export default Advertisement;
