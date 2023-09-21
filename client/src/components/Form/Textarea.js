import { LabelStyle, TextAreaStyled } from './StyleForm';

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
    <LabelStyle htmlFor={id}>
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
    </LabelStyle>
  );
};

export default Textarea;
