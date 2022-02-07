import { useDispatch, useSelector } from 'react-redux';
import { NavWrap, HiddenMenuWrap, MenuBox } from '../style/styleNav';
import { navOpen, navClose } from '../redux/nav/nav';
import { modalOpen } from '../redux/nav/loginSignup';
import { logoutModalOpen } from '../redux/nav/logoutModal';
import { resultStatus } from '../redux/quiz/result';
import { userInfoStatus, logout } from '../redux/user/user';
import { resetIndex } from '../redux/quiz/quiz';
import { resetResultArr } from '../redux/quiz/result';
import LoginSignup from '../modal/loginSignup';
import Logout from '../modal/logout';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FindPlanProperty, savePlanData } from '../redux/plan/findPlan';

// require('dotenv').config();
axios.defaults.withCredentials = true;

function Nav() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const statusResult = useSelector(resultStatus);
  const userInfo = useSelector(userInfoStatus);
  const dispatch = useDispatch();

  const handleNavOpen = () => {
    dispatch(navOpen());
  };

  const handleNavClose = () => {
    dispatch(navClose());
  };

  const handleLogoutModalOpen = () => {
    dispatch(logoutModalOpen());
  };

  const handleLoginSignupModal = () => {
    dispatch(modalOpen());
  };

  const handleRetryQuiz = () => {
    dispatch(resetIndex());
    dispatch(resetResultArr());
    dispatch(navClose());
    window.location.replace('/');
  };

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

  // console.log(userInfo);
  // console.log(userUrl());
  // console.log(statusResult);

  return (
    <div>
      {statusResult.isModalOpen.open ? <LoginSignup /> : null}
      {statusResult.isLogoutModalOpen.open ? <Logout /> : null}
      <NavWrap>
        <div>
          <FontAwesomeIcon icon={faBars} onClick={handleNavOpen} id='navBtn' />
        </div>
      </NavWrap>

      {statusResult.isNavOpen.open ? (
        <HiddenMenuWrap
          style={{
            opacity: 1,
            zIndex: 1,
            transition: '0.3s',
          }}
        >
          {statusResult.userInfo.id !== -1 ? (
            <MenuBox>
              <span>{userInfo.userId}님의 메뉴</span>
              <ul>
                <li onClick={handleMyRoom}>
                  <Link to='/myRoom'>나의 플랜 보기</Link>
                </li>
                <li onClick={handleRetryQuiz}>테스트 다시 하기</li>
                <li onClick={handleLogoutModalOpen}>로그아웃</li>
                <li onClick={handleNavClose}>닫기</li>
              </ul>
            </MenuBox>
          ) : (
            <MenuBox>
              <ul>
                <li onClick={handleLoginSignupModal}>로그인 / 회원가입</li>
                {/* <li>내 방으로 가기</li> */}
                <li onClick={handleRetryQuiz}>테스트 다시 하기</li>
                <li onClick={handleNavClose}>닫기</li>
              </ul>
            </MenuBox>
          )}
        </HiddenMenuWrap>
      ) : (
        <HiddenMenuWrap
          style={{
            opacity: 0,
            zIndex: -1,
            transition: '0.3s',
          }}
        />
      )}
    </div>
  );
}

export default Nav;
