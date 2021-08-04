import styled from 'styled-components';
import { bikeHEXColorsGetter } from '../Common/bikeHEXColorsGetter';

const StyledBikeItem = styled.div`
  width: 100%;
  background: #e8e8e8;
  border: 2px solid #${props => bikeHEXColorsGetter(props.color)};
  border-radius: 10px;
  padding: 12px 18px;
  margin-bottom: 12px;

  & * {
    font-family: Saira;
  }

  & .bikeItem__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    line-height: 22px;
    text-transform: uppercase;
  }

  & .bikeItem__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .bikeItem__id {
    font-size: 8px;
    line-height: 13px;
  }

  & .bikeItem__select {
    outline: none;
    font-size: 14px;
    line-height: 22px;
  }

  & select {
    margin: 0 0 0 18px;
    height: 22px;
  }

  & .bikeItem__price {
    font-size: 24px;
    line-height: 38px;
    font-weight: 500;
  }
`;
export default StyledBikeItem;
