import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin: 30px auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.BackgroundForm};
  min-width: 340px;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0px 2px 12px ${({ theme }) => theme.colors.BorderShadow};
  p {
    color: red;
  }
`;

export const SingleAdvertisement = props => {
  return (
    <>
      <Container>
        <div>
          <p>TYTUŁ:</p> {props.data.title}
        </div>

        <div>
          <p>NUMER TELEFONU:</p> {props.data.phone}
        </div>
        <div>
          <p>WOJEWÓDZTWO:</p> {props.data.province}
        </div>
        <div>
          <p>MIASTO:</p> {props.data.city}
        </div>
        <div>
          <p>TYP OGŁOSZENIA:</p> {props.data.type}
        </div>
        <div>
          <p>CENA:</p> {props.data.price}
        </div>
        <div>
          <p>OPIS:</p> {props.data.description}
        </div>
      </Container>
    </>
  );
};
export default SingleAdvertisement;
