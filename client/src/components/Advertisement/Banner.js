import styled from 'styled-components';
import BannerPicture from '../../assets/BannerPicture.jpg';
export const Container = styled.div`
  width: 100vw;
  height: 150px;
  text-align: center;

  img {
    position: relative;
    width: auto;
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
