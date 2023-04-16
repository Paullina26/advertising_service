import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const navItems = [
  { to: '/', name: 'Home' },
  { to: '/registration', name: 'Rejestracja' },
  { to: '/login', name: 'Logowanie' },
  { to: '/userPanel', name: 'Panel Użytkownika' },
];

export const StyledLink = styled(NavLink)`
  width: 100%;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.Font};
  margin: 15px auto 15px 20px;
  font-size: 20px;

  &:hover {
    color: ${({ theme }) => theme.BackgroundSubmit};
    transition: color 0.3s 0.3s linear;
  }

  &.active {
    color: ${({ theme }) => theme.BackgroundSubmit};
  }
`;

export const MainMenu = ({ open }) => {
  const navItemRender = navItems.map(item => (
    <StyledLink key={item.name} to={item.to}>
      {item.name}
    </StyledLink>
  ));

  return (
    <div open={open}>
      <div>{navItemRender}</div>
    </div>
  );
};

// Menu.propTypes = {
//   open: bool.isRequired,
// };

export default MainMenu;
