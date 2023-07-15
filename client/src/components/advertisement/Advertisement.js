import styled from 'styled-components';
import { Container } from 'styles/Form.style';
import { API, headers } from 'api/api';
import { useEffect, useState } from 'react';
import SingleAdvertisement from './SingleAdvertisement';

export const Advertisement = () => {
  const [advertisements, setAdvertisements] = useState([]);
  // const [isLoading]

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
        setAdvertisements(data);
      });
    // .finally() => //loading false;
  };

  useEffect(() => {
    getAdvertisementDataToServer();
  }, []);

  const advertisementRender = advertisements.map(advertisement => (
    <SingleAdvertisement key={advertisement._id} data={advertisement} />
  ));

  return <div>{advertisementRender.length === 0 ? 'Brak ogłoszeń' : advertisementRender}</div>;
};

export default Advertisement;
