import * as S from './Style/StyleForm';

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
    <S.LabelStyle htmlFor={id}>
      {label}
      <S.TextAreaStyled
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
    </S.LabelStyle>
  );
};

export default Textarea;
