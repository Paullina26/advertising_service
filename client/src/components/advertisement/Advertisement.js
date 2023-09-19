import { API, headers } from 'api/api';
import { useContext, useEffect, useState } from 'react';
import SingleAdvertisement from './SingleAdvertisement';
import { GlobalContext } from 'utils/GlobalContext';
import FilterData from 'components/filter/FiterData';
import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 0px;
`;

export const Container2 = styled.div`
  padding-top: 70px;
`;

export const Advertisement = () => {
  const { isLogin, isLoadingUser } = useContext(GlobalContext);
  const [advertisements, setAdvertisements] = useState([]);
  const [advIdFollow, setAdvIdFollow] = useState([]);
  const [filterAdvertisement, setFilterAdvertisement] = useState([]);

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
        setFilterAdvertisement(data);
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

  const advertisementRender = filterAdvertisement.map(adv => {
    const isFollow = advIdFollow.includes(adv._id);
    return <SingleAdvertisement key={adv._id} data={adv} isFollow={isFollow} />;
  });
  return (
    <Container>
      <FilterData setFilterAdvertisement={setFilterAdvertisement} advertisements={advertisements} />
      <Container2>
        {advertisementRender.length === 0 ? 'Brak ogłoszeń' : advertisementRender}
      </Container2>
    </Container>
  );
};
export default Advertisement;
