import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperLogo = styled.div`
  width: 50%;
  height: 100%;
  h1 {
    margin-left: 10px;
    font-size: 2.5rem;
  }
`;

export const StyledLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.colors.Font};
  margin: auto 15px;
  font-size: 20px;
  padding: 3px;
  border: outset 2px transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.navActiveFont};
    transition: color 0.1s 0.1s linear;
  }

  &.active {
    color: ${({ theme }) => theme.colors.navActiveFont};
    border: inset 7px ${({ theme }) => theme.colors.navActiveBorder};
    background-color: ${({ theme }) => theme.colors.navActiveBackground};
  }
`;

export const WrapperHeader = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.Background};
  box-shadow: inset 0px 2px 20px ${({ theme }) => theme.colors.BorderShadow};
  z-index: 1;
`;

export const WrapperButtonHeader = styled.div`
  justify-self: end;
`;

export const WrapperNavigationPanel = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.Background};
  box-shadow: inset 0px 0px 20px ${({ theme }) => theme.colors.BorderShadow};
  margin-top: 0;
  padding: 10px;
  font-size: 20px;
`;
