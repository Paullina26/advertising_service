import styled from 'styled-components';

export const UserPanelButton = styled.button`
  border-radius: 5px;
  font-size: 20px;
  padding: 5px 15px;
  border: 0px;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.FontLight};
  background-color: ${({ theme }) => theme.colors.BackgroundUserPanelBtn};
  /* border: 2px solid ${({ theme }) => theme.colors.BorderUserPanel}; */
  box-shadow: 0px 2px 12px ${({ theme }) => theme.colors.BorderShadow};

  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.FontSubmitHover};
    background-color: ${({ theme }) => theme.colors.FontLight};
    /* border: 2px solid ${({ theme }) => theme.colors.FontLight}; */
    box-shadow: 0px 0px 20px ${({ theme }) => theme.colors.BorderShadowLight};
  }
`;
