import { useSelector, useDispatch } from 'react-redux';
import {
  editModalClose,
  editPlanIdStatus,
} from '../redux/plan/editOrDeleteModal';
import { MonthDaySelectWrap } from '../style/stylePlan';
import { ModalWrap, EditPlanBox } from '../style/styleModal';
import { FindPlanProperty, findPlanTypeStatus } from '../redux/plan/findPlan';
import { monthChange, dateChange } from '../redux/plan/planData';
import { planTypeStatus } from '../redux/plan/planData';

function EditPlanModal() {
  const editId = useSelector(editPlanIdStatus);
  const findPlanStatus = useSelector(findPlanTypeStatus);
  const dispatch = useDispatch();

  const filterEditPlan = findPlanStatus.filter(
    (el: FindPlanProperty) => el.id === editId
  );

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

  return (
    <ModalWrap>
      <EditPlanBox>
        <MonthDaySelectWrap>
          <p>날짜 선택하기</p>
          <div>
            <select
              defaultValue={filterEditPlan[0].month}
              onChange={handleMonthChange}
            >
              {optionMonth().map((el: number, index) => (
                <option key={index} value={el}>
                  {el}월
                </option>
              ))}
            </select>
            <select
              defaultValue={filterEditPlan[0].date}
              onChange={handleDateChange}
            >
              {optionDay(filterEditPlan[0].month).map((el, index) => (
                <option key={index} value={el}>
                  {el}일
                </option>
              ))}
            </select>

            {/* <input value='' />   */}
          </div>
        </MonthDaySelectWrap>
      </EditPlanBox>
    </ModalWrap>
  );
}

export default EditPlanModal;
