import { InputStyle, LabelStyle } from './Style/StyleForm';

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
    <LabelStyle htmlFor={id}>
      {label}
      <InputStyle
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
    </LabelStyle>
  );
};

export default Input;
