import styled from 'styled-components';

const StyledValidationMessage = styled.div`
  width: 90%;
  margin-left: 10px;
  padding-left: 10px;
  background: ${props => (props.successMessage ? '#81C784' : '#e57373')};
  border: 2px solid ${props => (props.successMessage ? '#2E7D32' : '#c62828')};
  border-radius: 10px;
  text-align: center;

  & * {
    margin: 5px 0;
    font-family: Saira;
  }

  & h3 {
    font-size: 18px;
    line-height: 28px;
    text-transform: uppercase;
  }

  & p {
    font-size: 14px;
    line-height: 22px;
  }
`;
export default StyledValidationMessage;
