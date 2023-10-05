import Login from '../../components/Form/Login';
import Registration from '../../components/Form/Registration';
import { useState } from 'react';
import { Button } from 'components/buttons/Button';
import { WrapperSignup } from './style/StyleSignup';

const Signup = () => {
  const [isActive, setIsActive] = useState(true);

  const handleActive = () => {
    setIsActive(prev => !prev);
  };

  return (
    <WrapperSignup>
      {isActive ? <Login onClick={handleActive} /> : <Registration onClick={handleActive} />}
      {/* <Button onClick={handleActive}>{isActive ? `Rejestracja` : `Logowanie`}</Button> */}
    </WrapperSignup>
  );
};

export default Signup;
