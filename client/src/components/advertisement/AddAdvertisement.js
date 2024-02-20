import { useState } from 'react';
import Input from 'components/Form/Input';
import Submit from 'components/Form/Submit';
import PhoneInput from 'react-phone-input-2';
import Textarea from 'components/Form/Textarea';
import Select from 'components/Form/Select';
import {
  nameElement,
  selectOptionCategory,
  selectOptionProvince,
  selectOptionType,
} from 'data/data';
import { headers, API } from 'api/api';
import { FormTittle } from 'components/Form/Style/StyleForm';
import { WrapperAddAdvertisement } from './Style/StyleAdvertisement';

const AddAdvertisement = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('province1');
  const [type, setType] = useState('sellAnnouncement');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('vegetables');
  const [errorPhone, setErrorPhone] = useState(true);

  const valueCleaning = () => {
    setTitle('');
    setDescription('');
    setPhone('+48');
    setCity('');
    setPrice('');
    setType('sellAnnouncement');
    setProvince('province1');
    setCategory('vegetables');
  };

  const sendFormAdvertisementDataToServer = () => {
    const token = localStorage.TOKEN;
    fetch(API.postAdvertisement, {
      method: 'POST',
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : null,
      },
      body: JSON.stringify({
        title,
        description,
        phone,
        city,
        province,
        type,
        price,
        category,
      }),
    })
      .then(response => {
        // console.log(response.status);
        if (response.status === 200) {
          console.log('OGŁOSZENIE DODANE');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (phone.length < 5) {
      return setErrorPhone(false);
    }
    sendFormAdvertisementDataToServer();
    valueCleaning();
  };

  const handlePhone = event => {
    if (event.length > 5) setErrorPhone(true);
    else setErrorPhone(false);
    setPhone(event);
  };

  return (
    <WrapperAddAdvertisement>
      <FormTittle>
        <p>Dodaj Ogłoszenie</p>
      </FormTittle>
      <form onSubmit={handleSubmit}>
        <Select
          label={nameElement.type}
          id='type_announcement'
          value={type}
          onChange={e => setType(e.target.value)}
          placeholder={nameElement.type}
          required
          className='titleAnnouncementStyle'
          options={selectOptionType}
        />{' '}
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
        <Input
          label={nameElement.titleAdvertisement}
          id='title_announcement'
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder={nameElement.titleAdvertisement}
          minlength='4'
          required
          className='titleAnnouncementStyle'
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
          maxLength='200'
        />
        <Submit id='AddAnnouncement' type='submit' value={nameElement.submitAddAdvertisement} />
      </form>
    </WrapperAddAdvertisement>
  );
};

export default AddAdvertisement;
