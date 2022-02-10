import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
`;

export const LogoutModal = styled.div`
  > .fadeIn {
    animation: ${fadeIn} 0.3s ease;
  }
  > .fadeOut {
    display: none;
    transition: 0.3s;
  }
`;

export const ModalWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  > .fadeIn {
    background-color: red;
  }
`;

export const ModalBox = styled.div`
  width: 500px;
  height: 250px;
  background-color: #878bbe;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const ContentWrap = styled.div`
  > div {
    height: 100px;
    color: #fff;
    font-size: 25px;
    line-height: 100px;
    @media (max-width: 600px) {
      font-size: 18px;
    }
  }
`;

export const ButtonWrap = styled.div`
  > button {
    width: 100px;
    height: 40px;
    margin-left: 20px;
    border-radius: 10px;
    border: none;
    color: #878bbe;
    cursor: pointer;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
  > button:nth-child(1) {
    margin-left: 0;
  }
`;

export const EditPlanBox = styled.div`
  width: 500px;
  height: 500px;
  background-color: #878bbe;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
  @media (max-width: 300px) {
    width: 250px;
  }
  > p {
    width: 450px;
    text-align: right;
    font-size: 50px;
    margin-top: -50px;
    color: #fff;
    cursor: pointer;
    @media (max-width: 500px) {
      width: 350px;
    }
    @media (max-width: 400px) {
      width: 250px;
    }
    @media (max-width: 300px) {
      width: 230px;
      font-size: 40px;
    }
  }
  > div {
    width: 500px;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 400px) {
      width: 250px;
    }
    @media (max-width: 300px) {
      width: 230px;
    }
  }
`;

export const MonthDaySelectWrap = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-weight: bold;
  > p {
    font-size: 14px;
    width: 250px;
    text-align: left;
    @media (max-width: 420px) {
      width: 200px;
      font-size: 12px;
    }
  }
  > div {
    width: 250px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 420px) {
      width: 200px;
      height: 50px;
    }
    > select {
      width: 120px;
      height: 40px;
      border-radius: 10px;
      border: 2px solid #fff;
      outline: none;
      color: #878bbe;
      font-size: 12px;
      text-align: center;
      background-color: rgba(255, 255, 255, 0.7);
      @media (max-width: 420px) {
        font-size: 10px;
        height: 30px;
      }
    }
    > select:nth-child(2) {
      margin-left: 10px;
    }
  }
`;

export const PlanTextWrap = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  @media (max-width: 420px) {
    height: 80px;
  }
  > p {
    width: 250px;
    text-align: left;
    font-size: 14px;
    @media (max-width: 420px) {
      width: 200px;
      font-size: 12px;
    }
  }
  > input {
    width: 250px;
    height: 40px;
    border: none;
    border-bottom: 2px solid #fff;
    background-color: rgba(255, 255, 255, 0);
    outline: none;
    color: #fff;
    padding-left: 5px;
    @media (max-width: 420px) {
      width: 200px;
      height: 30px;
      font-size: 10px;
    }
  }
`;

export const WorkingStatusWrap = styled.div`
  height: 120px;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 420px) {
    height: 80px;
  }
  > p {
    width: 250px;
    text-align: left;
    font-size: 14px;
    @media (max-width: 420px) {
      width: 200px;
      font-size: 12px;
    }
  }
  > div {
    width: 250px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 420px) {
      width: 200px;
      height: 50px;
    }
    > button {
      height: 40px;
      width: 77px;
      margin-left: 10px;
      font-size: 12px;
      color: #878bbe;
      border: 2px solid #fff;
      border-radius: 8px;
      background-color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
      @media (max-width: 420px) {
        height: 30px;
        font-size: 10px;
      }
    }
    > button:nth-child(1) {
      margin-left: 0;
    }
    > .colorChange {
      background-color: #878bbe;
      border: 2px solid #878bbe;
      color: #fff;
    }
  }
`;

export const EditButtonWrap = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  > button {
    width: 250px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #fff;

    color: #b7baea;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    @media (max-width: 420px) {
      width: 200px;
      height: 30px;
      font-size: 10px;
    }
  }
`;
