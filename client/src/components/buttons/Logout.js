import styled from 'styled-components';
import { icons } from 'assets/icons';

export const StyledLogoutIcon = styled(icons.locationIcon)`
  width: 2rem;
  fill: white;
  margin-bottom: -3px;
  margin-left: 5px;
`;

export const StyledUserIcon = styled(icons.userSolid)`
  width: 2rem;
  fill: white;
  margin-bottom: -3px;
  margin-left: 5px;
`;

export const StyleButton = styled.button`
  border-radius: 5px;
  font-size: 2rem;
  padding: 5px 15px;
  border: 0px;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.FontLight};
  background-color: ${({ theme }) => theme.colors.BackgroundUserPanelBtn};
  box-shadow: 0px 2px 12px ${({ theme }) => theme.colors.BorderShadow};

  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.FontSubmitHover};
    background-color: ${({ theme }) => theme.colors.FontLight};
    box-shadow: 0px 0px 20px ${({ theme }) => theme.colors.BorderShadowLight};
    .hoverSVG {
      fill: ${({ theme }) => theme.colors.FontSubmitHover};
    }
  }
`;

const Logout = ({ onClick }) => {
  return (
    <>
      <StyleButton onClick={onClick}>
        Wyloguj <StyledLogoutIcon className='hoverSVG' />
      </StyleButton>
    </>
  );
};

export default Logout;
