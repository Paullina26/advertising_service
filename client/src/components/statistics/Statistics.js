import { API, headers } from 'api/api';
import * as S from './style/StyleStatistics';
import { useContext, useEffect, useState } from 'react';

const Statistics = () => {
  const [allAdvertisements, setAllAdvertisements] = useState([]);
  const [sellAdvertisements, setSellAdvertisements] = useState([]);
  const [buyAdvertisements, setBuyAdvertisements] = useState([]);
  const [fruitAdvertisements, setFruitAdvertisements] = useState([]);
  const [vegetablesAdvertisements, setVegetablesAdvertisements] = useState([]);
  const [cerealsAdvertisements, setCerealsAdvertisements] = useState([]);
  const [animalAdvertisements, setAnimalAdvertisements] = useState([]);
  const [mushroomsAdvertisements, setMushroomsAdvertisements] = useState([]);

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
        setAllAdvertisements(data);
        const newArrSell = data.filter(adv => adv.type === 'sellAnnouncement');
        setSellAdvertisements(newArrSell);
        const newArrBuy = data.filter(adv => adv.type === 'buyAnnouncement');
        setBuyAdvertisements(newArrBuy);
        const newArrCatFru = data.filter(adv => adv.category === 'fruit');
        setFruitAdvertisements(newArrCatFru);
        const newArrCatVeg = data.filter(adv => adv.category === 'vegetables');
        setVegetablesAdvertisements(newArrCatVeg);
        const newArrCatCer = data.filter(adv => adv.category === 'cereals');
        setCerealsAdvertisements(newArrCatCer);
        const newArrCatAni = data.filter(adv => adv.category === 'animal');
        setAnimalAdvertisements(newArrCatAni);
        const newArrCatMus = data.filter(adv => adv.category === 'mushrooms');
        setMushroomsAdvertisements(newArrCatMus);
      });
    // .finally() => //loading false;
  };

  useEffect(() => {
    getAdvertisementData();
    // filterData();
  }, []);

  // console.log('wszystkie', allAdvertisements);
  // console.log('sprzedane', sellAdvertisements);

  // const filterData = () => {
  //   const newArr = allAdvertisements.filter(adv => adv.type === 'sellAnnouncement');
  //   setSellAdvertisements(newArr);
  //   console.log('2', sellAdvertisements);
  // };

  const baseValue = allAdvertisements.length;

  return (
    <>
      <S.WrapperSingleStatistics>
        <div>Statystyki</div>
        <div>Wszystich Ogłoszeń: {allAdvertisements.length}</div>
        <div>Ofert Kupna: {buyAdvertisements.length}</div>
        <div>Ofert Sprzedaży: {sellAdvertisements.length}</div>
        <div>Owoce: {fruitAdvertisements.length}</div>
        <div>Warzywa: {vegetablesAdvertisements.length}</div>
        <div>Zboża: {cerealsAdvertisements.length}</div>
        <div>Zwierzęce: {animalAdvertisements.length}</div>
        <div>Grzyby: {mushroomsAdvertisements.length}</div>
      </S.WrapperSingleStatistics>
      <S.WrapperStatistics>
        <S.ProgressBarWrapper>
          <div>Ofert Kupna: {buyAdvertisements.length}</div>
          <S.ProgressBar value={(buyAdvertisements.length / baseValue) * 100}>
            {buyAdvertisements.length}
          </S.ProgressBar>
          <div>Ofert Sprzedaży: {sellAdvertisements.length}</div>
          <S.ProgressBar value={(sellAdvertisements.length / baseValue) * 100}>
            {sellAdvertisements.length}
          </S.ProgressBar>
        </S.ProgressBarWrapper>
      </S.WrapperStatistics>
    </>
  );
};
export default Statistics;
