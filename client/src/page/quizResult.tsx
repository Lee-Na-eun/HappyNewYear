import { resultStatus } from '../redux/quiz/result';
import { useSelector } from 'react-redux';

function QuizResult() {
  const resultArrState = useSelector(resultStatus);
  const resultArr: Array<object> = resultArrState.resultOption.selectOptionArr;

  return <div>hihi</div>;
}

export default QuizResult;
