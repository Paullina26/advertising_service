import Navigation from 'components/Navigation/Navigation';
import styled from 'styled-components';
import Banner from 'components/Banners/Banner';
import NavigationPanel from 'components/Navigation/NavigationPanel';

export const Container = styled.div`
  width: 100vw;
  margin-top: 55px;
`;

const Layout = props => {
  return (
    <>
      <Navigation />
      <Banner />
      <NavigationPanel />
      <Container>{props.children}</Container>
    </>
  );
};

export default Layout;
