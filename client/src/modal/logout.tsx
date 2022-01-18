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
import { resultStatus } from '../redux/quiz/result';

function Logout() {
  const statusResult = useSelector(resultStatus);
  const dispatch = useDispatch();

  const handleCloseLogoutModal = () => {
    dispatch(logoutModalClose());
  };

  return (
    <LogoutModal>
      <ModalWrap>
        <ModalBox>
          <ContentWrap>
            <div>정말 로그아웃 하실 건가요?</div>
            <ButtonWrap>
              <button>로그아웃</button>
              <button onClick={handleCloseLogoutModal}>취소</button>
            </ButtonWrap>
          </ContentWrap>
        </ModalBox>
      </ModalWrap>
    </LogoutModal>
  );
}

export default Logout;
