import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import { useNavigate } from 'react-router-dom';
import * as S from 'components/Navigation/Style/StyleNavigation';
import Burger from './Burger';
import Logout from 'components/buttons/Logout';
import Login from 'components/buttons/Login';
import Logo from './Logo';

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
    <S.WrapperHeader>
      <Burger />
      <Logo />
      <S.WrapperButtonHeader>
        {isLogin ? <Logout logout onClick={handleLogout} /> : <Login onClick={handleUserPanel} />}
      </S.WrapperButtonHeader>
    </S.WrapperHeader>
  );
};

export default Header;
