import styled from 'styled-components';

export const WrapperSingleStatistics = styled.div`
  text-align: center;
  margin: 40px auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.GlassBorder};
  min-width: 300px;
  max-width: 800px;
  border-radius: 10px;
  border: outset 2px ${({ theme }) => theme.colors.BorderAdv};
  box-shadow: inset 0px 0px 80px -50px ${({ theme }) => theme.colors.statBoxShadow};
`;

export const WrapperStatistics = styled.div`
  text-align: center;
  margin: 40px auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.GlassBorder};
  min-width: 300px;
  max-width: 800px;
  height: 150px;
  border-radius: 10px;
  border: outset 2px ${({ theme }) => theme.colors.BorderAdv};
  box-shadow: inset 0px 0px 80px -50px ${({ theme }) => theme.colors.statBoxShadow};
`;

export const ProgressBarWrapper = styled.div`
  text-align: center;
  height: 25px;
  width: 100%;
  /* background-color: ${({ theme }) => theme.colors.statBuy}; */
  /* border: outset 2px ${({ theme }) => theme.colors.BorderAdv}; */
  /* border-radius: 10px; */
`;

export const ProgressBar = styled.div`
  height: 100%;
  width: ${({ value }) => `${value}%`};
  background-color: ${({ theme }) => theme.colors.statSell};
  border: outset 2px ${({ theme }) => theme.colors.BorderAdv};

  /* border-radius: 10px; */
`;
