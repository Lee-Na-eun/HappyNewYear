import result, { resultStatus } from '../redux/quiz/result';
import { useSelector, useDispatch } from 'react-redux';
import { resultTest } from '../quizData/quizData';
import { ResultWrap, GoRoomButton } from '../style/StyleQuiz';
import { Link } from 'react-router-dom';
import { userInfoStatus, logout } from '../redux/user/user';
import axios from 'axios';
import { modalOpen } from '../redux/nav/loginSignup';
import swal from 'sweetalert';
import { navClose } from '../redux/nav/nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faGrinHearts } from '@fortawesome/free-solid-svg-icons';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FindPlanProperty, savePlanData } from '../redux/plan/findPlan';

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

      const findPlanData = await axios.get(
        `${url}/myRoom/findPlan?userId=${statusResult.userInfo.id}`,
        {
          headers: {
            authorization: `bearer ${statusResult.userInfo.accessToken}`,
          },
        }
      );

      findPlanData.data.data.map(
        (el: FindPlanProperty) => (el.id = String(el.id))
      );

      dispatch(savePlanData(findPlanData.data.data));

      if (result.data.message === 'ok') {
        console.log(result);
        dispatch(navClose());
      }
    } catch (err: any) {
      if (err.message === 'Network Error') {
        swal({
          title: '네트워크가 불안정 합니다.',
          text: '잠시 후에 이용 부탁드립니다.',
          icon: 'error',
        });
      } else if (err.response.data.message === 'same userId') {
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
    }
  };

  const handleOpenSignupLoginModal = () => {
    dispatch(modalOpen());
  };

  const whichFontIcon = () => {
    if (resultTest[resultMaxIdx].fontIcon === 'UserTie') {
      return <FontAwesomeIcon icon={faUserTie} className='fontIcon' />;
    } else if (resultTest[resultMaxIdx].fontIcon === 'Dumbbell') {
      return <FontAwesomeIcon icon={faDumbbell} className='fontIcon' />;
    } else if (resultTest[resultMaxIdx].fontIcon === 'GrinHearts') {
      return <FontAwesomeIcon icon={faGrinHearts} className='fontIcon' />;
    } else if (resultTest[resultMaxIdx].fontIcon === 'HatWizard') {
      return <FontAwesomeIcon icon={faHatWizard} className='fontIcon' />;
    } else if (resultTest[resultMaxIdx].fontIcon === 'Plane') {
      return <FontAwesomeIcon icon={faPlane} className='fontIcon' />;
    }
  };

  return (
    <ResultWrap>
      <div>
        {whichFontIcon()}
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
  );
}

export default QuizResult;
