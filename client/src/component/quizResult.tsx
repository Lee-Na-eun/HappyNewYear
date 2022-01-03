import { resultStatus } from '../redux/quiz/result';
import { useSelector } from 'react-redux';
import { resultTest } from '../quizData/quizData';
import { ResultWrap } from '../style/StyleQuiz';

function QuizResult() {
  const resultArrState = useSelector(resultStatus);
  const resultArr: Array<number> = resultArrState.resultOption.selectOptionArr;

  const resultMaxIdx: number = resultArr.indexOf(Math.max(...resultArr));

  return (
    <ResultWrap>
      <h3>{resultTest[resultMaxIdx].mainText}</h3>
      <p>{resultTest[resultMaxIdx].subText}</p>
      <img />
    </ResultWrap>
  );
}

export default QuizResult;
