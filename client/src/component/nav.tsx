import { useDispatch, useSelector } from 'react-redux';
import { NavWrap, HiddenMenuWrap, MenuBox } from '../style/styleNav';
import { navOpen, navClose } from '../redux/nav/nav';
import { modalOpen } from '../redux/nav/loginSignup';
import { logoutModalOpen } from '../redux/nav/logoutModal';
import { resultStatus } from '../redux/quiz/result';
import { userInfoStatus } from '../redux/user/user';
import { resetIndex } from '../redux/quiz/quiz';
import { resetResultArr } from '../redux/quiz/result';
import LoginSignup from '../modal/loginSignup';
import Logout from '../modal/logout';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

  const userUrl = (): string => {
    return `/myRoom/${userInfo.userId}`;
  };

  const test = async () => {
    const result = await axios.get(
      `${url}/user/myRoom?user=${statusResult.userInfo.id}`,
      {
        headers: {
          authorization: `bearer ${statusResult.userInfo.accessToken}`,
        },
      }
    );

    console.log(result);
    dispatch(navClose());
  };

  // console.log(userInfo);
  // console.log(userUrl());
  // console.log(statusResult);

  return (
    <div>
      {statusResult.isModalOpen.open ? <LoginSignup /> : null}
      {statusResult.isLogoutModalOpen.open ? <Logout /> : null}
      <NavWrap>
        <ul>
          <li onClick={handleNavOpen}>이거슨 로고</li>
        </ul>
      </NavWrap>

      {statusResult.isNavOpen.open ? (
        <HiddenMenuWrap
          style={{
            opacity: 1,
            zIndex: 1,
            transition: '0.3s',
          }}
        >
          {statusResult.isModalOpen.login ? (
            <MenuBox>
              <span>{userInfo.userId}님의 메뉴</span>
              <ul>
                <li onClick={test}>
                  <Link to={userUrl}>내 우체통 보기</Link>
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
