import styled from 'styled-components';
import { ReactComponent as LikedIcon } from '../../assets/icon/subscribe.svg';
import { ReactComponent as DislikedIcon } from '../../assets/icon/unsubscribe.svg';
import { useState, useEffect, useContext } from 'react';

export const StyledContainer = styled.div`
  width: 30px;
  height: 30px;
  display: inline;
  cursor: pointer;
  /* text-align: right;
  margin-right: 0;
  margin-left: auto; */
`;

export const StyledDislikedIcon = styled(DislikedIcon)`
  width: 30px;
  fill: #8a2309;
  margin-right: 5px;
`;

export const StyledLikedIcon = styled(LikedIcon)`
  width: 30px;
  fill: #8a2309;
  margin-right: 5px;
`;

export const Follow = () => {
  const [isFollow, setIsFollow] = useState(false);

  const changeFollow = () => {
    setIsFollow(prevState => !prevState);
  };

  return (
    <StyledContainer onClick={changeFollow}>
      {isFollow ? <StyledLikedIcon /> : <StyledDislikedIcon />}
    </StyledContainer>
  );
};

export default Follow;
