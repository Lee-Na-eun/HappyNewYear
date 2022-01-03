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
  height: 50%;
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

export const LoginWrap = styled.div``;

export const SignupWrap = styled.div``;

export const InputWrap = styled.div``;
