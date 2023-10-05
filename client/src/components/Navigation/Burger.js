import { useContext } from 'react';
import * as S from './Style/StyleBurger';
import { GlobalContext } from 'utils/GlobalContext';

export const Burger = () => {
  const { isOpenMenu, setIsOpenMenu } = useContext(GlobalContext);

  const hendleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <S.BurgerWrapper open={isOpenMenu} onClick={hendleMenu}>
        {isOpenMenu ? <S.StyledCloseBurgerIcon /> : <S.StyledBurgerIcon />}
      </S.BurgerWrapper>
    </>
  );
};

export default Burger;
