import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/Home';
import UserPanel from 'pages/UserPanel';
import Registration from 'pages/Registration';
import Login from 'pages/Login';
import { GlobalContext } from 'utils/GlobalContext';

const RoutesComponent = () => {
  const { isLogin } = useContext(GlobalContext);
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      {!isLogin && (
        <>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
        </>
      )}
      {isLogin && (
        <>
          <Route path='/userPanel' element={<UserPanel />} />
        </>
      )}
      <Route path='*' Component={() => <div>404</div>} />
    </Routes>
  );
};

export default RoutesComponent;
