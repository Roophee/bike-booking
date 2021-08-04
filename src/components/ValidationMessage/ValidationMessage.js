import React from 'react';
import StyledValidationMessage from './style';

const ValidationMessage = props => {
  const { message } = props;
  const getSuccessMessage = msg => msg === 'You just added a new bike';

  return (
    <StyledValidationMessage successMessage={getSuccessMessage(message)}>
      <h3> {getSuccessMessage(message) ? 'Congratulation' : 'Warning!!!'}</h3>
      <p>{message}</p>
    </StyledValidationMessage>
  );
};

export default ValidationMessage;
