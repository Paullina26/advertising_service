import styled from 'styled-components';
import { Container } from 'styles/Form.style';

export const Advertisement = () => {
  return (
    <>
      <Container>
        <p>Tytuł ogłoszenia</p>
        <p>kategoria</p>
        <p>numer telefonu</p>
        <p>miasto</p>
        <p>województwo</p>
        <p>price</p>
        <p>opis</p>
      </Container>
    </>
  );
};

export default Advertisement;
