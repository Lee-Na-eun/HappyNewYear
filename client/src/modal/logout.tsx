import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
  LogoutModal,
  ButtonWrap,
  ModalWrap,
  ModalBox,
  ContentWrap,
} from '../style/styleModal';
import { logoutModalClose } from '../redux/nav/logout';
import { userInfoStatus } from '../redux/user/user';
import { logout } from '../redux/nav/loginSignup';
import swal from 'sweetalert';

function Logout() {
  const url: string = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const statusUserInfo = useSelector(userInfoStatus);
  console.log(statusUserInfo);
  const dispatch = useDispatch();

  const handleCloseLogoutModal = () => {
    dispatch(logoutModalClose());
  };

  const handleLogout = async () => {
    try {
      const result = await axios.get(`${url}/user/logout`, {
        headers: { authorization: `Bearer ${statusUserInfo.accessToken}}` },
      });
      if (result.data.message === 'ok') {
        swal({
          title: '로그아웃 되었습니다.',
          text: '다음에 또 만나요!',
          icon: 'success',
        }).then(() => {
          dispatch(logout());
          dispatch(logoutModalClose());
          window.location.replace('/');
        });
        console.log(result);
      }
    } catch (err) {
      swal({
        title: '로그아웃을 실패하였습니다.',
        text: '잠시 후 다시 시도해주세요.',
        icon: 'error',
      });
    }
  };

  return (
    <LogoutModal>
      <ModalWrap>
        <ModalBox>
          <ContentWrap>
            <div>정말 로그아웃 하실 건가요?</div>
            <ButtonWrap>
              <button onClick={handleLogout}>로그아웃</button>
              <button onClick={handleCloseLogoutModal}>취소</button>
            </ButtonWrap>
          </ContentWrap>
        </ModalBox>
      </ModalWrap>
    </LogoutModal>
  );
}

export default Logout;
