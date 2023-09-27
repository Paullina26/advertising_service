import { useState, useEffect } from 'react';
import Select from 'components/Form/Select';
import { Button } from 'components/buttons/Button';
import {
  nameElement,
  selectOptionCategory,
  selectOptionProvince,
  selectOptionType,
} from 'data/data';
import { WrapperFilter, WrapperButtons, WrapperSelect } from './Style/StyleFilter';

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
      <WrapperFilter>
        <WrapperSelect>
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
        </WrapperSelect>

        <WrapperButtons>
          <Button onClick={handleSearch}>Filtruj</Button>
          <Button>Usuń filtry</Button>
        </WrapperButtons>
      </WrapperFilter>
    </>
  );
};
export default FilterData;
