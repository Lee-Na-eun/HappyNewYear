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
  height: 600px;
  background-color: #878bbe;
  border-radius: 20px;
`;
