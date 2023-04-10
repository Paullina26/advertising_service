import { useState } from 'react';
import Input from '../components/Form/Input';
import Submit from 'components/Form/Submit';
import { Container, FormTittle } from 'styles/Form.style';
import { Error } from 'components/Form/Error.style';

const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const titleElement = {
    email: 'E-Mail:',
    password: 'Hasło:',
    submitLogin: 'Zaloguj',
  };

  const StatusMessage = {
    passwordWrong: 'Nie poprawny E-mail lub Hasło',
    loginOk: 'Logowanie przebiegło pomyślenie',
  };

  const sendLoginDataToServer = () => {
    fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: mail,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => {
        console.log(err);
      });
  };

  const handleSubmit = event => {
    sendLoginDataToServer();
    setError(StatusMessage.loginOk);
    event.preventDefault();
  };

  return (
    <Container>
      <FormTittle>
        <p>Logowanie</p>
      </FormTittle>

      <form onSubmit={handleSubmit}>
        <Input
          label={titleElement.email}
          id='e-mail_Login'
          type='email'
          value={mail}
          onChange={e => setMail(e.target.value)}
          autoComplete='email'
          placeholder={titleElement.email}
          minlength='4'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
          required
        />
        <Input
          label={titleElement.password}
          id='password_Login'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete='current-password'
          placeholder={titleElement.password}
          minlength='4'
          required
        />
        {error && <Error>{error}</Error>}
        <Submit id='Login' type='submit' value={titleElement.submitLogin} />
      </form>
      <div>
        <button>Rejestracja</button>
      </div>
    </Container>
  );
};

export default Login;
