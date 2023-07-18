import { useState } from 'react';
import { selectOptionType, selectOptionCategory, selectOptionProvince } from 'data/data';
import {
  Container,
  ContainerClipElement,
  TypeAdvertisement,
  Title,
  Price,
  PhoneNumber,
  Province,
  Description,
  StyledIconPrice,
  StyledLocationIcon,
  StyledPhoneIcon,
} from 'styles/Advertisement.style';

export const SingleAdvertisement = props => {
  const foundProvince = selectOptionProvince.find(element => props.data.province === element.value);
  const foundType = selectOptionType.find(element => props.data.type === element.value);
  const type = `${foundType.label}: `;
  const price = `${props.data.price}`;
  const title = props.data.title;
  const province = foundProvince.label;
  const city = props.data.city;
  const phone = `+${props.data.phone}`;
  const description = `Opis: ${props.data.description}`;
  const typeBgc = props.data.type;

  return (
    <Container color={typeBgc === 'sellAnnouncement' ? true : false}>
      <ContainerClipElement>
        <TypeAdvertisement>{type}</TypeAdvertisement>
        <Title>{title}</Title>
      </ContainerClipElement>
      <Price>
        <StyledIconPrice />
        {price}
      </Price>
      <ContainerClipElement>
        <Province>
          <StyledLocationIcon />
          {province}, {city}
        </Province>
      </ContainerClipElement>
      <PhoneNumber>
        <StyledPhoneIcon />
        {phone}
      </PhoneNumber>
      <Description>{description}</Description>
    </Container>
  );
};
export default SingleAdvertisement;
