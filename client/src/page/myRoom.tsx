import { MyRoomWrap, MyPlanWrap } from '../style/styleMyRoom';
import { useDispatch, useSelector } from 'react-redux';
import { resultStatus } from '../redux/quiz/result';
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

  return (
    <MyRoomWrap>
      <MyPlanWrap>
        <ul>
          <li>
            <Link to='/makePlan'>
              <FontAwesomeIcon icon={faEdit} className='planIcon' />
              나의 플랜짜기
            </Link>
          </li>
          <li>
            <Link to='/allPlan'>
              <FontAwesomeIcon icon={faSun} className='planIcon' />
              전체 플랜보기
            </Link>
          </li>
          <li>
            <Link to='/weekPlan'>
              <FontAwesomeIcon icon={faCloudMoon} className='planIcon' />
              주중 플랜보기
            </Link>
          </li>
          <li>
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
