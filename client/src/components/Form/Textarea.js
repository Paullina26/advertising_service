import styled from 'styled-components';

const LabelStyled = styled.label`
  text-align: center;
`;

const TextAreaStyled = styled.textarea`
  border-radius: 5px;
  font-size: 15px;
  padding: 5px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BackgroundInput};
  border: 1px solid ${({ theme }) => theme.colors.Border};
`;

const Textarea = ({
  label,
  id,
  placeholder,
  value,
  name,
  onChange,
  cols,
  rows,
  maxLength,
  className,
}) => {
  return (
    <LabelStyled htmlFor={id}>
      {label}
      <TextAreaStyled
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        onChange={onChange}
        maxLength={maxLength}
        className={className}
      />
    </LabelStyled>
  );
};

export default Textarea;
