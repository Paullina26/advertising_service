import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 5px;
  font-size: 20px;
  padding: 3px 15px;
  /* margin-top: 20px; */
  margin-right: 0px;
  color: ${({ theme, logout }) => (logout ? theme.colors.Font : theme.colors.FontLight)};
  background-color: ${({ theme, logout }) =>
    logout ? theme.colors.BackgroundButtonLogout : theme.colors.BackgroundSubmit};
  border: 2px solid
    ${({ theme, logout }) => (logout ? theme.colors.BorderLogout : theme.colors.Border)};
  box-shadow: 0px 2px 12px ${({ theme }) => theme.colors.BorderShadow};

  cursor: pointer;
  :hover {
    color: ${({ theme, logout }) =>
      logout ? theme.colors.FontLight : theme.colors.FontSubmitHover};
    background-color: ${({ theme, logout }) =>
      logout ? theme.colors.BackgroundSubmit : theme.colors.BackgroundButton};
    border: 2px solid ${({ theme, logout }) => (logout ? theme.colors.Border : theme.colors.Border)};
  }
`;
