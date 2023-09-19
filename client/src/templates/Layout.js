import Navigation from 'components/Navigation/Navigation';
import styled from 'styled-components';
import Banner from 'components/Banners/Banner';
import NavigationPanel from 'components/Navigation/NavigationPanel';

export const Container = styled.div`
  width: 100vw;
  padding-top: 250px;
`;

export const ContainerNavigation = styled.div`
  margin-top: 0;
  position: fixed;
  background-color: #d7dbd7;
`;

const Layout = props => {
  return (
    <>
      <ContainerNavigation>
        <Navigation />
        <Banner />
        <NavigationPanel />
      </ContainerNavigation>
      <Container>{props.children}</Container>
    </>
  );
};

export default Layout;
