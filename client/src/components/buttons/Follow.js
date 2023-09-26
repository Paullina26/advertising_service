import styled from 'styled-components';
import { API, headers } from 'api/api';
import { useState, useEffect, useContext } from 'react';
import { icons } from 'assets/icons';

export const WrapperFollowIcon = styled.div`
  width: 30px;
  height: 30px;
  display: inline;
  cursor: pointer;
`;

export const StyledDislikedIcon = styled(icons.dislikedIcon)`
  width: 30px;
  fill: #8a2309;
  margin-right: 5px;
`;

export const StyledLikedIcon = styled(icons.likedIcon)`
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
    <WrapperFollowIcon onClick={changeFollow}>
      {isFollow ? <StyledLikedIcon /> : <StyledDislikedIcon />}
    </WrapperFollowIcon>
  );
};

export default Follow;
