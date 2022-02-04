import { PlanWrap } from '../style/stylePlan';
import { useSelector } from 'react-redux';
import { FindPlanProperty, findPlanTypeStatus } from '../redux/plan/findPlan';

function AllPlan() {
  const statusResult = useSelector(findPlanTypeStatus);

  return (
    <PlanWrap>
      <div>
        <ul>
          {statusResult.length !== 0 ? (
            statusResult.map((el: FindPlanProperty, idx: number) => (
              <li key={idx}>{el.id}</li>
            ))
          ) : (
            <li>전체 일정이 없습니다.</li>
          )}
        </ul>
      </div>
    </PlanWrap>
  );
}

export default AllPlan;
