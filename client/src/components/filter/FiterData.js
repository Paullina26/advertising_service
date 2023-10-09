import { useState, useEffect, useContext } from 'react';
import Select from 'components/Form/Select';
import { GlobalContext } from 'utils/GlobalContext';

import { Button } from 'components/buttons/Button';
import {
  nameElement,
  selectOptionCategory,
  selectOptionProvince,
  selectOptionType,
} from 'data/data';
import * as S from './Style/StyleFilter';

const FilterData = ({ setFilterAdvertisement, advertisements }) => {
  const { setIsLoadingOpen } = useContext(GlobalContext);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const selectOptionProvinceNew = [{ value: 'all', label: 'Wszystko' }, ...selectOptionProvince];
  const selectOptionTypeNew = [{ value: 'all', label: 'Wszystko' }, ...selectOptionType];
  const selectOptionCategoryNew = [{ value: 'all', label: 'Wszystko' }, ...selectOptionCategory];

  const [province, setProvince] = useState('all');
  const [type, setType] = useState('all');
  const [category, setCategory] = useState('all');

  const handleSearch = () => {
    setIsLoadingOpen(true);
    const newArr = advertisements
      .filter(adv => type === 'all' || adv.type === type)
      .filter(adv => province === 'all' || adv.province === province)
      .filter(adv => category === 'all' || adv.category === category);
    setFilterAdvertisement(newArr);
    setIsOpenFilter(!isOpenFilter);
    setIsLoadingOpen(false);
  };

  const handleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  return (
    <S.Wrapper>
      <S.WrapperFilterIcon>
        <Button onClick={handleFilter}>
          <p>Filtry</p>
          <S.StyledIconFilter />
        </Button>
      </S.WrapperFilterIcon>
      {isOpenFilter && (
        <S.WrapperFilter>
          <S.WrapperSelect>
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
          </S.WrapperSelect>

          <S.WrapperButtons>
            <Button onClick={handleSearch}>Filtruj</Button>
            <Button>Usuń filtry</Button>
          </S.WrapperButtons>
        </S.WrapperFilter>
      )}
    </S.Wrapper>
  );
};
export default FilterData;
