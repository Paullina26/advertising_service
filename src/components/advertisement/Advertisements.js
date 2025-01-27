import { API, headers } from 'api/api';
import { useContext, useEffect, useState } from 'react';
import SingleAdvertisement from './SingleAdvertisement';
import { GlobalContext } from 'utils/GlobalContext';
import FilterData from 'components/filter/FiterData';
import * as S from './Style/StyleAdvertisement';

export const Advertisements = () => {
  const { isLogin, isLoadingUser, setIsLoadingOpen } = useContext(GlobalContext);
  const [advertisements, setAdvertisements] = useState([]);
  const [advIdFollow, setAdvIdFollow] = useState([]);
  const [filterAdvertisement, setFilterAdvertisement] = useState([]);

  const getAdvertisementData = () => {
    setIsLoadingOpen(true);
    fetch(API.getAdvertisement, {
      method: 'GET',
      headers,
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setAdvertisements(data);
        setFilterAdvertisement(data);
      })
      .finally(() => {
        setIsLoadingOpen(false);
      });
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
        setAdvIdFollow(data?.filter(adv => adv.isFav).map(adv => adv.advertisementId));
        getAdvertisementData();
      });
  };

  useEffect(() => {
    if (isLoadingUser) return;
    if (isLogin) getAdvertisementFollowUserData();
    else getAdvertisementData();
  }, [isLoadingUser]);

  const advertisementRender = filterAdvertisement.map(adv => {
    const isFollow = advIdFollow.includes(adv._id);
    return <SingleAdvertisement key={adv._id} data={adv} isFollow={isFollow} />;
  });
  return (
    <S.WrapperAdvertisementsElements>
      <FilterData setFilterAdvertisement={setFilterAdvertisement} advertisements={advertisements} />
      <S.WrapperTableAdvertisements>
        {advertisementRender.length === 0 ? 'Brak ogłoszeń' : advertisementRender}
      </S.WrapperTableAdvertisements>
    </S.WrapperAdvertisementsElements>
  );
};
export default Advertisements;
