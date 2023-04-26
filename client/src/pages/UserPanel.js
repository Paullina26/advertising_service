import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutUserPanel from 'templates/LayoutUserPanel';
import { GlobalContext } from 'utils/GlobalContext';

const UserPanel = () => {
  const context = useContext(GlobalContext);
  console.log(context);
  const checkIsLogin = () => {
    if (context.isLogin === true) {
      console.log('zalogowny');
    } else if (context.isLogin === false) {
      console.log('nie zalogowany');
    }
  };

  checkIsLogin();
  return (
    <>
      <LayoutUserPanel>
        <Routes>{/* <Route path='/userPanel/settings' element={}/> */}</Routes>
        <p>User Panel</p>
      </LayoutUserPanel>
    </>
  );
};

export default UserPanel;
