import { resultStatus } from '../redux/quiz/result';
import { useSelector } from 'react-redux';
import { resultTest } from '../quizData/quizData';
import { ResultWrap, GoRoomButton } from '../style/StyleQuiz';
import { Link } from 'react-router-dom';
import { userInfoStatus } from '../redux/user/user';

function QuizResult() {
  const resultArrState = useSelector(resultStatus);
  const resultArr: Array<number> = resultArrState.resultOption.selectOptionArr;

  const resultMaxIdx: number = resultArr.indexOf(Math.max(...resultArr));
  const userInfo = useSelector(userInfoStatus);

  const userUrl = (): string => {
    if (userInfo.userId === '') {
      return '/myRoom';
    } else {
      return `/myRoom/${userInfo.userId}`;
    }
  };

  return (
    <div>
      <ResultWrap>
        <img />
        <h3>{resultTest[resultMaxIdx].mainText}</h3>
        <p>{resultTest[resultMaxIdx].subText}</p>
        <GoRoomButton>
          <Link to={userUrl()}>내 우체통 보기</Link>
        </GoRoomButton>
      </ResultWrap>
    </div>
  );
}

export default QuizResult;
