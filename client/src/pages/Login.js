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
    event.preventDefault();
    console.log(mail);
    console.log(password);
  };

  return (
    <Container>
      <FormTittle>
        <p>Logowanie</p>
      </FormTittle>

      <form onSubmit={handleSubmit}>
        <Input
          label='E-mail:'
          id='e-mail'
          type='email'
          value={mail}
          onChange={e => setMail(e.target.value)}
          autoComplete='email'
          placeholder='E-mail'
          minlength='4'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
          required
        />
        <Input
          label='Hasło:'
          id='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete='current-password'
          placeholder='Hasło'
          minlength='4'
          required
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
