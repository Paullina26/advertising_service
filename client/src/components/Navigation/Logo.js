import * as S from './Style/StyleNavigation';

export const Logo = ({ open }) => {
  return (
    <>
      <S.WrapperLogo open={open}>
        <h1>Logo</h1>
      </S.WrapperLogo>
    </>
  );
};

export default Logo;
