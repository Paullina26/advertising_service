import { useState } from 'react';
import Input from '../components/Form/Input';
import Submit from 'components/Form/Submit';
import { Container, FormTittle } from 'styles/Form.style';

const Registration = () => {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  // console.log(mail);
  // console.log(password);
  // console.log(passwordCheck);
  // console.log(name);

  const handleSubmit = event => {
    if (password === passwordCheck) {
      console.log(mail, name, password, passwordCheck);
    } else {
      console.log('hasła są różne');
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
          label='E-mail:'
          id='e-mail'
          type='email'
          value={mail}
          onChange={e => setMail(e.target.value)}
          autoComplete='email'
          placeholder='E-mail'
          minlength='4'
          required
        />

        <Input
          label='Nazwa użytkownika:'
          id='name'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete='username'
          placeholder='Nazwa użytkownika'
          minlength='4'
          pattern='[a-zA-Z0-9]+'
          required
        />

        <Input
          label='Hasło:'
          id='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete='new-password'
          placeholder='Hasło'
          minlength='4'
          required
        />

        <Input
          label='Powtórz Hasło:'
          id='passwordCheck'
          type='password'
          value={passwordCheck}
          onChange={e => setPasswordCheck(e.target.value)}
          autoComplete='new-password'
          placeholder='Powtórz Hasło'
          minlength='4'
          required
        />
        <Submit id='Registration' type='submit' value='Zarejestruj' />
      </form>
    </Container>
  );
};

export default Registration;
