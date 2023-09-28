import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { WrapperHeader, WrapperButtonHeader } from 'components/Navigation/Style/StyleNavigation';
import Logo from './Logo';
import Logout from 'components/buttons/Logout';
import UserProfile from 'components/buttons/UserProfile';

const Header = () => {
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
    <WrapperHeader>
      <Logo />
      <WrapperButtonHeader>
        {isLogin && <Logout logout onClick={handleLogout} />}
        <UserProfile onClick={handleUserPanel} />
      </WrapperButtonHeader>
    </WrapperHeader>
  );
};

export default Header;
