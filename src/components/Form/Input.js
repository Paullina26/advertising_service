import styled from 'styled-components';

const LabelStyled = styled.label`
  text-align: center;
`;

const InputStyled = styled.input`
  display: block;
  border-radius: 15px;
  font-size: 20px;
  border: 0px;
  text-align: center;
  margin: 0px auto;
  margin-bottom: 15px;
  width: 80%;
  height: 30px;
  background-color: ${({ theme }) => theme.BackgroundInput};
  box-shadow: 0px 2px 12px ${({ theme }) => theme.BorderShadow};
  border: 2px solid ${({ theme }) => theme.Border};
`;

const Input = ({ label, id, type, value, onChange, autoComplete, placeholder }) => {
  return (
    <LabelStyled htmlFor={id}>
      {label}
      <InputStyled
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
    </LabelStyled>
  );
};

export default Input;
