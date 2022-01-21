import styled, { keyframes } from 'styled-components';

export const MyRoomWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MyLetterWrap = styled.div`
  width: 1020px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  > #post {
    width: 500px;
    height: 600px;
    background-color: #fff;
  }
  > .noneLetterBox {
    width: 0;
    height: 600px;
    opacity: 0;
    transition: 0.5s;
  }
  > .letterBox {
    opacity: 1;
    width: 500px;
    height: 600px;
    transition: 0.5s;
    background-color: #fff;
  }
  > div:nth-child(1) {
    border-radius: 200px 200px 0 0;
  }
  > div:nth-child(2) {
    margin-left: 20px;
    border-radius: 20px;
  }
`;

export const LetterHead = styled.div`
  width: 400px;
  height: 110px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  > .noneLetterBox {
    width: 0;
    transition: 0.5s;
  }
  > .letterBox {
    width: 400px;
    transition: 0.5s;
  }
  > #closeLetter {
    display: flex;
    width: 400px;
    height: 60px;
    justify-content: right;
    align-items: center;
    font-size: 40px;
    color: #c56363;
    > span {
      cursor: pointer;
    }
  }
  > #headerTextBox {
    transition: 0.5s;
    > ul {
      display: flex;
      width: 60%;
      justify-content: space-between;
      > li {
        width: 70px;
        height: 30px;
        font-size: 11px;
        text-align: center;
        line-height: 30px;
        border-radius: 5px;
        border: 1px solid #c56363;
        color: #c56363;
        box-shadow: 0px 3px 0px #c56363;
        cursor: pointer;
      }
    }
  }
`;

export const LetterBox = styled.div`
  > ul {
    width: 400px;
    height: 450px;
    border-radius: 15px;
    border: 1px solid #c56363;
    margin: 0 auto;
  }
  > .noneLetterBox {
    width: 0;
    transition: 0.5s;
  }
  > .letterBox {
    width: 400px;
    transition: 0.5s;
  }
`;
