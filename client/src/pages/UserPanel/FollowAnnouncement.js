import { API, headers } from 'api/api';
import { useEffect, useState } from 'react';
import SingleAdvertisement from '../../components/advertisement/SingleAdvertisement';

const FollowAnnouncement = () => {
  const [advertisementsFollowUser, setAdvertisementsFollowUser] = useState([]);
  const [allAdvertisements, setAllAdvertisements] = useState([]);
  const [allAdvertisementsFollow, setAllAdvertisementsFollow] = useState([]);

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
        setAdvertisementsFollowUser(data);
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

  // console.log('Follow', advertisementsFollowUser);
  console.log('AllAd', allAdvertisements);
  const advertisementsId = advertisementsFollowUser.map(id => id.advertisementId);
  console.log('idAd', advertisementsId);
  // const x = allAdvertisements.filter(adv => includes());
  // const advertisementRender = advertisementsFollowUser.map(advertisement => (
  //   <SingleAdvertisement key={advertisement._id} data={advertisement} />
  // ));

  return (
    <>
      {/* <div>{advertisementRender}</div> */}
      <div>polubione</div>
    </>
  );
};

export default FollowAnnouncement;
