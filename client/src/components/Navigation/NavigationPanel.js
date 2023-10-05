import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import * as S from 'components/Navigation/Style/StyleNavigation';

const NavigationPanel = () => {
  const location = useLocation();
  const { isOpenMenu, setIsOpenMenu } = useContext(GlobalContext);
  const { isLogin, setIsLogin } = useContext(GlobalContext);
  const navigate = useNavigate();

  const navItemsUser = [
    {
      to: '/',
      name: 'Ogłoszenia',
    },
    {
      to: '/userPanel/addAdvertisement',
      name: 'Dodaj ogłoszenie',
    },
    {
      to: '/statistics',
      name: 'Statystyki',
    },

    {
      to: '/userPanel/userAnnouncement',
      name: 'Twoje ogłoszenia',
    },
    {
      to: '/userPanel/followAnnouncement',
      name: 'Polubione',
    },
    // {
    //   to: '/userPanel/setting',
    //   name: 'Ustawienia',
    // },
  ];

  const navItemsHomePage = [
    {
      to: '/',
      name: 'Ogłoszenia',
    },
    {
      to: '/addAdvertisement',
      name: 'Dodaj ogłoszenie',
    },
    {
      to: '/statistics',
      name: 'Statystyki',
    },
  ];

  const navItemRender =
    // navItemsUser.some(navItem => navItem.to === location.pathname) ? navItemsUser : navItemsHomePage
    (isLogin ? navItemsUser : navItemsHomePage).map(item => {
      return (
        <S.StyledLink key={item.name} to={item.to}>
          {item.name}
        </S.StyledLink>
      );
    });

  return <>{isOpenMenu && <S.WrapperNavigationPanel>{navItemRender}</S.WrapperNavigationPanel>}</>;
};

export default NavigationPanel;
