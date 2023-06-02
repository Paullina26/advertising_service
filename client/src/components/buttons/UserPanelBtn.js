import styled from 'styled-components';

export const UserPanelButton = styled.button`
  display: block;
  border-radius: 5px;
  font-size: 20px;
  padding: 5px 15px;
  border: 0px;
  margin-right: 0;
  color: ${({ theme }) => theme.colors.FontLight};
  background-color: ${({ theme }) => theme.colors.BackgroundUserPanelBtn};
  border: 2px solid ${({ theme }) => theme.colors.BorderUserPanel};
  box-shadow: 0px 2px 12px ${({ theme }) => theme.colors.BorderShadow};

  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.BorderUserPanel};
    background-color: ${({ theme }) => theme.colors.BackgroundButton};
    border: 2px solid ${({ theme }) => theme.colors.BorderUserPanel};
  }
`;
