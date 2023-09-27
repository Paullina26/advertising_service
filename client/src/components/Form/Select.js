import { LabelStyle, SelectStyle } from './Style/StyleForm';

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
      <LabelStyle htmlFor={id}>
        {label}
        <SelectStyle
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
        </SelectStyle>
      </LabelStyle>
    </>
  );
};

export default Select;
