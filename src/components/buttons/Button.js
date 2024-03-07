import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 5px;
  font-size: 2rem;
  padding: 5px 20px;
  border: 0px;
  margin: 5px auto;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.FontLight};
  background-color: ${({ theme }) => theme.colors.BackgroundSubmit};
  box-shadow: 0px 0px 12px ${({ theme }) => theme.colors.BorderShadow};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.FontSubmitHover};
    background-color: ${({ theme }) => theme.colors.FontLight};
    box-shadow: 0px 0px 20px ${({ theme }) => theme.colors.BorderShadowLight};
  }
`;
