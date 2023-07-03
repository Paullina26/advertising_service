import styled from 'styled-components';
import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Conteainer = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.BackgroundNavigation};
  box-shadow: 0px 0px 20px ${({ theme }) => theme.colors.BorderShadow};
  margin-top: 0;
  padding: 10px;
  font-size: 20px;
`;

export const StyledLink = styled(NavLink)`
  /* display: block; */
  padding: 10px 0px;
  width: 100%;
  height: 100%;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.colors.Font};
  margin: auto 15px;
  font-size: 20px;

  &:hover {
    color: ${({ theme }) => theme.colors.BackgroundSubmit};
    transition: color 0.1s 0.1s linear;
  }

  &.active {
    color: ${({ theme }) => theme.colors.BackgroundSubmit};
  }
`;

const NavigationUserPanel = () => {
  const { isLogin, setIsLogin } = useContext(GlobalContext);
  const navigate = useNavigate();
  const navItemsUserPanel = [
    {
      to: '/userPanel/addAnnouncement',
      name: 'Dodaj ogłoszenie',
    },
    {
      to: '/userPanel/userAnnouncement',
      name: 'Twoje ogłoszenia',
    },

    {
      to: '/userPanel/settings',
      name: 'Ustawienia',
    },
  ];

  const navItemRender = navItemsUserPanel.map(item => {
    // if (!item.isVisible) return null;
    return (
      <StyledLink key={item.name} to={item.to}>
        {item.name}
      </StyledLink>
    );
  });

  return (
    <>
      <Conteainer>{navItemRender}</Conteainer>
    </>
  );
};

export default NavigationUserPanel;
