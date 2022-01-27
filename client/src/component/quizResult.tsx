import { resultStatus } from '../redux/quiz/result';
import { useSelector, useDispatch } from 'react-redux';
import { resultTest } from '../quizData/quizData';
import { ResultWrap, GoRoomButton } from '../style/StyleQuiz';
import { Link } from 'react-router-dom';
import { userInfoStatus } from '../redux/user/user';
import { modalOpen } from '../redux/nav/loginSignup';

function QuizResult() {
  const dispatch = useDispatch();
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

  const handleOpenSignupLoginModal = () => {
    dispatch(modalOpen());
  };

  return (
    <div>
      <ResultWrap>
        <div>
          <img />
          <h3>{resultTest[resultMaxIdx].mainText}</h3>
          <p>{resultTest[resultMaxIdx].subText}</p>
          {userInfo.userId === '' ? (
            <GoRoomButton>
              <a onClick={handleOpenSignupLoginModal}>로그인 / 회원가입 하기</a>
            </GoRoomButton>
          ) : (
            <GoRoomButton>
              <Link to='/myRoom'>나의 플랜 보기</Link>
            </GoRoomButton>
          )}
        </div>
      </ResultWrap>
    </div>
  );
}

export default QuizResult;
