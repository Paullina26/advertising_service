import * as S from './Style/StyleForm';

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
    <S.LabelStyle htmlFor={id}>
      {label}
      <S.InputStyle
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
    </S.LabelStyle>
  );
};

export default Input;
