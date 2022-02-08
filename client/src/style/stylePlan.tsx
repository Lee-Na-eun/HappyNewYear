import styled from 'styled-components';

export const PlanWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; ;
`;

export const MakePlanWrap = styled.div`
  width: 500px;
  height: 700px;
  border: 4px solid #fff;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 420px) {
    height: 500px;
  }
`;

export const PlanHead = styled.div`
  height: 200px;
  @media (max-width: 420px) {
    height: 100px;
  }
  > h2 {
    font-size: 50px;
    color: #fff;
    padding: 45px;
    @media (max-width: 420px) {
      font-size: 30px;
      padding: 20px;
    }
  }
  > h3 {
    width: 180px;
    color: #fff;
    font-size: 23px;
    padding-bottom: 10px;
    margin: 0 auto;
    @media (max-width: 420px) {
      font-size: 20px;
      padding-bottom: 15px;
    }
  }
`;

export const PlanMainWrap = styled.div`
  height: 400px;
  margin-top: 40px;
  @media (max-width: 420px) {
    height: 320px;
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
  @media (max-width: 420px) {
    height: 80px;
  }
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
  height: 100px;
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
    color: #878bbe;
    padding-left: 5px;
    @media (max-width: 420px) {
      width: 200px;
      height: 30px;
      font-size: 10px;
    }
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

export const CompleteButton = styled.div`
  height: 100px;
  line-height: 80px;
  @media (max-width: 420px) {
    height: 80px;
  }
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
    @media (max-width: 420px) {
      width: 200px;
      height: 30px;
      font-size: 10px;
    }
  }
  > button:hover {
    background-color: #878bbe;
  }
`;

export const PlanDataDiv = styled.div`
  width: 500px;
  height: 500px;
  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
  @media (max-width: 300px) {
    width: 280px;
  }
  > ul {
    width: 500px;
    height: 400px;
    overflow-y: scroll;
    margin-top: 20px;
    ::-webkit-scrollbar {
      width: 5px;
      /* background-color: red; */
    }
    ::-webkit-scrollbar-thumb {
      /*  스크롤  */
      background-color: #fff;
      border-radius: 5px;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
    > li {
      /* width: 400px; */
      height: 60px;
      margin: 0 auto;
      background-color: rgba(255, 255, 255, 0.1);
      margin-top: 10px;
      border-bottom: 1px solid #fff;
      border-radius: 10px;
      color: #fff;
      line-height: 60px;
      font-size: 15px;
      text-align: left;
    }
  }
`;

export const FindPlanTextWrap = styled.div`
  display: flex;
  > p {
    width: 60%;
    padding-left: 40px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 400px) {
      font-size: 12px;
      width: 55%;
      padding-left: 10px;
    }
  }
  > div {
    width: 40%;
    /* background-color: pink; */
    @media (max-width: 400px) {
      width: 45%;
    }
    > .ready {
      background-color: #d22779;
    }
    > .working {
      background-color: #b762c1;
    }
    > .complete {
      background-color: #3fa796;
    }
    > span {
      display: inline-block;
      width: 80px;
      height: 25px;
      line-height: 25px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: bold;
      text-align: center;
      @media (max-width: 600px) {
        width: 60px;
        font-size: 10px;
      }
      @media (max-width: 300px) {
        width: 50px;
        height: 20px;
        line-height: 20px;
        font-size: 8px;
      }
    }
    > .findPlanIcon {
      display: inline-block;
      font-size: 18px;
      cursor: pointer;
      margin-left: 20px;
      @media (max-width: 600px) {
        font-size: 15px;
      }
      @media (max-width: 300px) {
        font-size: 10px;
      }
    }
  }
`;

export const WorkingStatusFilterButtonWrap = styled.div`
  margin: 0 auto;
  /* border-bottom: 3px solid #fff; */
  @media (max-width: 600px) {
    width: 100%;
  }
  > button {
    height: 40px;
    width: 92.5px;
    margin-left: 8px;
    font-size: 12px;
    color: #878bbe;
    border: 2px solid #fff;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    @media (max-width: 500px) {
      height: 30px;
      width: 22%;
      font-size: 10px;
    }
  }
  > button:nth-child(1) {
    margin-left: 0;
  }
`;
