import styled from 'styled-components';
import MainMenu from './MainMenu';
import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import { useNavigate } from 'react-router-dom';
// import { UserPanelButton, StyledLogoutIcon, StyledUserIcon } from 'components/buttons/UserPanelBtn';
import Logout from 'components/buttons/Logout';
import UserProfile from 'components/buttons/UserProfile';

export const ContainerNav = styled.div`
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.BackgroundNavigation};
  box-shadow: 0px 2px 20px ${({ theme }) => theme.colors.BorderShadow};
  z-index: 1;
`;

export const ContainerBtn = styled.div`
  justify-self: end;
`;

const Navigation = () => {
  const { isLogin, setIsLogin } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setIsLogin(false);
    navigate('/');
  };

  const handleUserPanel = () => {
    if (isLogin === true) {
      navigate('/userPanel');
    } else if (isLogin === false) {
      navigate('/signup');
    }
  };

  return (
    <ContainerNav>
      <MainMenu />
      <ContainerBtn>
        {isLogin && <Logout logout onClick={handleLogout} />}
        <UserProfile onClick={handleUserPanel} />
      </ContainerBtn>
    </ContainerNav>
  );
};

export default Navigation;
