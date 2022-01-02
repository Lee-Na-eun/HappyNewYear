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
    width: 70%;
  }
`;

export const StartButton = styled.button`
  background-color: #fff;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 50px;
  background-color: #c56363;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background-color: #ffb4b4;
  }
  @media (max-width: 800px) {
    width: 70%;
  }
`;

export const QuestionWrap = styled.div`
  width: 500px;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 90%;
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
