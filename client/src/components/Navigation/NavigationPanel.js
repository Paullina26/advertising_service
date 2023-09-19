import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { Container, StyledLink } from 'styles/Navigation.style';
import { useLocation } from 'react-router-dom';

const NavigationPanel = () => {
  const location = useLocation();
  // console.log(location);
  const { isLogin, setIsLogin } = useContext(GlobalContext);
  const navigate = useNavigate();

  const navItemsUserPanel = [
    {
      to: '/userPanel/addAdvertisement',
      name: 'Dodaj ogłoszenie',
    },
    {
      to: '/userPanel/userAnnouncement',
      name: 'Twoje ogłoszenia',
    },
    {
      to: '/userPanel/followAnnouncement',
      name: 'Polubione',
    },
    {
      to: '/userPanel',
      name: 'Ustawienia',
    },
  ];

  const navItemsHomePage = [
    {
      to: '/addAdvertisement',
      name: 'Dodaj ogłoszenie',
    },
    {
      to: '/',
      name: 'Ogłoszenia',
    },
  ];

  const navItemRender = (
    navItemsUserPanel.some(navItem => navItem.to === location.pathname)
      ? navItemsUserPanel
      : navItemsHomePage
  ).map(item => {
    return (
      <StyledLink key={item.name} to={item.to}>
        {item.name}
      </StyledLink>
    );
  });

  return (
    <>
      <Container>{navItemRender}</Container>
    </>
  );
};

export default NavigationPanel;
