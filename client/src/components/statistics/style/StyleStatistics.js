import styled, { keyframes } from 'styled-components';
import { device } from 'styles/theme.styles';

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
  width: 70vw;
  /* height: 300px; */
  border-radius: 10px;
  border: outset 2px ${({ theme }) => theme.colors.BorderAdv};
  box-shadow: inset 0px 0px 80px -50px ${({ theme }) => theme.colors.statBoxShadow};
  @media ${device.mobileM} {
    min-width: 90vw;
    max-width: 90vw;
  }
`;

export const Tittle = styled.div`
  font-size: 2.5rem;
`;

export const ProgressBarWrapper = styled.div`
  margin: 10px 0 20px;
  text-align: left;
  width: 100%;
  border: dotted 1px ${({ theme }) => theme.colors.statBoxShadow};
  border-radius: 0 20px 20px 0;
`;

const animationProgressBar = keyframes`
  from {
    width: 0;
  }

  to {
    width: ${({ value }) => `${value}%`};
  }
`;

export const ProgressBar = styled.div`
  height: 100%;
  animation: ${animationProgressBar} linear 1s;
  width: ${({ value }) => `${value}%`};
  background-color: ${({ bgcColor }) => bgcColor};
  border-radius: 0 20px 20px 0;
  border: outset 2px ${({ theme }) => theme.colors.BorderAdv};
  box-shadow: rgba(0, 0, 0, 0.1) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.08) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.08) 0px -79px 40px 0px inset;

  p {
    font-size: 2rem;
    margin-left: 10px;
    width: 200px;
  }
`;
