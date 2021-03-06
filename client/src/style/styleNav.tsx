import styled from 'styled-components';

export const NavWrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 70px;
  > div {
    display: flex;
    height: 70px;
    line-height: 70px;
    > #navBtn {
      font-size: 35px;
      color: #fff;
      margin-left: 20px;
      margin-top: 20px;
      cursor: pointer;
      @media (max-width: 420px) {
        font-size: 25px;
      }
    }
  }
`;

export const HiddenMenuWrap = styled.div`
  width: 200px;
  height: 100vh;
  position: fixed;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 420px) {
    width: 100vw;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > span {
    height: 50px;
    color: #878bbe;
    font-weight: bold;
  }
  > ul {
    margin: 0 auto;
    > li {
      background-color: #878bbe;
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
`;
