import styled from 'styled-components';

const StyledFooter = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 0;
  width: 100%;
  height: 42px;
  padding: 10px;
  background: #696969;

  & span {
    font-family: Saira;
    font-size: 24px;
    font-weight: 400;
    line-height: 38px;
    color: #fff;
  }

  & span:first-of-type {
    color: #cbcaca;
  }
`;

export default StyledFooter;
