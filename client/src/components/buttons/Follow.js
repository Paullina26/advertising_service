import styled from 'styled-components';
import { API, headers } from 'api/api';
import { ReactComponent as LikedIcon } from '../../assets/icon/subscribe.svg';
import { ReactComponent as DislikedIcon } from '../../assets/icon/unsubscribe.svg';
import { useState, useEffect, useContext } from 'react';

export const StyledContainer = styled.div`
  width: 30px;
  height: 30px;
  display: inline;
  cursor: pointer;
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

export const Follow = props => {
  const [isFollow, setIsFollow] = useState(false);

  useEffect(() => {
    setIsFollow(props.isFollow);
  }, [props.isFollow]);

  const postFavoriteAdvertisement = () => {
    const token = localStorage.TOKEN;
    fetch(API.postFavoriteAdvertisement, {
      method: 'PUT',
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : null,
      },
      body: JSON.stringify({
        advertisementId: props.id,
      }),
    });
  };

  const changeFollow = () => {
    setIsFollow(prevState => !prevState);
    postFavoriteAdvertisement();
  };

  return (
    <StyledContainer onClick={changeFollow}>
      {isFollow ? <StyledLikedIcon /> : <StyledDislikedIcon />}
    </StyledContainer>
  );
};

export default Follow;
