import {
  PlanWrap,
  MakePlanWrap,
  PlanHead,
  PlanMainWrap,
  MonthDaySelectWrap,
  PlanTextWrap,
  WorkingWrap,
  CompleteButton,
} from '../style/stylePlan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { monthChange, dateChange } from '../redux/plan/planData';
import { planTypeStatus } from '../redux/plan/planData';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

axios.defaults.withCredentials = true;

function MakePlan() {
  const dispatch = useDispatch();
  const planStatusResult = useSelector(planTypeStatus);
  const [planTextChange, setPlanTextChange] = useState('');
  const [workingStatus, setWorkingStatus] = useState('');
  const url: string = process.env.REACT_APP_API_URL || `http://localhost:4000`;

  type ColorType = {
    firstBtn: boolean;
    secontBtn: boolean;
    thirdBtn: boolean;
  };

  const [changeColor, setChangeColor] = useState<ColorType>({
    firstBtn: false,
    secontBtn: false,
    thirdBtn: false,
  });

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
    if (e.currentTarget.value === '시작 안 함') {
      setChangeColor({ firstBtn: true, secontBtn: false, thirdBtn: false });
    } else if (e.currentTarget.value === '진행 중') {
      setChangeColor({ firstBtn: false, secontBtn: true, thirdBtn: false });
    } else if (e.currentTarget.value === '완료') {
      setChangeColor({ firstBtn: false, secontBtn: false, thirdBtn: true });
    }
  };

  const handleSendPlan = async () => {
    try {
      if (planTextChange === '' || workingStatus === '') {
        swal({
          title: '아직 작성하지 않은 부분이 있습니다.',
          text: '모두 작성 후 다시 시도 해주세요.',
          icon: 'warning',
        });
      } else {
        const result = await axios.post(
          `${url}/myRoom/makePlan`,
          {
            month: planStatusResult.planData.month,
            date: planStatusResult.planData.date,
            planText: planTextChange,
            workingStatus: workingStatus,
          },
          {
            headers: {
              authorization: `bearer ${planStatusResult.userInfo.accessToken}`,
            },
          }
        );

        if (result.data.message === 'ok') {
          swal({
            title: '제출이 완료 되었습니다.',
            text: '작성한 계획은 언제든지 수정 가능합니다.',
            icon: 'success',
          }).then(() => {
            window.location.reload();
          });
        }
      }
    } catch (err: any) {
      swal({
        title: '네트워크가 불안정 합니다.',
        text: '잠시 후에 이용 부탁드립니다.',
        icon: 'error',
      });
    }
  };

  console.log(planStatusResult);

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
            <div>
              <select onChange={handleMonthChange}>
                {optionMonth().map((el: number, index) => (
                  <option key={index} value={el}>
                    {el}월
                  </option>
                ))}
              </select>
              <select onChange={handleDateChange}>
                {optionDay(planStatusResult.planData.month).map((el, index) => (
                  <option key={index} value={el}>
                    {el}일
                  </option>
                ))}
              </select>
            </div>
          </MonthDaySelectWrap>
          <PlanTextWrap>
            <p>계획 쓰기</p>
            <input onChange={handlePlanTextChange} value={planTextChange} />
          </PlanTextWrap>
          <WorkingWrap>
            <p>계획 상태 선택</p>
            <div>
              <button
                className={changeColor.firstBtn ? 'colorChange' : ''}
                onClick={handleWorkingStatus}
                value='시작 안 함'
              >
                시작 안 함
              </button>
              <button
                className={changeColor.secontBtn ? 'colorChange' : ''}
                onClick={handleWorkingStatus}
                value='진행 중'
              >
                진행 중
              </button>
              <button
                className={changeColor.thirdBtn ? 'colorChange' : ''}
                onClick={handleWorkingStatus}
                value='완료'
              >
                완료
              </button>
            </div>
          </WorkingWrap>
          <CompleteButton>
            {/* axiso 요청해주기 */}
            <button onClick={handleSendPlan}>작성 완료</button>
          </CompleteButton>
        </PlanMainWrap>
      </MakePlanWrap>
    </PlanWrap>
  );
}

export default MakePlan;
