import { useDispatch, useSelector } from 'react-redux';
import { NavWrap, HiddenMenuWrap } from '../style/styleNav';
import { navOpen, navBooleanStatus, navClose } from '../redux/nav/nav';

function Nav() {
  const isNavOpen = useSelector(navBooleanStatus);
  const dispatch = useDispatch();

  const handleNavOpen = () => {
    dispatch(navOpen());
  };

  const handleNavClose = () => {
    dispatch(navClose());
  };

  return (
    <div>
      <NavWrap>
        <ul>
          <li onClick={handleNavOpen}>이거슨 로고</li>
        </ul>
      </NavWrap>

      {isNavOpen.isNavOpen.open ? (
        <HiddenMenuWrap
          style={{
            opacity: 1,
            zIndex: 1,
            transition: '0.3s',
          }}
        >
          <ul>
            <li>로그인 / 회원가입</li>
            {/* <li>내 방으로 가기</li> */}
            <li>테스트 다시 하기</li>
            <li onClick={handleNavClose}>닫기</li>
          </ul>
        </HiddenMenuWrap>
      ) : (
        <HiddenMenuWrap
          style={{
            opacity: 0,
            zIndex: -1,
            transition: '0.3s',
          }}
        >
          <ul>
            <li>로그인 / 회원가입</li>
            {/* <li>내 방으로 가기</li> */}
            <li>테스트 다시 하기</li>
            <li onClick={handleNavClose}>닫기</li>
          </ul>
        </HiddenMenuWrap>
      )}
    </div>
  );
}

export default Nav;
