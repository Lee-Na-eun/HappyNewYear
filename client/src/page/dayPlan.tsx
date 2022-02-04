import { PlanWrap } from '../style/stylePlan';
import { useSelector } from 'react-redux';
import { FindPlanProperty, findPlanTypeStatus } from '../redux/plan/findPlan';

function DayPlan() {
  const statusResult = useSelector(findPlanTypeStatus);

  console.log(statusResult.length);

  return (
    <PlanWrap>
      <ul>
        {statusResult.length !== 0 ? (
          statusResult.map((el: FindPlanProperty, idx: number) => (
            <li key={idx}>{el.id}</li>
          ))
        ) : (
          <li>오늘 일정은 없습니다.</li>
        )}
      </ul>
    </PlanWrap>
  );
}

export default DayPlan;
