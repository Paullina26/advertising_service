import { SubmitStyle } from './Style/StyleForm';

const Submit = ({ id, type, value, onClick }) => {
  return <SubmitStyle id={id} type={type} value={value} onClick={onClick} />;
};

export default Submit;
