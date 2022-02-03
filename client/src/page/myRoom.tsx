import { MyRoomWrap, MyPlanWrap } from '../style/styleMyRoom';
import { useDispatch, useSelector } from 'react-redux';
import { resultStatus } from '../redux/quiz/result';
import { savePlanData } from '../redux/plan/findPlan';
import { logout } from '../redux/user/user';
import { navClose } from '../redux/nav/nav';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

axios.defaults.withCredentials = true;

function MyRoom() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const statusResult = useSelector(resultStatus);
  const dispatch = useDispatch();

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

  const findMyPlan = async (day: string) => {
    try {
      const findMonth = new Date().getMonth() + 1;
      const findDate = new Date().getDate();

      if (day === 'all') {
        const result = await axios.get(
          `${url}/myRoom/findPlan?day=${day}&userId=${statusResult.userInfo.id}`,
          {
            headers: {
              authorization: `bearer ${statusResult.userInfo.accessToken}`,
            },
          }
        );
        console.log(result.data.data);
        dispatch(savePlanData(result.data.data));
      } else if (day === 'month') {
        const result = await axios.get(
          `${url}/myRoom/findPlan?day=${day}&userId=${statusResult.userInfo.id}&month=${findMonth}`,
          {
            headers: {
              authorization: `bearer ${statusResult.userInfo.accessToken}`,
            },
          }
        );

        console.log(result);
      } else if ((day = 'date')) {
        const result = await axios.get(
          `${url}/myRoom/findPlan?day=${day}&userId=${statusResult.userInfo.id}&month=${findMonth}&date=${findDate}`,
          {
            headers: {
              authorization: `bearer ${statusResult.userInfo.accessToken}`,
            },
          }
        );

        console.log(result);
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

  console.log(statusResult);

  return (
    <MyRoomWrap>
      <MyPlanWrap>
        <ul>
          <li onClick={handleMyRoom}>
            <Link to='/makePlan'>
              <FontAwesomeIcon icon={faEdit} className='planIcon' />
              나의 플랜짜기
            </Link>
          </li>
          <li onClick={() => findMyPlan('all')}>
            <Link to='/allPlan'>
              <FontAwesomeIcon icon={faSun} className='planIcon' />
              전체 플랜보기
            </Link>
          </li>
          <li onClick={() => findMyPlan('month')}>
            <Link to='/weekPlan'>
              <FontAwesomeIcon icon={faCloudMoon} className='planIcon' />한 달
              플랜보기
            </Link>
          </li>
          <li onClick={() => findMyPlan('date')}>
            <Link to='/dayPlan'>
              <FontAwesomeIcon icon={faCloudSun} className='planIcon' />
              하루 플랜보기
            </Link>
          </li>
        </ul>
      </MyPlanWrap>
    </MyRoomWrap>
  );
}

export default MyRoom;
