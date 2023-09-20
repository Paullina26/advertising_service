import styled from 'styled-components';
import { ReactComponent as PriceIcon } from '../../assets/icon/coins-solid.svg';
import { ReactComponent as LocationIcon } from '../../assets/icon/location-dot-solid.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icon/phone-solid.svg';

//----Single Advertisement----//
export const WrapperSingleAdvertisement = styled.div`
  text-align: center;
  margin: 40px auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.GlassBorder};
  min-width: 300px;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: inset 0px 0px 80px -50px ${({ theme, isSell }) => (isSell ? theme.colors.ShadowBay : theme.colors.ShadowSell)};
`;

export const WrapperClipElement = styled.div`
  text-align: left;
  padding: 5px;
  font-size: 20px;
  margin-left: 0;
  display: flex;
  justify-content: space-between;
  .follows {
    display: inline;
  }
`;
export const TypeAdvertisement = styled.div`
  display: inline;
`;
export const Title = styled.div`
  display: inline;
  margin-right: auto;
`;

export const Price = styled.div`
  font-size: 20px;
  text-align: left;
  padding-left: 5px;
`;

export const PhoneNumber = styled.div`
  font-size: 18px;
  text-align: left;
  padding-left: 5px;
`;

export const Province = styled.div`
  display: inline;
  font-size: 18px;
  padding-right: 20px;
`;

export const Description = styled.div`
  font-size: 15px;
  text-align: center;
  padding: 5px 5px 10px 5px;
`;

export const StyledIconPrice = styled(PriceIcon)`
  width: 20px;
  fill: #f4b710;
  margin-right: 5px;
  margin-bottom: -2px;
`;

export const StyledLocationIcon = styled(LocationIcon)`
  width: 18px;
  fill: #266c25;
  margin-right: 5px;
  margin-bottom: -3px;
`;

export const StyledPhoneIcon = styled(PhoneIcon)`
  width: 18px;
  fill: #c92f08;
  margin-right: 5px;
  margin-bottom: -3px;
`;

//----Advertisements----//
export const WrapperAdvertisementsElements = styled.div`
  padding-top: 0px;
`;

export const WrapperTableAdvertisements = styled.div`
  padding-top: 70px;
`;
