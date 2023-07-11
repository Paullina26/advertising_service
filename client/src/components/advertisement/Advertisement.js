import styled from 'styled-components';
import { Container } from 'styles/Form.style';
import { API, headers } from 'api/api';
import { useEffect, useState } from 'react';

export const Advertisement = () => {
  const [advertisement, setAdvertisement] = useState([]);

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
        setAdvertisement(data);
      });
    console.log(advertisement);
  };

  useEffect(() => {
    getAdvertisementDataToServer();
  }, []);

  return (
    <>
      <Container>
        <p>Tytuł ogłoszenia</p>
        <p>kategoria</p>
        <p>numer telefonu</p>
        <p>miasto</p>
        <p>województwo</p>
        <p>price</p>
        <p>opis</p>
      </Container>
    </>
  );
};

export default Advertisement;
