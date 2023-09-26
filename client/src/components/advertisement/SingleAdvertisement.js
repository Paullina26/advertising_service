import { GlobalContext } from 'utils/GlobalContext';
import { useState, useEffect, useContext } from 'react';
import { selectOptionType, selectOptionCategory, selectOptionProvince } from 'data/data';
import { Follow } from 'components/buttons/Follow';
import {
  WrapperSingleAdvertisement,
  WrapperClipElement,
  TypeAdvertisement,
  Title,
  Price,
  PhoneNumber,
  Province,
  Description,
  StyledIconPrice,
  StyledLocationIcon,
  StyledPhoneIcon,
} from './Style/StyleAdvertisement';

export const SingleAdvertisement = props => {
  const context = useContext(GlobalContext);

  const foundProvince = selectOptionProvince.find(element => props.data.province === element.value);
  const foundType = selectOptionType.find(element => props.data.type === element.value);
  const type = `${foundType?.label}: `;
  const price = `${props.data.price}`;
  const title = props.data.title;
  const province = foundProvince?.label;
  const city = props.data.city;
  const phone = `+${props.data.phone}`;
  const description = `Opis: ${props.data.description}`;
  const typeBgc = props.data.type;

  return (
    <WrapperSingleAdvertisement isSell={typeBgc === 'sellAnnouncement'}>
      <WrapperClipElement>
        <div className='follows'>
          {' '}
          <TypeAdvertisement>{type}</TypeAdvertisement>
          <Title>{title}</Title>
        </div>
        {context.isLogin ? <Follow id={props.data._id} isFollow={props.isFollow} /> : ''}
      </WrapperClipElement>
      <Price>
        <StyledIconPrice />
        {price}
      </Price>
      <WrapperClipElement>
        <Province>
          <StyledLocationIcon />
          {province}, {city}
        </Province>
      </WrapperClipElement>
      <PhoneNumber>
        <StyledPhoneIcon />
        {phone}
      </PhoneNumber>
      <Description>{description}</Description>
    </WrapperSingleAdvertisement>
  );
};
export default SingleAdvertisement;
