// import { GlobalContext } from 'utils/GlobalContext';
import { API, headers } from 'api/api';
import { useContext, useEffect, useState } from 'react';
import SingleAdvertisement from './SingleAdvertisement';
import { GlobalContext } from 'utils/GlobalContext';

export const Advertisement = () => {
  const { isLogin, isLoading } = useContext(GlobalContext);
  const [advertisements, setAdvertisements] = useState([]);
  const [advIdFollow, setAdvIdFollow] = useState([]);
  // const context = useContext(GlobalContext);

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
        setAdvIdFollow(data.filter(adv => adv.isFav).map(adv => adv.advertisementId));
        getAdvertisementData();
      });
  };

  useEffect(() => {
    if (isLoading) return;

    if (isLogin) getAdvertisementFollowUserData();
    else getAdvertisementData();
  }, [isLoading]);

  const advertisementRender = advertisements.map(adv => {
    const isFollow = advIdFollow.includes(adv._id);

    return <SingleAdvertisement key={adv._id} data={adv} isFollow={isFollow} />;
  });

  return <div>{advertisementRender.length === 0 ? 'Brak ogłoszeń' : advertisementRender}</div>;
};

export default Advertisement;
