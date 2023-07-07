import Navigation from 'components/Navigation/Navigation';
import styled from 'styled-components';
import Banner from 'components/Banners/Banner';
import NavigationUserPanel from 'components/Navigation/NavigationUserPanel';

export const Container = styled.div`
  width: 100vw;
  margin-top: 55px;
`;

const Layout = props => {
  return (
    <>
      <Navigation />
      <Banner />
      <NavigationUserPanel />
      <Container>{props.children}</Container>
    </>
  );
};

export default Layout;
