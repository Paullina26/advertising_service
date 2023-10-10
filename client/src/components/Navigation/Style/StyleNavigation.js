import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'styles/theme.styles';

export const WrapperLogo = styled.div`
  height: 4rem;
  h1 {
    font-size: 3.5rem;
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  max-width: 250px;
  height: 100%;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.colors.Font};
  font-size: 2rem;
  padding: 5px 15px;

  &:hover {
    color: ${({ theme }) => theme.colors.navActiveFont};
    /* transition: color 0.1s 0.1s linear; */
  }

  &.active {
    color: ${({ theme }) => theme.colors.FontLight};
    /* background-color: ${({ theme }) => theme.colors.FontSubmitHover}; */
    background: linear-gradient(90deg, rgba(54, 116, 58, 1) 2%, #1dc528 70%, #42ec56 100%);
    border-radius: 10px;
  }
`;

export const WrapperHeader = styled.div`
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.Background};
  box-shadow: inset 0px 2px 20px ${({ theme }) => theme.colors.BorderShadow};
`;

export const WrapperButtonHeader = styled.div`
  margin-right: 10px;
  justify-self: end;
`;

export const WrapperNavigationPanel = styled.div`
  position: absolute;
  transform: translateY(${({ isOpenMenu }) => (isOpenMenu ? 0 : '-150%')});
  z-index: -9;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.Background};
  box-shadow: inset 0px 0px 20px ${({ theme }) => theme.colors.BorderShadow};
  margin-top: 0;
  padding: 10px;
  font-size: 20px;
  transition: 0.3s;
`;
