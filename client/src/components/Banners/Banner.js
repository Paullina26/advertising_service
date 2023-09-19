import styled from 'styled-components';
import BannerPicture from '../../assets/BannerPicture.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 150px;
  text-align: center;
  /* background-color: white; */

  img {
    position: relative;
    max-width: 100%;
    height: 150px;
    z-index: -1;
  }
`;

const Banner = () => {
  return (
    <>
      <Container>
        <img src={BannerPicture} />
      </Container>
    </>
  );
};

export default Banner;
