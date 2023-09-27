import MainMenu from './MainMenu';
import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import { useNavigate } from 'react-router-dom';
import Logout from 'components/buttons/Logout';
import UserProfile from 'components/buttons/UserProfile';
import { WrapperNavigation, WrapperButtonNav } from 'components/Navigation/Style/StyleNavigation';

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
    <WrapperNavigation>
      <MainMenu />
      <WrapperButtonNav>
        {isLogin && <Logout logout onClick={handleLogout} />}
        <UserProfile onClick={handleUserPanel} />
      </WrapperButtonNav>
    </WrapperNavigation>
  );
};

export default Navigation;
