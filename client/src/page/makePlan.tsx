import {
  PlanWrap,
  MakePlanWrap,
  PlanHead,
  PlanMainWrap,
  MonthDaySelectWrap,
  PlanTextWrap,
  WorkingWrap,
} from '../style/stylePlan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { monthChange, dateChange } from '../redux/plan/planData';
import { planTypeStatus } from '../redux/plan/planData';
import { useState } from 'react';

function MakePlan() {
  const dispatch = useDispatch();
  const statusResult = useSelector(planTypeStatus);
  const [planTextChange, setPlanTextChange] = useState('');
  const [workingStatus, setWorkingStatus] = useState('시작 안 함');

  const optionMonth = (): number[] => {
    const monthArr = [];
    for (let i = 1; i < 13; i++) {
      monthArr.push(i);
    }

    return monthArr;
  };
  // 한달 선택을 위한 배열

  const handleMonthChange = (e: any) => {
    dispatch(monthChange(Number(e.currentTarget.value)));
  };
  // 달 저장하기

  const optionDay = (month: number): number[] => {
    const dayArr = [];

    if (month === 2) {
      for (let i = 1; i <= 28; i++) {
        dayArr.push(i);
      }
    } else if (
      (month <= 7 && month % 2 === 1) ||
      (month > 7 && month % 2 === 0)
    ) {
      for (let i = 1; i <= 31; i++) {
        dayArr.push(i);
      }
    } else {
      for (let i = 1; i <= 30; i++) {
        dayArr.push(i);
      }
    }

    return dayArr;
  };
  // 일 선택을 위한 배열

  const handleDateChange = (e: any) => {
    dispatch(dateChange(Number(e.currentTarget.value)));
  };
  // 일 저장하기

  const handlePlanTextChange = (e: any) => {
    setPlanTextChange(e.currentTarget.value);
  };
  // planText는 useState로 값을 가지고 있다.

  const handleWorkingStatus = (e: any) => {
    setWorkingStatus(e.currentTarget.value);
  };

  console.log(statusResult.planData);
  console.log(planTextChange);
  console.log(workingStatus);

  return (
    <PlanWrap>
      <MakePlanWrap>
        <PlanHead>
          <h2>
            <FontAwesomeIcon icon={faStarAndCrescent} />
          </h2>
          <h3>나의 계획표 짜기</h3>
        </PlanHead>
        <PlanMainWrap>
          <MonthDaySelectWrap>
            <p>날짜 선택하기</p>
            <select onChange={handleMonthChange}>
              {optionMonth().map((el: number, index) => (
                <option key={index} value={el}>
                  {el}월
                </option>
              ))}
            </select>
            <select onChange={handleDateChange}>
              {optionDay(statusResult.planData.month).map((el, index) => (
                <option key={index} value={el}>
                  {el}일
                </option>
              ))}
            </select>
          </MonthDaySelectWrap>
          <PlanTextWrap>
            <p>계획 쓰기</p>
            <input onChange={handlePlanTextChange} value={planTextChange} />
          </PlanTextWrap>
          <WorkingWrap>
            <p>계획 상태</p>
            <div>
              <button onClick={handleWorkingStatus} value='시작 안 함'>
                시작 안 함
              </button>
              <button onClick={handleWorkingStatus} value='진행 중'>
                진행 중
              </button>
              <button onClick={handleWorkingStatus} value='완료'>
                완료
              </button>
            </div>
          </WorkingWrap>
          {/* axiso 요청해주기 */}
          <button>작성 완료</button>
        </PlanMainWrap>
      </MakePlanWrap>
    </PlanWrap>
  );
}

export default MakePlan;
