import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
`;

export const LoginSignupModal = styled.div`
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
  height: 450px;
  background-color: #c56363;
  border-radius: 20px;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const SelectLoginSignup = styled.ul`
  display: flex;
  width: 500px;
  height: 60px;
  background-color: #fff;
  @media (max-width: 600px) {
    width: 100%;
    font-size: 14px;
  }
  > .changeColor {
    background-color: #c56363;
    color: #fff;
  }
  > li {
    cursor: pointer;
    flex: 1 1 auto;
    line-height: 60px;
    color: #c56363;
  }
`;

export const LoginWrap = styled.div`
  margin-top: 80px;
`;

export const SignupWrap = styled.div`
  margin-top: 50px;
`;

export const SignupInputWrap = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .inputWrap {
    width: 400px;
    padding: 20px 0;
    @media (max-width: 600px) {
      width: 100%;
    }
    > input {
      width: 250px;
      outline: none;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #fff;
      color: #fff;
      padding: 0 0 5px 5px;
      @media (max-width: 600px) {
        width: 55%;
      }
    }
    > span {
      display: inline-block;
      width: 100px;
      text-align: left;
      color: #fff;
      font-size: 13px;
      @media (max-width: 600px) {
        width: 25%;
        font-size: 10px;
      }
    }
  }
`;

export const LoginInputWrap = styled.div`
  /* height: 220px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .inputWrap {
    width: 400px;
    padding: 20px 0;
    @media (max-width: 600px) {
      width: 100%;
    }
    > input {
      width: 250px;
      outline: none;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #fff;
      color: #fff;
      padding: 0 0 5px 5px;
      @media (max-width: 600px) {
        width: 55%;
      }
    }
    > span {
      display: inline-block;
      width: 100px;
      text-align: left;
      color: #fff;
      font-size: 13px;
      @media (max-width: 600px) {
        width: 25%;
        font-size: 10px;
      }
    }
  }
`;

export const ButtonWrap = styled.div`
  margin-top: 10px;
  > button {
    width: 100px;
    height: 40px;
    margin-left: 20px;
    border-radius: 10px;
    border: none;
    color: #c56363;
    cursor: pointer;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
  > button:nth-child(1) {
    margin-left: 0;
  }
`;

export const AlertError = styled.div`
  height: 30px;
  color: #850000;
  font-weight: bold;
  font-size: 10px;
  margin-top: 10px;
`;
