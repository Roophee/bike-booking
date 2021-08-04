import styled from 'styled-components';

const StyledBikeForm = styled.div`
  margin: 0 auto;

  & input,
  textarea {
    padding: 5px 16px;
    margin: 10px 10px 0 10px;
    height: 29px;
    width: 235px;
    background: #e8e8e8;
    border-radius: 5px;
    font-family: Saira;
    font-size: 12px;
    line-height: 19px;
  }

  & button {
    width: 235px;
    margin: 10px;
    padding: 4px 22px;
    background: #696969;
    border-radius: 5px;
    color: #fff;
    font-family: Saira;
    font-size: 14px;
    line-height: 22px;
  }

  & .bikeForm__inputSm {
    width: 235px;
    height: 29px;
  }

  & .bikeForm__inputLg {
    width: 490px;
    height: 75px;
    resize: none;
  }

  & .bikeForm__afterElem {
    width: 90%;
    margin: 10px;
    border: 1px solid #c4c4c4;
  }
`;
export default StyledBikeForm;
