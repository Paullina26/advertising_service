import styled from 'styled-components';
import { icons } from 'assets/icons';

//----Single Advertisement----//
export const WrapperSingleAdvertisement = styled.div`
  text-align: center;
  margin: 40px auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.GlassBorder};
  min-width: 300px;
  max-width: 600px;
  border-radius: 10px;
  border: outset 2px ${({ theme }) => theme.colors.BorderAdv};
  box-shadow: inset 0px 0px 80px -50px ${({ theme, isSell }) => (isSell ? theme.colors.ShadowBay : theme.colors.ShadowSell)};
`;

export const WrapperClipElement = styled.div`
  text-align: left;
  padding: 5px;
  font-size: 2rem;
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
  font-size: 2rem;
  text-align: left;
  padding-left: 5px;
`;

export const PhoneNumber = styled.div`
  font-size: 1.8rem;
  text-align: left;
  padding-left: 5px;
`;

export const Province = styled.div`
  display: inline;
  font-size: 1.8rem;
  padding-right: 20px;
`;

export const Description = styled.div`
  font-size: 1.5rem;
  text-align: center;
  padding: 5px 5px 10px 5px;
`;

export const StyledIconPrice = styled(icons.priceIcon)`
  width: 20px;
  fill: ${({ theme }) => theme.colors.iconPrice};
  margin-right: 5px;
  margin-bottom: -2px;
`;

export const StyledLocationIcon = styled(icons.locationIcon)`
  width: 18px;
  fill: ${({ theme }) => theme.colors.iconLocation};
  margin-right: 5px;
  margin-bottom: -3px;
`;

export const StyledPhoneIcon = styled(icons.phoneIcon)`
  width: 18px;
  fill: ${({ theme }) => theme.colors.iconPhone};
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

//-----AddAdvertisement-----//

export const WrapperAddAdvertisement = styled.div`
  text-align: center;
  margin: 30px auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.BackgroundForm};
  min-width: 340px;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0px 2px 12px ${({ theme }) => theme.colors.BorderShadow};
  .titleAnnouncementStyle {
    width: 300px;
    text-align: start;
  }
  .containerClassPhone {
    margin: auto;
    width: 300px;
    padding: 0;
    margin-bottom: 15px;
  }
`;
