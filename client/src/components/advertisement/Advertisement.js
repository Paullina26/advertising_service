import { API, headers } from 'api/api';
import { useContext, useEffect, useState } from 'react';
import SingleAdvertisement from './SingleAdvertisement';
import { GlobalContext } from 'utils/GlobalContext';

export const Advertisement = () => {
  const { isLogin, isLoadingUser } = useContext(GlobalContext);
  const [advertisements, setAdvertisements] = useState([]);
  const [advIdFollow, setAdvIdFollow] = useState([]);

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
    if (isLoadingUser) return;
    if (isLogin) getAdvertisementFollowUserData();
    else getAdvertisementData();
  }, [isLoadingUser]);

  const advertisementRender = advertisements.map(adv => {
    const isFollow = advIdFollow.includes(adv._id);
    return <SingleAdvertisement key={adv._id} data={adv} isFollow={isFollow} />;
  });
  return <div>{advertisementRender.length === 0 ? 'Brak ogłoszeń' : advertisementRender}</div>;
};
export default Advertisement;
