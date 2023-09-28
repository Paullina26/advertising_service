import { WrapperLogo } from './Style/StyleNavigation';

export const Logo = ({ open }) => {
  return (
    <>
      <WrapperLogo open={open}>
        <h1>Logo</h1>
      </WrapperLogo>
    </>
  );
};

export default Logo;
