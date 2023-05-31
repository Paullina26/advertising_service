import styled from 'styled-components';

export const Button = styled.button`
  /* display: block; */
  border-radius: 15px;
  font-size: 20px;
  padding: 5px 15px;
  border: 0px;
  margin-top: 20px;
  color: ${({ theme, logout }) => (logout ? theme.colors.Font : theme.colors.FontLight)};
  background-color: ${({ theme, logout }) =>
    logout ? theme.colors.BackgroundButtonLogout : theme.colors.BackgroundSubmit};
  border: 2px solid
    ${({ theme, logout }) => (logout ? theme.colors.BorderLogout : theme.colors.Border)};
  box-shadow: 0px 2px 12px ${({ theme }) => theme.colors.BorderShadow};

  cursor: pointer;
  :hover {
    color: ${({ theme, logout }) => (logout ? theme.colors.FontLight : theme.colors.Font)};
    background-color: ${({ theme, logout }) =>
      logout ? theme.colors.BackgroundSubmit : theme.colors.BackgroundButton};
    border: 2px solid ${({ theme, logout }) => (logout ? theme.colors.Border : theme.colors.Border)};
  }
`;
