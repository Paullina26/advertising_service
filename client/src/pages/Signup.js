import Login from '../components/Form/Login';
import Registration from '../components/Form/Registration';
import styled from 'styled-components';
import { useState } from 'react';
import { Button } from 'components/buttons/Button';

export const WrapperSignup = styled.div`
  padding: 15px;
  text-align: center;
`;

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
