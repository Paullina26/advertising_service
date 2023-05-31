import styled from 'styled-components';
import MainMenu from './MainMenu';
import { Button } from 'components/buttons/Button';
import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';

export const ContainerNav = styled.div`
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

  const handleLogout = () => {
    console.log('wyloguj');
    localStorage.clear();
    setIsLogin(false);
  };

  return (
    <ContainerNav>
      <div>
        <MainMenu />
        {isLogin && (
          <Button logout onClick={handleLogout}>
            Wyloguj
          </Button>
        )}
      </div>
    </ContainerNav>
  );
};

export default Navigation;
