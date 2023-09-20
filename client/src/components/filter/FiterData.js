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
  width: 100vw;
  position: fixed;
  margin-left: -5vw;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.Background};
  padding: 10px 0;
  display: flex;
  font-size: 15px;
`;

export const ContainerButtons = styled.div`
  margin-left: 10px;
  Button {
    margin-right: 10px;
  }
`;

export const ContainerSelect = styled.div`
  display: flex;
  margin-right: 15px;
  Select {
    margin: 0;
    margin-right: 10px;
  }
`;

const FilterData = ({ setFilterAdvertisement, advertisements }) => {
  const selectOptionProvinceNew = [{ value: 'all', label: 'Wszystko' }, ...selectOptionProvince];
  const selectOptionTypeNew = [{ value: 'all', label: 'Wszystko' }, ...selectOptionType];
  const selectOptionCategoryNew = [{ value: 'all', label: 'Wszystko' }, ...selectOptionCategory];

  const [province, setProvince] = useState('all');
  const [type, setType] = useState('all');
  const [category, setCategory] = useState('all');

  const handleSearch = () => {
    const newArr = advertisements
      .filter(adv => type === 'all' || adv.type === type)
      .filter(adv => province === 'all' || adv.province === province)
      .filter(adv => category === 'all' || adv.category === category);
    setFilterAdvertisement(newArr);
  };

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
