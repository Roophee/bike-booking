import styled from 'styled-components';

const StyledBikeList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  min-height: calc(100vh - 84px);
  padding: 9px 12px;

  @media (min-width: 750px) {
    border-right: 1px solid #c4c4c4;
  }
`;

export default StyledBikeList;
