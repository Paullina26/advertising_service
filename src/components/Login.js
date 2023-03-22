import { useState } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.Background};
  width: 30vw;
  height: 40vh;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.BackgroundNavigation};
  box-shadow: 0px 2px 12px ${({ theme }) => theme.BorderShadow};
`;

export const FormTittle = styled.div`
  margin: 10px;
  p {
    font-size: 30px;
    font-weight: bold;
  }
`;

const Login = () => {
  const [meil, setMeil] = useState('');

  console.log(meil);

  return (
    <Container>
      <FormTittle>
        <p>Logowanie</p>
      </FormTittle>

      <div>
        <form>
          <label htmlFor='e-mail'>
            e-mail:
            <input id='e-mail' type='text' value={meil} onChange={e => setMeil(e.target.value)} />
          </label>
          <label htmlFor=''>
            Hasło:
            <input type='password' />
          </label>
        </form>
      </div>

      <button>Zaloguj</button>
      <div>
        <button>Rejestracja</button>
      </div>
    </Container>
  );
};

export default Login;
