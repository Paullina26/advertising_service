import Login from '../components/Form/Login';
import Registration from '../components/Form/Registration';
import styled from 'styled-components';
import { useState } from 'react';
import { Button } from 'components/buttons/Button';

export const WrapperSignup = styled.div`
  /* background-color: #766c6c; */
  padding: 15px;
  text-align: center;
`;

// export const Button = styled.button`
//   background-color: #9aba9e;
//   font-size: 25px;
//   padding: 5px;
//   border: #9aba9e;
//   border-radius: 2 px;
// `;

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
