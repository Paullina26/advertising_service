import { useState } from 'react';
import Input from '../components/Form/Input';
import Submit from 'components/Form/Submit';
import { Container, FormTittle } from 'styles/Form.style';

const Registration = () => {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  console.log(mail);
  console.log(password);
  console.log(passwordCheck);
  console.log(name);

  return (
    <Container>
      <FormTittle>
        <p>Rejestracja</p>
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
          label='Nazwa użytkownika:'
          id='name'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete='username'
        />

        <Input
          label='Hasło:'
          id='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete='new-password'
        />

        <Input
          label='Powtórz Hasło:'
          id='passwordCheck'
          type='password'
          value={passwordCheck}
          onChange={e => setPasswordCheck(e.target.value)}
          autoComplete='new-password'
        />
        <Submit id='Registration' type='submit' value='Zarejestruj' />
      </form>
    </Container>
  );
};

export default Registration;
