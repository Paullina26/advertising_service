import Navigation from 'components/Navigation/Navigation';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin-top: 55px;
`;

const Layout = props => {
  return (
    <>
      <Navigation />
      <Container>{props.children}</Container>
    </>
  );
};

export default Layout;
