import { useState } from 'react';
import Input from '../components/Form/Input';
import Submit from 'components/Form/Submit';
import { Container, FormTittle } from 'styles/Form.style';
import { Error } from 'components/Form/Error.style';

const Registration = () => {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const StatusMessage = {
    passwordWrong: 'Hasła nie pasują do siebie',
    registrationOk: 'Rejestracja przebiegła pomyślenie',
  };

  const titleElement = {
    email: 'E-Mail:',
    name: 'Nazwa Użytkownika:',
    password: 'Hasło:',
    confirmPassword: 'Powtórz Hasło:',
    submitRegistration: 'Rejestracja',
  };

  const sendRegistrationDataToServer = () => {
    fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: mail,
        name,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => {
        console.log(err);
      });
  };

  const handleSubmit = event => {
    if (password === confirmPassword) {
      console.log(mail, name, password, confirmPassword);
      sendRegistrationDataToServer();
      setError(StatusMessage.registrationOk);
      setMail('');
      setName('');
      setPassword('');
      setConfirmPassword('');
    } else {
      setError(StatusMessage.passwordWrong);
    }
    event.preventDefault();
  };

  return (
    <Container>
      <FormTittle>
        <p>Rejestracja</p>
      </FormTittle>

      <form onSubmit={handleSubmit}>
        <Input
          label={titleElement.email}
          id='e-mail_Registration'
          type='email'
          value={mail}
          onChange={e => setMail(e.target.value)}
          autoComplete='email'
          placeholder={titleElement.email}
          minlength='4'
          required
        />

        <Input
          label={titleElement.name}
          id='name_Registration'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete='username'
          placeholder={titleElement.name}
          minlength='4'
          pattern='[a-zA-Z0-9]+'
          required
        />

        <Input
          label={titleElement.password}
          id='password_Registration'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete='new-password'
          placeholder={titleElement.password}
          minlength='4'
          required
        />

        <Input
          label={titleElement.confirmPassword}
          id='confirmPassword_Registration'
          type='password'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          autoComplete='new-password'
          placeholder={titleElement.confirmPassword}
          minlength='4'
          required
        />
        {error && <Error>{error}</Error>}
        <Submit id='Registration' type='submit' value={titleElement.submitRegistration} />
      </form>
    </Container>
  );
};

export default Registration;
