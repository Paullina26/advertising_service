import Navigation from 'components/Navigation/Navigation';
import styled from 'styled-components';

export const Container = styled.div`
  width: 95vw;
  margin: 0 auto;
  padding: 10px;
`;

const Layout = props => {
  return (
    <div>
      <Navigation />
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
