import { API, headers } from 'api/api';
import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import SingleAdvertisement from '../../components/advertisement/SingleAdvertisement';

const FollowAnnouncement = () => {
  const { setIsLoadingOpen } = useContext(GlobalContext);
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
        setAdvFollowUser(data.filter(adv => adv.isFav).map(adv => adv.advertisementId));
      });
  };

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
        setAllAdvertisements(data);
      })
      .finally(() => {
        setIsLoadingOpen(false);
      });
  };

  useEffect(() => {
    getAdvertisementFollowUserData();
    getAdvertisementData();
  }, []);

  const advertisementRender = allAdvertisements
    .filter(adv => advFollowUser.includes(adv._id))
    .map(advertisement => (
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
