import styled from 'styled-components';

const InputStyled = styled.input`
  display: block;
  border-radius: 5px;
  font-size: 20px;
  padding: 5px 20px;
  border: 0px;
  margin: 20px auto;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.FontLight};
  background-color: ${({ theme }) => theme.colors.BackgroundSubmit};
  box-shadow: 0px 0px 12px ${({ theme }) => theme.colors.BorderShadow};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.FontSubmitHover};
    background-color: ${({ theme }) => theme.colors.FontLight};
    box-shadow: 0px 0px 20px ${({ theme }) => theme.colors.BorderShadowLight};
  }
`;

const Submit = ({ id, type, value, onClick }) => {
  return <InputStyled id={id} type={type} value={value} onClick={onClick} />;
};

export default Submit;
