import styled from 'styled-components';
import { icons } from 'assets/icons';
import { device } from 'styles/theme.styles';

export const StyledBurgerIcon = styled(icons.burger)`
  width: 100%;
  height: 100%;
  fill: ${({ theme }) => theme.colors.BackgroundSubmit};
`;

export const StyledCloseBurgerIcon = styled(icons.closeBurger)`
  width: 100%;
  height: 100%;
  fill: ${({ theme }) => theme.colors.BackgroundSubmit};
`;

export const BurgerWrapper = styled.button`
  margin-left: 10px;
  border: none;
  width: 4rem;
  height: 4rem;
  background: none;
  display: inline;
`;
