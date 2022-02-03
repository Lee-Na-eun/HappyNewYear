import { PlanWrap } from '../style/stylePlan';
import { useSelector } from 'react-redux';
import { planTypeStatus } from '../redux/plan/planData';

function DayPlan() {
  const statusResult = useSelector(planTypeStatus);

  console.log(statusResult.findPlan);

  return (
    <PlanWrap>
      <div>하루 플랜</div>
    </PlanWrap>
  );
}

export default DayPlan;
