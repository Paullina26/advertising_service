import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.BackgroundNavigation};
  box-shadow: 0px 0px 20px ${({ theme }) => theme.colors.BorderShadow};
  margin-top: 0;
  padding: 10px;
  font-size: 20px;
`;

export const StyledLink = styled(NavLink)`
  padding: 10px 0px;
  width: 100%;
  height: 100%;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.colors.Font};
  margin: auto 15px;
  font-size: 20px;

  &:hover {
    color: ${({ theme }) => theme.colors.BackgroundSubmit};
    transition: color 0.1s 0.1s linear;
  }

  &.active {
    color: ${({ theme }) => theme.colors.BackgroundSubmit};
  }
`;
