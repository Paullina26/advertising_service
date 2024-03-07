import * as S from './Style/StyleForm';

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
  options,
}) => {
  return (
    <>
      <S.LabelStyle htmlFor={id}>
        {label}
        <S.SelectStyle
          id={id}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          placeholder={placeholder}
          pattern={pattern}
          required={required}
          className={className}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </S.SelectStyle>
      </S.LabelStyle>
    </>
  );
};

export default Select;
