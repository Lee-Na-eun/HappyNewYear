import { PlanWrap } from '../style/stylePlan';
import { useSelector } from 'react-redux';
import { planTypeStatus } from '../redux/plan/planData';

function AllPlan() {
  const statusResult = useSelector(planTypeStatus);

  console.log(statusResult.findPlan);

  return (
    <PlanWrap>
      <div>전체플랜</div>
    </PlanWrap>
  );
}

export default AllPlan;
