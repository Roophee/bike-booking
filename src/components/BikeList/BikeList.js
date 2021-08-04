import React, { useEffect } from 'react';
import StyledBikeList from './style';
import BikeItem from '../BikeItem';

const BikeList = props => {
  const { bikeList, setGetData } = props;

  return (
    <StyledBikeList>
      {bikeList.map(item => (
        <BikeItem bike={item} color={item.color} key={item.id} setGetData={setGetData} />
      ))}
    </StyledBikeList>
  );
};

export default BikeList;
