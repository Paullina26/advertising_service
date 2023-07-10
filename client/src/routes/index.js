import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/Home';
import UserPanel from 'pages/UserPanel';
import Registration from 'components/Form/Registration';
import Login from 'components/Form/Login';
import { GlobalContext } from 'utils/GlobalContext';
import Signup from 'pages/Signup';
import AddAdvertisement from 'components/advertisement/AddAdvertisement';
import UserAnnouncement from 'pages/UserPanel/UserAnnouncement';
import Settings from 'pages/UserPanel/Setting';

const RoutesComponent = () => {
  const { isLogin } = useContext(GlobalContext);
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='addAdvertisement' element={<AddAdvertisement />} />

      {!isLogin && (
        <>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </>
      )}
      {isLogin && (
        <>
          <Route path='/userPanel' element={<UserPanel />}>
            <Route path='addAdvertisement' element={<AddAdvertisement />} />
            <Route path='userAnnouncement' element={<UserAnnouncement />} />
            <Route path='/userPanel' element={<Settings />} />
          </Route>
        </>
      )}
      <Route path='*' Component={() => <div>404</div>} />
    </Routes>
  );
};

export default RoutesComponent;
