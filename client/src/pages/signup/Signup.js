import Login from '../../components/Form/Login';
import Registration from '../../components/Form/Registration';
import { useState } from 'react';
import { Button } from 'components/buttons/Button';
import { WrapperSignup } from './StyleSignup';

const Signup = () => {
  const [isActive, setIsActive] = useState(true);

  const handleActive = () => {
    setIsActive(prev => !prev);
  };

  return (
    <WrapperSignup>
      <Button onClick={handleActive}>{isActive ? `Rejestracja` : `Logowanie`}</Button>
      {isActive ? <Login /> : <Registration />}
    </WrapperSignup>
  );
};

export default Signup;
