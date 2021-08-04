import React from 'react';
import StyledStatisticPanel from './style';

const StatisticPanel = props => {
  const { bikes } = props;
  const getPriceForBusy = arr => {
    const newArr = arr.filter(item => item.status !== 'available');
    const totalPrice = newArr.reduce((accum, elem) => accum + Number.parseInt(elem.price, 10), 0);
    return totalPrice;
  };

  return (
    <StyledStatisticPanel>
      <h3>Statistic</h3>
      <p>
        <span> Total Bikes:&nbsp;</span>
        <span>
          <strong>{bikes.length}</strong>
        </span>
      </p>
      <p>
        <span> Available Bikes:&nbsp;</span>
        <span>
          <strong>{bikes.filter(item => item.status === 'available').length}</strong>
        </span>
      </p>
      <p>
        <span> Booked Bikes:&nbsp;</span>
        <span>
          <strong>{bikes.filter(item => item.status !== 'available').length}</strong>
        </span>
      </p>
      <p>
        <span> Average bike cost:&nbsp;</span>
        <span>
          <strong>{bikes && getPriceForBusy(bikes).toFixed(2)} UAH/hr.</strong>
        </span>
      </p>
    </StyledStatisticPanel>
  );
};

export default StatisticPanel;
