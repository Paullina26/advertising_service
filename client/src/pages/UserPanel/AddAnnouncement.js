import { Container, FormTittle } from 'styles/Form.style';
import { useState } from 'react';
import styled from 'styled-components';
import Input from 'components/Form/Input';
import Submit from 'components/Form/Submit';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// export const PhoneInput = styled(PhoneInput)`
//   background-color: black;
// `;

const AddAnnouncement = () => {
  const [titleAnnouncement, setTitleAnnouncement] = useState('');
  const [descriptionAnnouncement, setDescriptionAnnouncement] = useState('');
  const [numberPhone, setNumberPhone] = useState('');
  const [error, setError] = useState(null);

  const titleElement = {
    title: 'Tytuł ogłoszenia',
    description: 'Opis',
    numberPhone: 'Numer Telefonu',
    submit: 'Dodaj',
  };

  const handleSubmit = event => {
    // sendLoginDataToServer();
    // setError(StatusMessage.loginOk);
    console.log('dodano');
    event.preventDefault();
  };

  return (
    <Container>
      <FormTittle>
        <p>Dodaj Ogłoszenie</p>
      </FormTittle>
      <form onSubmit={handleSubmit}>
        <Input
          label={titleElement.title}
          id='title_announcement'
          type='text'
          value={titleAnnouncement}
          onChange={e => setTitleAnnouncement(e.target.value)}
          placeholder={titleElement.title}
          minlength='4'
          required
        />
        <PhoneInput
          country={'pl'}
          label={titleElement.numberPhone}
          id='numberPhone_announcement'
          // type='tel'
          value={numberPhone}
          onChange={e => setNumberPhone(e)}
          placeholder={titleElement.numberPhone}
          required
          // containerClass='dupa'
          // containerStyle={{
          //   backgroundColor: 'red',
          // }}
        />
        <Input
          label={titleElement.description}
          id='description_announcement'
          type='text'
          value={descriptionAnnouncement}
          onChange={e => setDescriptionAnnouncement(e.target.value)}
          placeholder={titleElement.description}
          minlength='4'
          required
        />
        <Submit id='AddAnnouncement' type='submit' value={titleElement.submit} />
      </form>
    </Container>
  );
};

export default AddAnnouncement;
