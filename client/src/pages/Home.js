import Advertisement from 'components/advertisement/Advertisement';
import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin: auto;
  width: 90vw;
`;

export const HomePage = () => {
  return (
    <>
      <Container>
        <Advertisement />
      </Container>
    </>
  );
};

export default HomePage;
