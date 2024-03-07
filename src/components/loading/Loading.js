import styled from 'styled-components';

export const WrapperLoading = styled.div`
  z-index: 1000;
  margin: auto;
  border-radius: 10px;
  min-width: 90vw;
  max-width: 350px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.GlassBorder};
  border: outset 2px ${({ theme }) => theme.colors.BorderAdv};
  box-shadow: inset 0px 0px 80px -50px ${({ theme }) => theme.colors.BorderAdv};
  /* position: fixed; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const LoadingElement = styled.div`
  font-size: 4rem;
`;

export const Loading = () => {
  return (
    <WrapperLoading>
      <LoadingElement>Ładowanie...</LoadingElement>
    </WrapperLoading>
  );
};

export default Loading;
