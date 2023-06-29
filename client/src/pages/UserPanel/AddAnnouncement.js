import { FormTittle } from 'styles/Form.style';
import { useState } from 'react';
import styled from 'styled-components';
import Input from 'components/Form/Input';
import Submit from 'components/Form/Submit';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Textarea from 'components/Form/Textarea';
import Select from 'components/Form/Select';

export const Container = styled.div`
  text-align: center;
  margin: 30px auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.BackgroundForm};
  min-width: 340px;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0px 2px 12px ${({ theme }) => theme.colors.BorderShadow};
  .titleAnnouncementStyle {
    width: 300px;
    text-align: start;
  }
  .containerClassPhone {
    margin: auto;
    width: 300px;
    padding: 0;
    margin-bottom: 15px;
  }
`;

const AddAnnouncement = () => {
  const [titleAnnouncement, setTitleAnnouncement] = useState('');
  const [descriptionAnnouncement, setDescriptionAnnouncement] = useState('');
  const [numberPhone, setNumberPhone] = useState('');
  const [cityAnnouncement, setCityAnnouncement] = useState('');
  const [provinceAnnouncement, setProvinceAnnouncement] = useState('');
  const [typeAnnouncement, setTypeAnnouncement] = useState('');
  const [priceAnnouncement, setPriceAnnouncement] = useState('');
  const [error, setError] = useState(null);

  const nameElement = {
    title: 'Tytuł ogłoszenia:',
    description: 'Opis:',
    numberPhone: 'Numer Telefonu:',
    city: 'Miasto:',
    province: 'Województwo:',
    type: 'Kupno/Sprzedaż:',
    price: 'Cena:',
    submit: 'Dodaj',
  };

  const selectOptionTypeAnnouncement = [
    { value: 'sellAnnouncement', label: 'Sprzedam' },
    { value: 'buyAnnouncement', label: 'Kupię' },
  ];

  const valueCleaning = () => {
    setTitleAnnouncement('');
    setDescriptionAnnouncement('');
    setNumberPhone('');
    setCityAnnouncement('');
    setPriceAnnouncement('');
    setTypeAnnouncement('');
    setProvinceAnnouncement('');
  };

  const handleSubmit = event => {
    // sendLoginDataToServer();
    // setError(StatusMessage.loginOk);
    console.log('dodano');
    console.log(titleAnnouncement);
    console.log(descriptionAnnouncement);
    console.log(numberPhone);
    console.log(cityAnnouncement);
    console.log(provinceAnnouncement);
    console.log(typeAnnouncement);
    console.log(priceAnnouncement);
    valueCleaning();
    event.preventDefault();
  };

  return (
    <Container>
      <FormTittle>
        <p>Dodaj Ogłoszenie</p>
      </FormTittle>
      <form onSubmit={handleSubmit}>
        <Input
          label={nameElement.title}
          id='title_announcement'
          type='text'
          value={titleAnnouncement}
          onChange={e => setTitleAnnouncement(e.target.value)}
          placeholder={nameElement.title}
          minlength='4'
          required
          className='titleAnnouncementStyle'
        />
        <Select
          label={nameElement.type}
          id='type_announcement'
          value={typeAnnouncement}
          onChange={e => setTypeAnnouncement(e.target.value)}
          placeholder={nameElement.type}
          required
          className='titleAnnouncementStyle'
          // valueOption={selectOptionTypeAnnouncement}
          options={selectOptionTypeAnnouncement}
        />
        <p>{nameElement.numberPhone}</p>
        <PhoneInput
          country={'pl'}
          label={nameElement.numberPhone}
          id='numberPhone_announcement'
          value={numberPhone}
          onChange={e => setNumberPhone(e)}
          specialLabel={nameElement.numberPhone}
          required
          containerClass='containerClassPhone'
        />
        <Input
          label={nameElement.province}
          id='city_announcement'
          type='text'
          value={provinceAnnouncement}
          onChange={e => setProvinceAnnouncement(e.target.value)}
          placeholder={nameElement.province}
          minlength='4'
          required
          className='titleAnnouncementStyle'
        />
        <Input
          label={nameElement.city}
          id='city_announcement'
          type='text'
          value={cityAnnouncement}
          onChange={e => setCityAnnouncement(e.target.value)}
          placeholder={nameElement.city}
          minlength='4'
          required
          className='titleAnnouncementStyle'
        />
        <Input
          label={nameElement.price}
          id='price_announcement'
          type='text'
          value={priceAnnouncement}
          onChange={e => setPriceAnnouncement(e.target.value)}
          placeholder={nameElement.price}
          minlength='4'
          required
          className='titleAnnouncementStyle'
        />
        <Textarea
          placeholder={nameElement.description}
          label={nameElement.description}
          value={descriptionAnnouncement}
          name='descriptionAnnouncement'
          id='description_announcement'
          onChange={e => setDescriptionAnnouncement(e.target.value)}
          cols='30'
          rows='10'
          maxLength='100'
        />
        <Submit id='AddAnnouncement' type='submit' value={nameElement.submit} />
      </form>
    </Container>
  );
};

export default AddAnnouncement;
