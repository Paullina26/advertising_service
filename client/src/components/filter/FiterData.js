import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { API, headers } from 'api/api';
import Select from 'components/Form/Select';
import { Button } from 'components/buttons/Button';
import {
  nameElement,
  selectOptionCategory,
  selectOptionProvince,
  selectOptionType,
} from 'data/data';

export const ContainerFilter = styled.div`
  display: flex;
  font-size: 15px;
  align-items: start;
  /* justify-content: space-between; */
  padding: 10px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  font-size: 15px;
  align-items: start;
  padding: 10px;
`;

export const ContainerSelect = styled.div`
  display: flex;
  font-size: 15px;
  align-items: start;
  padding: 10px;
`;

const FilterData = () => {
  const selectOptionProvinceNew = [{ value: 'all', label: 'Wszystko' }, ...selectOptionProvince];
  const selectOptionTypeNew = [{ value: 'all', label: 'Wszystko' }, ...selectOptionType];
  const selectOptionCategoryNew = [{ value: 'all', label: 'Wszystko' }, ...selectOptionCategory];

  const [allAdvertisement, setAllAdvertisement] = useState([]);
  const [filterAdvertisement, setFilterAdvertisement] = useState([]);

  const [province, setProvince] = useState('all');
  const [type, setType] = useState('all');
  const [category, setCategory] = useState('all');

  const getAdvertisementData = () => {
    // loading true
    fetch(API.getAdvertisement, {
      method: 'GET',
      headers,
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setAllAdvertisement(data);
      });
    // .finally() => //loading false;
  };

  useEffect(() => {
    getAdvertisementData();
  }, []);

  const handleSearch = () => {
    if (type === 'all') {
      setFilterAdvertisement(allAdvertisement);
      console.log('FilterType', filterAdvertisement);
    }
    if (province === 'all') {
      setFilterAdvertisement(allAdvertisement);
      console.log('FilterProvince', filterAdvertisement);
    }
    if (category === 'all') {
      setFilterAdvertisement(allAdvertisement);
      console.log('FilterCategory', filterAdvertisement);
    }
    console.log('FilterFinish', filterAdvertisement);
  };

  // console.log('All', allAdvertisement);
  // console.log('Filter', filterAdvertisement);
  // console.log(allAdvertisement.map(adv => adv.type));

  return (
    <>
      <ContainerFilter>
        <ContainerSelect>
          <Select
            // label={nameElement.province}
            id='province_filter'
            value={province}
            onChange={e => setProvince(e.target.value)}
            placeholder={nameElement.province}
            required
            className='titleAnnouncementStyle'
            options={selectOptionProvinceNew}
          />
          <Select
            // label={nameElement.type}
            id='type_filter'
            value={type}
            onChange={e => setType(e.target.value)}
            placeholder={nameElement.type}
            required
            className='titleAnnouncementStyle'
            options={selectOptionTypeNew}
          />
          <Select
            // label={nameElement.category}
            id='category_filter'
            value={category}
            onChange={e => setCategory(e.target.value)}
            placeholder={nameElement.category}
            required
            className='titleAnnouncementStyle'
            options={selectOptionCategoryNew}
          />
        </ContainerSelect>

        <ContainerButtons>
          <Button onClick={handleSearch}>Filtruj</Button>
          <Button>Usuń filtry</Button>
        </ContainerButtons>
      </ContainerFilter>
    </>
  );
};
export default FilterData;
