import { useDispatch, useSelector } from 'react-redux';
import { NavWrap, HiddenMenuWrap } from '../style/styleNav';
import { navOpen, navClose } from '../redux/nav/nav';
import { modalOpen } from '../redux/nav/loginSignup';
import { resultStatus } from '../redux/quiz/result';
import LoginSignup from '../modal/loginSignup';

function Nav() {
  const statusResult = useSelector(resultStatus);
  const dispatch = useDispatch();

  const handleNavOpen = () => {
    dispatch(navOpen());
  };

  const handleNavClose = () => {
    dispatch(navClose());
  };

  const handleModalOpen = () => {
    dispatch(modalOpen());
  };

  // console.log(statusResult);

  return (
    <div>
      {statusResult.isModalOpen.open ? <LoginSignup /> : <LoginSignup />}
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
            <ul>
              <li>내 방으로 가기</li>
              <li onClick={() => window.location.replace('/')}>
                테스트 다시 하기
              </li>
              <li onClick={handleModalOpen}>로그아웃</li>
              <li onClick={handleNavClose}>닫기</li>
            </ul>
          ) : (
            <ul>
              <li onClick={handleModalOpen}>로그인 / 회원가입</li>
              {/* <li>내 방으로 가기</li> */}
              <li onClick={() => window.location.replace('/')}>
                테스트 다시 하기
              </li>
              <li onClick={handleNavClose}>닫기</li>
            </ul>
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
