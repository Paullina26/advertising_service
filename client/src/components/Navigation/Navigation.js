import styled from 'styled-components';
import MainMenu from './MainMenu';
import { Button } from 'components/buttons/Button';
import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { UserPanelButton } from 'components/buttons/UserPanel';

export const ContainerNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.BackgroundNavigation};
  width: 95vw;
  border-radius: 0px 0px 10px 10px;
  border: 1px solid ${({ theme }) => theme.colors.Border};
  box-shadow: 0px 2px 12px ${({ theme }) => theme.colors.BorderShadow};
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
      console.log('zalogowany');
      navigate('/userPanel');
    } else if (isLogin === false) {
      console.log('logowanie');
      navigate('/login');
    }
  };

  return (
    <ContainerNav>
      <MainMenu />
      {isLogin && (
        <Button logout onClick={handleLogout}>
          Wyloguj
        </Button>
      )}
      <UserPanelButton onClick={handleUserPanel}>Twoje Konto</UserPanelButton>
    </ContainerNav>
  );
};

export default Navigation;
