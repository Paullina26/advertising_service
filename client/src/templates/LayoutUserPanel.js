import styled from 'styled-components';
import NavigationUserPanel from 'components/Navigation/NavigationUserPanel';

export const Container = styled.div`
  width: 95vw;
  margin: 0 auto;
  padding: 10px;
`;

const LayoutUserPanel = props => {
  return (
    <>
      <NavigationUserPanel />
      <Container>{props.children}</Container>
    </>
  );
};

export default LayoutUserPanel;
