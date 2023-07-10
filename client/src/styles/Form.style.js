import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin: 30px auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.BackgroundForm};
  width: 40vw;
  border-radius: 10px;
  box-shadow: 0px 2px 12px ${({ theme }) => theme.colors.BorderShadow};
`;

export const FormTittle = styled.div`
  margin: 10px;
  p {
    font-size: 30px;
    font-weight: bold;
  }
`;
