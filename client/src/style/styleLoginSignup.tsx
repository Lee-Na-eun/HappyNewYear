import styled from 'styled-components';

export const ModalWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  width: 500px;
  height: 450px;
  background-color: #c56363;
  border-radius: 20px;
`;

export const SelectLoginSignup = styled.ul`
  display: flex;
  width: 500px;
  height: 60px;
  background-color: #fff;
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
  margin-top: 30px;
`;

export const SignupWrap = styled.div`
  margin-top: 30px;
`;

export const InputWrap = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .inputWrap {
    width: 400px;
    padding: 20px 0;
    > input {
      width: 250px;
      outline: none;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #fff;
      color: #fff;
      padding: 0 0 5px 5px;
    }
    > span {
      display: inline-block;
      width: 100px;
      text-align: left;
      color: #fff;
      font-size: 13px;
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
    color: #c56363;
    cursor: pointer;
  }
`;
