import styled from 'styled-components';

export const WrapperFilter = styled.div`
  width: 100vw;
  position: fixed;
  margin-left: -5vw;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.Background};
  padding: 10px 0;
  display: flex;
  font-size: 15px;
`;

export const WrapperButtons = styled.div`
  margin-left: 10px;
  Button {
    margin-right: 10px;
  }
`;

export const WrapperSelect = styled.div`
  display: flex;
  margin-right: 15px;
  Select {
    margin: 0;
    margin-right: 10px;
  }
`;
