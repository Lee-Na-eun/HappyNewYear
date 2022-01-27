import styled, { keyframes } from 'styled-components';

export const MainWrapBox = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainWrap = styled.div`
  /* min-width: 50%; */
  /* width: 550px;
  height: 500px;
  margin: 0 auto; */
  width: 700px;
  height: 600px;
  color: #878bbe;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 420px) {
    height: 450px;
  }
`;

export const StartWrap = styled.div`
  /* height: 400px; */
  display: flex;
  flex-direction: column;
  > h1 {
    padding: 0 20px 20px 20px;
    @media (max-width: 800px) {
      font-size: 24px;
    }
    @media (max-width: 420px) {
      font-size: 16px;
    }
    @media (max-width: 320px) {
      font-size: 12px;
    }
  }
  > p {
    padding: 0 15px 40px 15px;
    line-height: 30px;
    @media (max-width: 800px) {
      font-size: 15px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
      line-height: 25px;
      padding-bottom: 25px;
    }
    @media (max-width: 320px) {
      font-size: 8px;
      line-height: 20px;
    }
  }
  > div {
    /* padding-bottom: 30px; */
  }
  > img {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    @media (max-width: 420px) {
      width: 100px;
      height: 100px;
    }
  }
`;

export const StartButton = styled.button`
  width: 70%;
  height: 50px;
  border: none;
  border-radius: 50px;
  background-color: #878bbe;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  margin: 0 auto;
  :hover {
    background-color: #b7baea;
  }
  @media (max-width: 420px) {
    width: 60%;
    height: 35px;
    font-size: 10px;
  }
  @media (max-width: 320px) {
    height: 30px;
    font-size: 8px;
  }
`;

export const QuestionWrap = styled.div`
  width: 500px;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 80vw;
  }
  > h1 {
    padding-bottom: 10px;
    @media (max-width: 600px) {
      font-size: 25px;
    }
  }
  > h2 {
    @media (max-width: 600px) {
      font-size: 20px;
    }
    @media (max-width: 420px) {
      font-size: 16px;
    }
  }
`;

export const Button = styled.button`
  display: block;
  background-color: #fff;
  border: none;
  border-radius: 50px;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  font-size: 12px;
  background-color: #878bbe;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;
  padding: 0 20px;
  :hover {
    background-color: #b7baea;
  }
  @media (max-width: 420px) {
    font-size: 10px;
    height: 40px;
  }
`;

export const ResultWrap = styled.div`
  > h3 {
    font-size: 25px;
    padding: 20px 20px;
    @media (max-width: 420px) {
      font-size: 15px;
    }
  }
  > p {
    padding: 20px 30px;
    @media (max-width: 420px) {
      font-size: 10px;
      padding: 0 20px 20px 20px;
    }
  }
  > img {
    width: 150px;
    height: 150px;
    background-color: red;
    @media (max-width: 420px) {
      width: 100px;
      height: 100px;
    }
  }
`;

const blinkEffect = keyframes`
   0% {
      background-color: #878bbe;
    }
    50% {
      background-color: #b7baea;
    }
    100%{
      background-color: #878bbe;
    }
`;

export const GoRoomButton = styled.div`
  background-color: #fff;
  width: 30%;
  height: 50px;
  border: none;
  border-radius: 50px;
  background-color: #878bbe;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  margin: 0 auto;
  animation: ${blinkEffect} 1.5s ease;
  animation-iteration-count: 4;
  font-size: 13px;
  > a {
    display: block;
    line-height: 50px;
    text-decoration: none;
    color: #fff;
    @media (max-width: 420px) {
      height: 30px;
      line-height: 30px;
      font-size: 9px;
    }
  }
  @media (max-width: 420px) {
    height: 30px;
  }
`;
