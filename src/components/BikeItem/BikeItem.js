import React, { useCallback } from 'react';
import localforage from 'localforage';
import StyledBikeItem from './style';
import DeleteBikeIcon from '../DeleteBikeIcon';

const BikeItem = props => {
  const { bike, color, setGetData } = props;
  const onStatusChange = useCallback(
    event => {
      bike.status = event.target.value;
      localforage.removeItem(bike.id);
      localforage.setItem(bike.id, bike);
      setGetData(true);
    },
    [setGetData, bike]
  );
  return (
    <StyledBikeItem color={props.color}>
      <div className="bikeItem__header">
        <div>
          <strong>{bike.name}</strong> - {bike.type}({color})
        </div>
        <DeleteBikeIcon bike={bike} setGetData={setGetData} />
      </div>
      <div className="bikeItem__id">ID: {bike.id}</div>
      <div className="bikeItem__footer">
        <div className="bikeItem__select">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="status">STATUS:</label>
          <select name="status" id="status" value={bike.status} onChange={onStatusChange}>
            <option value="busy">Busy</option>
            <option value="available">Available</option>
          </select>
        </div>
        <div className="bikeItem__price">{Number.parseInt(bike.price, 10).toFixed(2)} UAH/hr.</div>
      </div>
    </StyledBikeItem>
  );
};

export default BikeItem;
