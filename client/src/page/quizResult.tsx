import { resultStatus } from '../redux/quiz/result';
import { useSelector } from 'react-redux';
import { resultTest } from '../quizData/quizData';

function QuizResult() {
  const resultArrState = useSelector(resultStatus);
  const resultArr: Array<number> = resultArrState.resultOption.selectOptionArr;

  const resultMaxIdx = resultArr.indexOf(Math.max(...resultArr));

  return <div>{resultTest[resultMaxIdx]}</div>;
}

export default QuizResult;
