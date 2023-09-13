import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import LayoutUserPanel from 'templates/LayoutUserPanel';
import { GlobalContext } from 'utils/GlobalContext';

const UserPanel = () => {
  const context = useContext(GlobalContext);

  const checkIsLogin = () => {
    if (context.isLogin === true) {
      // console.log('zalogowny');
    } else if (context.isLogin === false) {
      // console.log('nie zalogowany');
    }
  };
  checkIsLogin();

  return (
    <>
      <LayoutUserPanel>
        <Outlet />
      </LayoutUserPanel>
    </>
  );
};

export default UserPanel;
