import { useState } from 'react';
import { useContext } from 'react';
import { Container, FormTittle } from 'styles/Form.style';
import { Error } from 'components/Form/Error.style';
import { GlobalContext } from 'utils/GlobalContext';
import Input from './Input';
import Submit from 'components/Form/Submit';
import { useNavigate } from 'react-router-dom';
import { nameElement, StatusMessage } from 'data/data';
import { API_BASE_URL, API, headers } from 'api/api';

const Login = () => {
  const navigate = useNavigate();
  const { setIsLogin } = useContext(GlobalContext);
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const sendLoginDataToServer = () => {
    fetch(`${API_BASE_URL}${API.login}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        username: mail,
        password: password,
      }),
    })
      .then(response => {
        console.log(response.status);
        if (response.status === 404) {
          console.log('pokaz komunikat');
          // https://www.npmjs.com/package/react-toastify
          //nie mam takigo użytkownika
          throw new Error('No user');
        } else {
          return response.json();
        }
      })
      .then(data => {
        localStorage.setItem('TOKEN', data.token);
        setIsLogin(true);
        setError(StatusMessage.loginOk);
        return navigate('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSubmit = event => {
    sendLoginDataToServer();
    event.preventDefault();
  };

  return (
    <Container>
      <FormTittle>
        <p>Logowanie</p>
      </FormTittle>

      <form onSubmit={handleSubmit}>
        <Input
          label={nameElement.email}
          id='e-mail_Login'
          type='email'
          value={mail}
          onChange={e => setMail(e.target.value)}
          autoComplete='email'
          placeholder={nameElement.email}
          minlength='4'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
          required
        />
        <Input
          label={nameElement.password}
          id='password_Login'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete='current-password'
          placeholder={nameElement.password}
          minlength='4'
          required
        />
        {error && <Error>{error}</Error>}
        <Submit id='Login' type='submit' value={nameElement.submitLogin} />
      </form>
    </Container>
  );
};

export default Login;
