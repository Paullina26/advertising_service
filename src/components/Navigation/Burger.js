import { useContext } from 'react';
import * as S from './Style/StyleBurger';
import { GlobalContext } from 'utils/GlobalContext';

export const Burger = () => {
  const { isOpenMenu, setIsOpenMenu } = useContext(GlobalContext);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <S.BurgerWrapper open={isOpenMenu} onClick={handleMenu}>
        {isOpenMenu ? <S.StyledCloseBurgerIcon /> : <S.StyledBurgerIcon />}
      </S.BurgerWrapper>
    </>
  );
};

export default Burger;
