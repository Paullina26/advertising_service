import styled from 'styled-components';

export const Container = styled.div`
  width: 95vw;
  margin: 0 auto;
  padding: 10px;
`;

const LayoutUserPanel = props => {
  return (
    <>
      {/* <Navigation /> */}
      <div>Nawigacja</div>
      <Container>{props.children}</Container>
    </>
  );
};

export default LayoutUserPanel;
