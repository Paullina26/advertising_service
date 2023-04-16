import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutUserPanel from 'templates/LayoutUserPanel';

const UserPanel = () => {
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
