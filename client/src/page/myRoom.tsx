import { MyRoomWrap, MyPlanWrap } from '../style/styleMyRoom';
import { useDispatch, useSelector } from 'react-redux';
import { resultStatus } from '../redux/quiz/result';
import { logout } from '../redux/user/user';
import { navClose } from '../redux/nav/nav';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

axios.defaults.withCredentials = true;

function MyRoom() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const statusResult = useSelector(resultStatus);
  const dispatch = useDispatch();

  const handleAllMessage = async () => {
    try {
      const result = await axios.get(
        `${url}/user/myRoom/message/all?user=${statusResult.userInfo.id}`,
        {
          headers: {
            authorization: `bearer ${statusResult.userInfo.accessToken}`,
          },
        }
      );
    } catch (err: any) {
      console.log(err);
      if (err.response.data.message === 'Send new Login Request') {
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

  return (
    <MyRoomWrap>
      <MyPlanWrap>
        <ul>
          <li>
            <Link to='/makePlan'>나의 플랜짜기</Link>
          </li>
          <li>전체 플랜보기</li>
          <li>주중 플랜보기</li>
          <li>하루 플랜보기</li>
        </ul>
      </MyPlanWrap>
    </MyRoomWrap>
  );
}

export default MyRoom;
