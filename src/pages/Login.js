import { useState } from 'react';
import Input from '../components/Form/Input';
import Submit from 'components/Form/Submit';
import { Container, FormTittle } from 'styles/Form.style';

const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  // console.log(mail);
  // console.log(password);

  const handleSubmit = event => {
    console.log(mail);
    console.log(password);
    event.preventDefault();
  };

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
          placeholder='E-mail'
        />
        <Input
          label='Hasło:'
          id='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete='current-password'
          placeholder='Hasło'
        />
        <Submit id='Login' type='submit' value='Zaloguj' onClick={handleSubmit} />
      </form>
      <div>
        <button>Rejestracja</button>
      </div>
    </Container>
  );
};

export default Login;
