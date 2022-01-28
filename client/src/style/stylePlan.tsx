import styled from 'styled-components';

export const PlanWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MakePlanWrap = styled.div`
  width: 500px;
  height: 70vh;
  border: 4px solid #fff;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
`;

export const PlanHead = styled.div`
  background-color: red;
  flex: 1 1 auto;
  > h2 {
    font-size: 50px;
    color: #fff;
    padding: 30px;
  }
  > h3 {
    width: 180px;
    color: #fff;
    font-size: 23px;
    padding-bottom: 10px;
    margin: 0 auto;
    border-bottom: 2px solid #fff;
  }
`;

export const PlanMainWrap = styled.div`
  background-color: orange;
  flex: 10 1 auto;
`;

export const MonthDaySelectWrap = styled.div`
  background-color: pink;
`;

export const PlanTextWrap = styled.div`
  background-color: green;
`;

export const WorkingWrap = styled.div`
  background-color: blueviolet;
`;
