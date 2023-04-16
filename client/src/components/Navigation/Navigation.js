import styled from 'styled-components';
import MainMenu from './MainMenu';

export const ContainerNav = styled.div`
  margin: 0 auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.BackgroundNavigation};
  width: 95vw;
  border-radius: 0px 0px 10px 10px;
  border: 1px solid ${({ theme }) => theme.Border};
  box-shadow: 0px 2px 12px ${({ theme }) => theme.BorderShadow};
`;

const Navigation = () => {
  return (
    <ContainerNav>
      <div>
        <MainMenu></MainMenu>
      </div>
    </ContainerNav>
  );
};

export default Navigation;
