import styled from 'styled-components';

const LabelStyled = styled.label`
  text-align: center;
`;

const InputStyled = styled.input`
  display: block;
  border-radius: 5px;
  font-size: 15px;
  border: 0px;
  text-align: center;
  margin: 0px auto;
  margin-bottom: 15px;
  margin-top: 5px;
  width: 100%;
  height: 35px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.BackgroundInput};
  border: 1px solid ${({ theme }) => theme.colors.Border};
`;

const Input = ({
  label,
  id,
  type,
  value,
  onChange,
  autoComplete,
  placeholder,
  minlength,
  pattern,
  required,
  className,
  maxLength,
  rows,
  cols,
}) => {
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
        minlength={minlength}
        pattern={pattern}
        required={required}
        className={className}
        maxLength={maxLength}
        rows={rows}
        cols={cols}
      />
    </LabelStyled>
  );
};

export default Input;
