import { GlobalContext } from 'utils/GlobalContext';
import { useState, useEffect, useContext } from 'react';
import { selectOptionType, selectOptionCategory, selectOptionProvince } from 'data/data';
import { Follow } from 'components/buttons/Follow';
import * as S from './Style/StyleAdvertisement';

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
    <S.WrapperSingleAdvertisement isSell={typeBgc === 'sellAnnouncement'}>
      <S.WrapperClipElement>
        <div className='follows'>
          {' '}
          <S.TypeAdvertisement>{type}</S.TypeAdvertisement>
          <S.Title>{title}</S.Title>
        </div>
        {context.isLogin ? <Follow id={props.data._id} isFollow={props.isFollow} /> : ''}
      </S.WrapperClipElement>
      <S.Price>
        <S.StyledIconPrice />
        {price}
      </S.Price>
      <S.WrapperClipElement>
        <S.Province>
          <S.StyledLocationIcon />
          {province}, {city}
        </S.Province>
      </S.WrapperClipElement>
      <S.PhoneNumber>
        <S.StyledPhoneIcon />
        {phone}
      </S.PhoneNumber>
      <S.Description>{description}</S.Description>
    </S.WrapperSingleAdvertisement>
  );
};
export default SingleAdvertisement;
