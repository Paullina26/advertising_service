import styled from 'styled-components';

const InputStyled = styled.input`
  display: block;
  border-radius: 15px;
  font-size: 20px;
  padding: 2px 15px;
  border: 0px;
  text-align: center;
  margin: 20px auto;
  height: 30px;
  margin-top: 20px;
  color: ${({ theme }) => theme.FontLight};
  background-color: ${({ theme }) => theme.BackgroundSubmit};
  box-shadow: 0px 2px 12px ${({ theme }) => theme.BorderShadow};
  border: 2px solid ${({ theme }) => theme.Border};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.Font};
    background-color: ${({ theme }) => theme.BackgroundInput};
  }
`;

const Submit = ({ id, type, value, onClick }) => {
  return <InputStyled id={id} type={type} value={value} onClick={onClick} />;
};

export default Submit;
