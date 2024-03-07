import { API, headers } from 'api/api';
import * as S from './style/StyleStatistics';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import ProgressBar from './ProgressBarr';

const Statistics = () => {
  const { setIsLoadingOpen } = useContext(GlobalContext);
  const [allAdvertisements, setAllAdvertisements] = useState([]);
  const [sellAdvertisements, setSellAdvertisements] = useState([]);
  const [buyAdvertisements, setBuyAdvertisements] = useState([]);
  const [vegetablesAdvertisements, setVegetablesAdvertisements] = useState([]);
  const [fruitAdvertisements, setFruitAdvertisements] = useState([]);
  const [cerealsAdvertisements, setCerealsAdvertisements] = useState([]);
  const [animalAdvertisements, setAnimalAdvertisements] = useState([]);
  const [mushroomsAdvertisements, setMushroomsAdvertisements] = useState([]);
  const [test, setTest] = useState([
    {
      name: 'vegetables',
      data: [],
    },
    {
      name: 'fruits',
      data: [],
    },
  ]);

  const baseValue = allAdvertisements.length;

  const dataToFilter = [
    {
      filterName: 'type',
      value: 'sellAnnouncement',
      cb: setSellAdvertisements,
    },
    {
      filterName: 'type',
      value: 'buyAnnouncement',
      cb: setBuyAdvertisements,
    },
    {
      filterName: 'category',
      value: 'vegetables',
      cb: setVegetablesAdvertisements,
    },
    {
      filterName: 'category',
      value: 'fruit',
      cb: setFruitAdvertisements,
    },
    {
      filterName: 'category',
      value: 'cereals',
      cb: setCerealsAdvertisements,
    },
    {
      filterName: 'category',
      value: 'animal',
      cb: setAnimalAdvertisements,
    },
    {
      filterName: 'category',
      value: 'mushrooms',
      cb: setMushroomsAdvertisements,
    },
  ];

  const dataType = [
    {
      tittle: `Oferty Kupna`,
      table: buyAdvertisements,
      color: 'statBuy',
    },
    {
      tittle: `Oferty Sprzedaży`,
      table: sellAdvertisements,
      color: 'statSell',
    },
  ];

  const dataCategory = [
    {
      tittle: 'Warzywa',
      table: vegetablesAdvertisements,
      color: 'statVegetables',
    },
    {
      tittle: 'Owoce',
      table: fruitAdvertisements,
      color: 'statFruit',
    },
    {
      tittle: 'Zboża',
      table: cerealsAdvertisements,
      color: 'statCereals',
    },
    {
      tittle: 'Zwierzęce',
      table: animalAdvertisements,
      color: 'statAnimal',
    },
    {
      tittle: 'Grzyby',
      table: mushroomsAdvertisements,
      color: 'statMushrooms',
    },
  ];

  const getAdvertisementData = () => {
    setIsLoadingOpen(true);
    fetch(API.getAdvertisement, {
      method: 'GET',
      headers,
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setAllAdvertisements(data);
        dataToFilter.forEach(el => {
          filterData(data, el.filterName, el.value, el.cb);
        });
      })
      .finally(() => {
        setIsLoadingOpen(false);
      });
  };

  useEffect(() => {
    getAdvertisementData();
  }, []);

  const filterData = (data, filterName, value, cb) => {
    const newArr = data?.filter(adv => adv[filterName] === `${value}`);
    cb(newArr);
  };

  const barRenderType = dataType.map(el => {
    return (
      <ProgressBar
        key={el.tittle}
        value={`${(el.table.length / baseValue) * 100}`}
        tittle={`${el.tittle}: ${el.table.length}`}
        color={el.color}
      />
    );
  });

  const barRenderCategory = dataCategory.map(el => {
    return (
      <ProgressBar
        key={el.tittle}
        value={`${(el.table.length / baseValue) * 100}`}
        tittle={`${el.tittle}: ${el.table.length}`}
        color={el.color}
      />
    );
  });

  return (
    <S.WrapperStatistics>
      <S.Tittle>Typ ogłoszeń</S.Tittle>
      <S.ProgressBarWrapper>{barRenderType}</S.ProgressBarWrapper>

      <S.Tittle>Kategoria</S.Tittle>
      <S.ProgressBarWrapper>{barRenderCategory}</S.ProgressBarWrapper>
    </S.WrapperStatistics>
  );
};
export default Statistics;
