import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import { WrapperMainMenu, StyledLink } from './Style/StyleNavigation';

export const MainMenu = ({ open }) => {
  const { isLogin } = useContext(GlobalContext);

  const navItems = [
    { to: '/', name: 'Start', isVisible: true },
    // { to: '/registration', name: 'Rejestracja', isVisible: !isLogin },
    // { to: '/login', name: 'Logowanie', isVisible: !isLogin },
    // { to: '/userPanel', name: 'Twoje Konto', isVisible: isLogin },
  ];

  const navItemRender = navItems.map(item => {
    if (!item.isVisible) return null;
    return (
      <StyledLink key={item.name} to={item.to}>
        {item.name}
      </StyledLink>
    );
  });

  return <WrapperMainMenu open={open}>{navItemRender}</WrapperMainMenu>;
};

export default MainMenu;
