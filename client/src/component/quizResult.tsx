import { resultStatus } from '../redux/quiz/result';
import { useSelector, useDispatch } from 'react-redux';
import { resultTest } from '../quizData/quizData';
import { ResultWrap, GoRoomButton } from '../style/StyleQuiz';
import { Link } from 'react-router-dom';
import { userInfoStatus, logout } from '../redux/user/user';
import axios from 'axios';
import { modalOpen } from '../redux/nav/loginSignup';
import swal from 'sweetalert';
import { navClose } from '../redux/nav/nav';

function QuizResult() {
  const dispatch = useDispatch();
  const statusResult = useSelector(resultStatus);
  const resultArr: Array<number> = statusResult.resultOption.selectOptionArr;

  const resultMaxIdx: number = resultArr.indexOf(Math.max(...resultArr));
  const userInfo = useSelector(userInfoStatus);
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;

  const handleMyRoom = async () => {
    try {
      const result = await axios.get(
        `${url}/myRoom?userId=${statusResult.userInfo.id}`,
        {
          headers: {
            authorization: `bearer ${statusResult.userInfo.accessToken}`,
          },
        }
      );

      if (result.data.message === 'ok') {
        console.log(result);
        dispatch(navClose());
      }
    } catch (err: any) {
      swal({
        title: '재로그인이 필요합니다.',
        text: '다시 로그인 후 이용 부탁드립니다.',
        icon: 'warning',
      }).then(() => {
        dispatch(logout());
        dispatch(navClose());
        window.location.replace('/');
      });
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
            <GoRoomButton onClick={handleMyRoom}>
              <Link to='/myRoom'>나의 플랜 보기</Link>
            </GoRoomButton>
          )}
        </div>
      </ResultWrap>
    </div>
  );
}

export default QuizResult;
