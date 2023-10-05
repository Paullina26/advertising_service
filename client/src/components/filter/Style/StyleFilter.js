import styled from 'styled-components';
import { icons } from 'assets/icons';

export const Wrapper = styled.div`
  z-index: 9;
  background-color: ${({ theme }) => theme.colors.Background};
  position: sticky;
  top: 60px;
`;

export const WrapperFilterIcon = styled.div`
  text-align: right;
  left: 10px;
  button {
    padding: 4px 7px;
    margin: 10px 0;
    border: none;
    :hover {
      border: none;
    }
  }
  p {
    display: inline;
    font-size: 2rem;
  }
`;

export const StyledIconFilter = styled(icons.filter)`
  display: inline;
  width: 2rem;
  margin-bottom: -0.3rem;
  margin-left: 0.5rem;
  fill: ${({ theme }) => theme.colors.iconPrice};
`;

export const WrapperFilter = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.Background};
  font-size: 15px;
`;

export const WrapperButtons = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  button {
    margin-right: 10px;
  }
`;

export const WrapperSelect = styled.div`
  /* margin-right: 15px; */
  select {
    margin: 15px 0;
    /* margin-right: 10px; */
  }
`;
