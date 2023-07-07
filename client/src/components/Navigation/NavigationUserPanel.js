import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { Container, StyledLink } from 'styles/Navigation.style';

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
      <Container>{navItemRender}</Container>
    </>
  );
};

export default NavigationUserPanel;
