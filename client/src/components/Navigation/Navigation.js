import styled from 'styled-components';
import MainMenu from './MainMenu';
import { Button } from 'components/buttons/Button';
import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { UserPanelButton } from 'components/buttons/UserPanelBtn';
import { Container } from 'templates/Layout';

export const ContainerNav = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.BackgroundNavigation};
  border-radius: 0px 0px 10px 10px;
  border: 1px solid ${({ theme }) => theme.colors.Border};
  box-shadow: 0px 2px 12px ${({ theme }) => theme.colors.BorderShadow};
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
    console.log('Panel użytkownika');
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
        {isLogin && (
          <UserPanelButton logout onClick={handleLogout}>
            Wyloguj
          </UserPanelButton>
        )}
        <UserPanelButton onClick={handleUserPanel}>Twoje Konto</UserPanelButton>
      </ContainerBtn>
    </ContainerNav>
  );
};

export default Navigation;
