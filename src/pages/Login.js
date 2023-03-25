import { useState } from 'react';
import Input from '../components/Form/Input';
import Submit from 'components/Form/Submit';
import { Container, FormTittle } from 'styles/Form.style';

const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  console.log(mail);
  console.log(password);

  return (
    <Container>
      <FormTittle>
        <p>Logowanie</p>
      </FormTittle>

      <form>
        <Input
          label='E-mail:'
          id='e-mail'
          type='text'
          value={mail}
          onChange={e => setMail(e.target.value)}
          autoComplete='email'
        />
        <Input
          label='Hasło:'
          id='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete='current-password'
        />
        <Submit id='Login' type='submit' value='Zaloguj' />
      </form>
      <div>
        <button>Rejestracja</button>
      </div>
    </Container>
  );
};

export default Login;
