import styled from 'styled-components';

const InputStyled = styled.input`
  display: block;
  border-radius: 15px;
  font-size: 20px;
  padding: 5px 20px;
  border: 0px;
  margin: 20px auto;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.FontLight};
  background-color: ${({ theme }) => theme.colors.BackgroundSubmit};
  box-shadow: 0px 2px 12px ${({ theme }) => theme.colors.BorderShadow};
  border: 2px solid ${({ theme }) => theme.colors.Border};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.FontSubmitHover};
    background-color: ${({ theme }) => theme.colors.BackgroundInput};
  }
`;

const Submit = ({ id, type, value, onClick }) => {
  return <InputStyled id={id} type={type} value={value} onClick={onClick} />;
};

export default Submit;
