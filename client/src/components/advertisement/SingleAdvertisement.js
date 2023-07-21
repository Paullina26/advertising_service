import { GlobalContext } from 'utils/GlobalContext';
import { useState, useEffect, useContext } from 'react';
import { selectOptionType, selectOptionCategory, selectOptionProvince } from 'data/data';

import { Follow } from 'components/buttons/Follow';
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
  // const { isLogin, setIsLogin } = useContext(GlobalContext);
  // console.log(props);
  const context = useContext(GlobalContext);

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
    <Container isSell={typeBgc === 'sellAnnouncement'}>
      <ContainerClipElement>
        <div className='follows'>
          {' '}
          <TypeAdvertisement>{type}</TypeAdvertisement>
          <Title>{title}</Title>
        </div>
        {context.isLogin ? <Follow id={props.data._id} /> : ''}
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
