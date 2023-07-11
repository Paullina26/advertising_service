import styled from 'styled-components';
import { Container } from 'styles/Form.style';
import { API, headers } from 'api/api';
import { useEffect, useState } from 'react';
import SingleAdvertisement from './SingleAdvertisement';

export const Advertisement = () => {
  const [advertisements, setAdvertisements] = useState([]);

  const getAdvertisementDataToServer = () => {
    fetch(API.getAdvertisement, {
      method: 'GET',
      headers,
    })
      .then(response => {
        console.log(1, response.status);
        // console.log(2, response.json());
        return response.json();
      })
      .then(data => {
        console.log(3, data);
        setAdvertisements(data);
      });
    console.log(advertisements);
  };

  useEffect(() => {
    getAdvertisementDataToServer();
  }, []);

  const advertisementRender = advertisements.map(advertisement => (
    <SingleAdvertisement key={advertisement._id} data={advertisement} />
  ));

  return (
    <>
      <div>{advertisementRender}</div>
    </>
  );
};

export default Advertisement;
