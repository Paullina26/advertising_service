import { useState } from 'react';
import Input from './Input';
import Submit from 'components/Form/Submit';
import { Container, FormTittle } from 'styles/Form.style';
import { Error } from 'components/Form/Error.style';
import { nameElement, StatusMessage } from 'data/data';

const Registration = () => {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

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
      setError(StatusMessage.passwordWrongRegistration);
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
          label={nameElement.email}
          id='e-mail_Registration'
          type='email'
          value={mail}
          onChange={e => setMail(e.target.value)}
          autoComplete='email'
          placeholder={nameElement.email}
          minlength='4'
          required
        />

        <Input
          label={nameElement.nameUser}
          id='name_Registration'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete='username'
          placeholder={nameElement.nameUser}
          minlength='4'
          pattern='[a-zA-Z0-9]+'
          required
        />

        <Input
          label={nameElement.password}
          id='password_Registration'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete='new-password'
          placeholder={nameElement.password}
          minlength='4'
          required
        />

        <Input
          label={nameElement.confirmPassword}
          id='confirmPassword_Registration'
          type='password'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          autoComplete='new-password'
          placeholder={nameElement.confirmPassword}
          minlength='4'
          required
        />
        {error && <Error>{error}</Error>}
        <Submit id='Registration' type='submit' value={nameElement.submitRegistration} />
      </form>
    </Container>
  );
};

export default Registration;
