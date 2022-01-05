import { resultStatus } from '../redux/quiz/result';
import { useSelector } from 'react-redux';
import { resultTest } from '../quizData/quizData';
import { ResultWrap, GoRoomButton } from '../style/StyleQuiz';
import { Link } from 'react-router-dom';

function QuizResult() {
  const resultArrState = useSelector(resultStatus);
  const resultArr: Array<number> = resultArrState.resultOption.selectOptionArr;

  const resultMaxIdx: number = resultArr.indexOf(Math.max(...resultArr));

  return (
    <div>
      <ResultWrap>
        <img />
        <h3>{resultTest[resultMaxIdx].mainText}</h3>
        <p>{resultTest[resultMaxIdx].subText}</p>
        <GoRoomButton>
          <Link to='/myRoom'>내 방 꾸미러 가기</Link>
        </GoRoomButton>
      </ResultWrap>
    </div>
  );
}

export default QuizResult;
