import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-grow: 0;
  width: 100%;
  height: 42px;
  padding: 4px 16px;
  background: #696969;

  & span {
    font-family: Saira;
    font-size: 24px;
    font-weight: 900;
    line-height: 38px;
    text-transform: uppercase;
    color: #e8e8e8;
  }
`;

export default StyledHeader;
