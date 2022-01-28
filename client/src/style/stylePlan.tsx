import styled from 'styled-components';

export const PlanWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MakePlanWrap = styled.div`
  width: 500px;
  height: 700px;
  border: 4px solid #fff;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const PlanHead = styled.div`
  height: 200px;
  > h2 {
    font-size: 50px;
    color: #fff;
    padding: 45px;
  }
  > h3 {
    width: 180px;
    color: #fff;
    font-size: 23px;
    padding-bottom: 10px;
    margin: 0 auto;
  }
`;

export const PlanMainWrap = styled.div`
  height: 400px;
  margin-top: 40px;
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
  }
  > div {
    width: 250px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    }
    > select:nth-child(2) {
      margin-left: 10px;
    }
  }
`;

export const PlanTextWrap = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  > p {
    width: 250px;
    text-align: left;
    font-size: 14px;
  }
  > input {
    width: 250px;
    height: 40px;
    border: none;
    border-bottom: 2px solid #fff;
    background-color: rgba(255, 255, 255, 0);
    outline: none;
    color: #878bbe;
    padding-left: 5px;
  }
`;

export const WorkingWrap = styled.div`
  height: 100px;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  > p {
    width: 250px;
    text-align: left;
    font-size: 14px;
  }
  > div {
    width: 250px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
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

export const CompleteButton = styled.div`
  height: 100px;
  line-height: 80px;
  > button {
    width: 250px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #b7baea;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }
  > button:hover {
    background-color: #878bbe;
  }
`;
