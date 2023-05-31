import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';

export const StyledLink = styled(NavLink)`
  width: 100%;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.colors.Font};
  margin: 15px auto 15px 20px;
  font-size: 20px;

  &:hover {
    color: ${({ theme }) => theme.colors.BackgroundSubmit};
    transition: color 0.3s 0.3s linear;
  }

  &.active {
    color: ${({ theme }) => theme.colors.BackgroundSubmit};
  }
`;

export const MainMenu = ({ open }) => {
  const { isLogin } = useContext(GlobalContext);

  const navItems = [
    { to: '/', name: 'Start', isVisible: true },
    { to: '/registration', name: 'Rejestracja', isVisible: !isLogin },
    { to: '/login', name: 'Logowanie', isVisible: !isLogin },
    { to: '/userPanel', name: 'Twoje Konto', isVisible: isLogin },
  ];

  const navItemRender = navItems.map(item => {
    if (!item.isVisible) return null;
    return (
      <StyledLink key={item.name} to={item.to}>
        {item.name}
      </StyledLink>
    );
  });

  return (
    <div open={open}>
      <div>{navItemRender}</div>
    </div>
  );
};

export default MainMenu;
