import { PlanWrap, MakePlanWrap, PlanHead } from '../style/stylePlan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  planTextChange,
  monthChange,
  dateChange,
  workingChange,
} from '../redux/plan/planData';
import { planTypeStatus } from '../redux/plan/planData';

function MakePlan() {
  const dispatch = useDispatch();
  const statusResult = useSelector(planTypeStatus);

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

  const handleDateChange = (e: any) => {
    dispatch(dateChange(Number(e.currentTarget.value)));
  };

  console.log(statusResult.planData.month);

  return (
    <PlanWrap>
      <MakePlanWrap>
        <PlanHead>
          <h2>
            <FontAwesomeIcon icon={faStarAndCrescent} />
          </h2>
          <h3>나의 계획표 짜기</h3>
        </PlanHead>
        <>
          <select onChange={handleMonthChange}>
            {optionMonth().map((el: number, index) => (
              <option key={index} value={el}>
                {el}월
              </option>
            ))}
          </select>
          <select onChange={handleDateChange}>
            {optionDay(statusResult.planData.month).map((el, index) => (
              <option key={index}>{el}일</option>
            ))}
          </select>
        </>
      </MakePlanWrap>
    </PlanWrap>
  );
}

export default MakePlan;
