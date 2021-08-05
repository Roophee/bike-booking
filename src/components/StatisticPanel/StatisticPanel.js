import React from 'react';
import StyledStatisticPanel from './style';

const StatisticPanel = props => {
  const { bikes } = props;
  const getAveragePrice = arr => {
    return arr
      .filter(item => item.status !== 'unavailable')
      .reduce((accum, elem) => accum + Number.parseInt(elem.price, 10), 0);
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
          <strong>{bikes.filter(item => item.status === 'busy').length}</strong>
        </span>
      </p>
      <p>
        <span> Average bike cost:&nbsp;</span>
        <span>
          <strong>{(getAveragePrice(bikes) / bikes.length).toFixed(2)} UAH/hr.</strong>
        </span>
      </p>
    </StyledStatisticPanel>
  );
};

export default StatisticPanel;
