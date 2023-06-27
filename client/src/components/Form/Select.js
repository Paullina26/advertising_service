import styled from 'styled-components';

const LabelStyled = styled.label`
  text-align: center;
`;

const InputStyled = styled.select`
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

const Select = ({
  label,
  id,
  value,
  onChange,
  autoComplete,
  placeholder,
  pattern,
  required,
  className,
  valueOption,
}) => {
  return (
    <>
      <LabelStyled htmlFor={id}>
        {label}
        <InputStyled
          id={id}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          placeholder={placeholder}
          pattern={pattern}
          required={required}
          className={className}
        >
          <option value={valueOption}>{valueOption}</option>
          {/* <option value='Kupie1'>Kupie1</option> */}
        </InputStyled>
      </LabelStyled>
    </>
  );
};

export default Select;
