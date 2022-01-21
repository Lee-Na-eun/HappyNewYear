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
    height: 0;
    transition: 0.5s;
  }
  > .letterBox {
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
  > #buttonWrap {
    display: flex;
    flex-direction: row-reverse;
    height: 60px;
    align-items: center;
    > button {
      width: 70px;
      height: 30px;
    }
  }
  > #headerTextBox {
    font-size: 18px;
  }
`;

export const LetterBox = styled.div`
  width: 400px;
  height: 450px;
  border: 5px solid #c56363;
  border-radius: 15px;
  margin: 0 auto;
`;
