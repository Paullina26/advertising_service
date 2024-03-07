import * as S from './Style/StyleForm';

const Submit = ({ id, type, value, onClick }) => {
  return <S.SubmitStyle id={id} type={type} value={value} onClick={onClick} />;
};

export default Submit;
