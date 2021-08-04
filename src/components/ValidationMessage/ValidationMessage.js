import React from 'react';
import StyledValidationMessage from './style';

const ValidationMessage = props => {
  const { message } = props;
  const getSuccessMessage = msg => msg === 'Form is valid';

  return (
    <StyledValidationMessage successMessage={getSuccessMessage(message)}>
      <h3> {getSuccessMessage(message) ? 'Congratulation' : 'Warning!!!'}</h3>
      <p>{message}</p>
    </StyledValidationMessage>
  );
};

export default ValidationMessage;
