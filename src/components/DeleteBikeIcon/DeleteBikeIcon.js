import React, { useCallback } from 'react';
import localforage from 'localforage';
import StyledDeleteBikeIcon from './style';

const DeleteBikeIcon = ({ bike, setGetData }) => {
  const onClickHandler = useCallback(
    event => {
      event.preventDefault();
      localforage.removeItem(bike.id).then(() => setGetData(true));
    },
    [setGetData, bike]
  );
  return <StyledDeleteBikeIcon onClick={onClickHandler}>&#10006;</StyledDeleteBikeIcon>;
};

export default DeleteBikeIcon;
