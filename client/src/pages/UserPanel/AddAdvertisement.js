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

const AddAdvertisement = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [errorPhone, setErrorPhone] = useState(true);

  const nameElement = {
    title: 'Tytuł ogłoszenia:',
    description: 'Opis:',
    numberPhone: 'Numer Telefonu:',
    city: 'Miasto:',
    province: 'Województwo:',
    type: 'Kupno/Sprzedaż:',
    price: 'Cena:',
    category: 'Kategoria:',
    submit: 'Dodaj',
  };

  const selectOptionType = [
    { value: 'sellAnnouncement', label: 'Sprzedam' },
    { value: 'buyAnnouncement', label: 'Kupię' },
  ];

  const selectOptionProvince = [
    { value: 'province1', label: 'Dolnośląskie' },
    { value: 'province2', label: 'Kujawsko-Pomorskie' },
    { value: 'province3', label: 'Lubelskie' },
    { value: 'province4', label: 'Lubuskie' },
    { value: 'province5', label: 'Łódzkie' },
    { value: 'province6', label: 'Małopolskie' },
    { value: 'province7', label: 'Mazowieckie' },
    { value: 'province8', label: 'Opolskie' },
    { value: 'province9', label: 'Podkarpackie' },
    { value: 'province10', label: 'Podlaskie' },
    { value: 'province11', label: 'Pomorskie' },
    { value: 'province12', label: 'Śląskie' },
    { value: 'province13', label: 'Świętokrzyskie' },
    { value: 'province14', label: 'Warmińsko-Mazurskie' },
    { value: 'province15', label: 'Wielkopolskie' },
    { value: 'province16', label: 'Zachodniopomorskie' },
  ];

  const selectOptionCategory = [
    { value: 'vegetables', label: 'Warzywa' },
    { value: 'fruit', label: 'Owoce' },
  ];

  const valueCleaning = () => {
    setTitle('');
    setDescription('');
    setPhone('+48');
    setCity('');
    setPrice('');
    setType({ value: 'sellAnnouncement', label: 'Sprzedam' });
    setProvince({ value: 'province1', label: 'Dolnośląskie' });
    setCategory({ value: 'vegetables', label: 'Warzywa' });
  };

  const handleSubmit = event => {
    // sendLoginDataToServer();
    // setError(StatusMessage.loginOk);
    event.preventDefault();

    console.log('dodano');
    console.log(title);
    console.log(description);
    console.log(phone);
    console.log(city);
    console.log(province);
    console.log(type);
    console.log(price);
    console.log(category);
    if (phone.length < 5) {
      return setErrorPhone(false);
    }
    valueCleaning();
  };

  const handlePhone = event => {
    if (event.length > 5) setErrorPhone(true);
    else setErrorPhone(false);
    setPhone(event);
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
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder={nameElement.title}
          minlength='4'
          required
          className='titleAnnouncementStyle'
        />
        <Select
          label={nameElement.type}
          id='type_announcement'
          value={type}
          onChange={e => setType(e.target.value)}
          placeholder={nameElement.type}
          required
          className='titleAnnouncementStyle'
          options={selectOptionType}
        />
        <Select
          label={nameElement.category}
          id='category_announcement'
          value={category}
          onChange={e => setCategory(e.target.value)}
          placeholder={nameElement.category}
          required
          className='titleAnnouncementStyle'
          options={selectOptionCategory}
        />
        <p>{nameElement.numberPhone}</p>
        <PhoneInput
          country={'pl'}
          label={nameElement.numberPhone}
          id='numberPhone_announcement'
          value={phone}
          onChange={e => handlePhone(e)}
          specialLabel={nameElement.numberPhone}
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true,
          }}
          containerClass='containerClassPhone'
          isValid={errorPhone}
        />
        <Select
          label={nameElement.province}
          id='province_announcement'
          value={province}
          onChange={e => setProvince(e.target.value)}
          placeholder={nameElement.province}
          required
          className='titleAnnouncementStyle'
          options={selectOptionProvince}
        />
        <Input
          label={nameElement.city}
          id='city_announcement'
          type='text'
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder={nameElement.city}
          minlength='4'
          required
          className='titleAnnouncementStyle'
        />
        <Input
          label={nameElement.price}
          id='price_announcement'
          type='text'
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder={nameElement.price}
          minlength='4'
          required
          className='titleAnnouncementStyle'
        />
        <Textarea
          placeholder={nameElement.description}
          label={nameElement.description}
          value={description}
          name='description'
          id='description_announcement'
          onChange={e => setDescription(e.target.value)}
          cols='30'
          rows='10'
          maxLength='100'
        />
        <Submit id='AddAnnouncement' type='submit' value={nameElement.submit} />
      </form>
    </Container>
  );
};

export default AddAdvertisement;
