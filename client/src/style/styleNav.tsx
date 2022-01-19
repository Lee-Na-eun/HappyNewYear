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

export const HiddenMenuWrap = styled.div`
  width: 200px;
  height: 100vh;
  position: fixed;
  background-color: #ffdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > ul {
    > li {
      background-color: #c56363;
      width: 120px;
      height: 50px;
      line-height: 50px;
      margin-top: 20px;
      font-size: 12px;
      border-radius: 20px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
    > li:nth-child(1) {
      margin-top: 0;
    }
    > li:nth-child(1),
    li:nth-child(2) {
      > a {
        display: block;
        width: 120px;
        height: 50px;
        color: #fff;
      }
    }
  }
  @media (max-width: 420px) {
    width: 100vw;
  }
`;
