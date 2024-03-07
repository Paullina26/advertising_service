import * as S from './style/StyleStatistics';

const ProgressBar = ({ tittle, value, color }) => {
  return (
    <>
      <S.ProgressBar value={value} bgcColor={({ theme }) => theme.colors[color]}>
        <p>{`${tittle}`}</p>
      </S.ProgressBar>
    </>
  );
};

export default ProgressBar;
