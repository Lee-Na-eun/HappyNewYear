import styled from 'styled-components';

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
  color: #c56363;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50px;
  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 420px) {
    height: 400px;
  }
`;

export const StartWrap = styled.div`
  /* height: 400px; */
  display: flex;
  flex-direction: column;
  > h1 {
    padding: 0 20px 20px 20px;
    @media (max-width: 800px) {
      font-size: 25px;
    }
    @media (max-width: 420px) {
      font-size: 16px;
    }
    @media (max-width: 320px) {
      font-size: 12px;
    }
  }
  > p {
    padding: 0 20px 40px 20px;
    line-height: 30px;
    @media (max-width: 800px) {
      font-size: 15px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
    }
    @media (max-width: 320px) {
      font-size: 8px;
    }
  }
  > div {
    /* padding-bottom: 30px; */
  }
  > img {
    width: 150px;
    height: 150px;
    /* background-color: orange; */
    margin: 0 auto;
    @media (max-width: 420px) {
      width: 100px;
      height: 100px;
    }
  }
`;

export const StartButton = styled.button`
  background-color: #fff;
  width: 70%;
  height: 50px;
  border: none;
  border-radius: 50px;
  background-color: #c56363;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  margin: 0 auto;
  :hover {
    background-color: #ffb4b4;
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
  @media (max-width: 800px) {
    width: 94%;
  }
  > h1 {
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
  background-color: #c56363;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;
  padding: 0 20px;
  :hover {
    background-color: #ffb4b4;
  }
`;
