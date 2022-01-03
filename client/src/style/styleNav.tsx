import styled from 'styled-components';

export const NavWrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 70px;
  > ul {
    display: flex;
    height: 70px;
    line-height: 70px;
    > li {
      padding: 0 50px;
    }
  }
`;
