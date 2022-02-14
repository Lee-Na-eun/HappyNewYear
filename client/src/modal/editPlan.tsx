import { useSelector, useDispatch } from 'react-redux';
import {
  editModalClose,
  editPlanIdStatus,
} from '../redux/plan/editOrDeleteModal';
import {
  ModalWrap,
  EditPlanBox,
  PlanTextWrap,
  MonthDaySelectWrap,
  WorkingStatusWrap,
  EditButtonWrap,
} from '../style/styleModal';
import { FindPlanProperty, findPlanTypeStatus } from '../redux/plan/findPlan';
import { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { resultStatus } from '../redux/quiz/result';
import { navClose } from '../redux/nav/nav';
import { logout } from '../redux/user/user';

axios.defaults.withCredentials = true;

function EditPlanModal() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const editId = useSelector(editPlanIdStatus);
  const findPlanStatus = useSelector(findPlanTypeStatus);

  const dispatch = useDispatch();
  const statusResult = useSelector(resultStatus);

  const filterEditPlan = findPlanStatus.filter(
    (el: FindPlanProperty) => el.id === editId
  );

  const [workingStatus, setWorkingStatus] = useState(
    filterEditPlan[0].workingStatus
  );

  const dateData = filterEditPlan[0].date;

  const [month, setMonth] = useState(new Date(dateData).getMonth() + 1);
  const [date, setDate] = useState(new Date(dateData).getDate());

  console.log(filterEditPlan[0]);

  const [colorChange, setColorChange] = useState({
    first: false,
    second: false,
    third: false,
  });
  const [inputText, setInputText] = useState(filterEditPlan[0].planText);

  useEffect(() => {
    if (filterEditPlan[0].workingStatus === '시작 안 함') {
      setColorChange({ first: true, second: false, third: false });
    } else if (filterEditPlan[0].workingStatus === '진행 중') {
      setColorChange({ first: false, second: true, third: false });
    } else if (filterEditPlan[0].workingStatus === '완료') {
      setColorChange({ first: false, second: false, third: true });
    }
  }, []);

  const optionMonth = (): number[] => {
    const monthArr = [];
    for (let i = 1; i < 13; i++) {
      monthArr.push(i);
    }

    return monthArr;
  };
  // 한달 선택을 위한 배열

  const handleMonthChange = (e: any) => {
    setMonth(Number(e.currentTarget.value));
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
    setDate(Number(e.currentTarget.value));
  };
  // 일 저장하기

  const handleInputTextChange = (e: any) => {
    setInputText(e.currentTarget.value);
  };

  const handleColorChange = (e: any) => {
    setWorkingStatus(e.currentTarget.value);
    if (e.currentTarget.value === '시작 안 함') {
      setColorChange({ first: true, second: false, third: false });
    } else if (e.currentTarget.value === '진행 중') {
      setColorChange({ first: false, second: true, third: false });
    } else if (e.currentTarget.value === '완료') {
      setColorChange({ first: false, second: false, third: true });
    }
    console.log(e.currentTarget.value);
  };

  const closeEditModal = () => {
    dispatch(editModalClose());
  };

  const handleEditPlanSave = async () => {
    try {
      if (inputText === '') {
        swal({
          title: '아직 작성하지 않은 부분이 있습니다.',
          text: '모두 작성 후 다시 시도 해주세요.',
          icon: 'warning',
        });
      } else {
        const result = await axios.patch(
          `${url}/myRoom/findPlan`,
          {
            id: Number(filterEditPlan[0].id),
            month: month,
            date: date,
            planText: inputText,
            workingStatus: workingStatus,
          },
          {
            headers: {
              authorization: `bearer ${statusResult.userInfo.accessToken}`,
            },
          }
        );
        if (result.data.message === 'ok') {
          swal({
            title: '수정이 완료 되었습니다.',
            text: '언제든지 계획을 수정해보세요!',
            icon: 'success',
          }).then(() => {
            window.location.reload();
          });
        }
      }
    } catch (err: any) {
      swal({
        title: '재로그인이 필요합니다.',
        text: '다시 로그인 후 이용 부탁드립니다.',
        icon: 'warning',
      }).then(() => {
        dispatch(logout());
        dispatch(navClose());
        window.location.replace('/');
      });
    }
  };

  return (
    <ModalWrap>
      <EditPlanBox>
        <p onClick={closeEditModal}>&times;</p>
        <div>
          <MonthDaySelectWrap>
            <p>날짜 선택하기</p>
            <div>
              <select
                defaultValue={new Date(filterEditPlan[0].date).getMonth() + 1}
                onChange={handleMonthChange}
              >
                {optionMonth().map((el: number, index) => (
                  <option key={index} value={el}>
                    {el}월
                  </option>
                ))}
              </select>
              <select
                defaultValue={new Date(filterEditPlan[0].date).getDate()}
                onChange={handleDateChange}
              >
                {optionDay(month).map((el, index) => (
                  <option key={index} value={el}>
                    {el}일
                  </option>
                ))}
              </select>
            </div>
          </MonthDaySelectWrap>
          <PlanTextWrap>
            <p>계획 쓰기</p>
            <input onChange={handleInputTextChange} value={inputText} />
          </PlanTextWrap>
          <WorkingStatusWrap>
            <p>계획 상태 선택</p>
            <div>
              <button
                value='시작 안 함'
                onClick={handleColorChange}
                className={colorChange.first ? 'onChageColor' : ''}
              >
                시작 안 함
              </button>
              <button
                value='진행 중'
                onClick={handleColorChange}
                className={colorChange.second ? 'onChageColor' : ''}
              >
                진행 중
              </button>
              <button
                value='완료'
                onClick={handleColorChange}
                className={colorChange.third ? 'onChageColor' : ''}
              >
                완료
              </button>
            </div>
          </WorkingStatusWrap>
          <EditButtonWrap>
            <button onClick={handleEditPlanSave}>저장하기</button>
          </EditButtonWrap>
        </div>
      </EditPlanBox>
    </ModalWrap>
  );
}

export default EditPlanModal;
