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
    if ((mail, name, password, passwordCheck === '')) {
      console.log('wypełnij formularz');
    } else {
      console.log(mail, name, password, passwordCheck);
    }
    event.preventDefault();
  };

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
          placeholder='E-mail'
        />

        <Input
          label='Nazwa użytkownika:'
          id='name'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete='username'
          placeholder='Nazwa użytkownika'
        />

        <Input
          label='Hasło:'
          id='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete='new-password'
          placeholder='Hasło'
        />

        <Input
          label='Powtórz Hasło:'
          id='passwordCheck'
          type='password'
          value={passwordCheck}
          onChange={e => setPasswordCheck(e.target.value)}
          autoComplete='new-password'
          placeholder='Powtórz Hasło'
        />
        <Submit id='Registration' type='submit' value='Zarejestruj' onClick={handleSubmit} />
      </form>
    </Container>
  );
};

export default Registration;
