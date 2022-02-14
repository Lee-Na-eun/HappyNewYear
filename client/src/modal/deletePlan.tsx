import { useSelector, useDispatch } from 'react-redux';
import {
  deleteModalClose,
  editPlanIdStatus,
} from '../redux/plan/editOrDeleteModal';
import {
  ModalWrap,
  ModalBox,
  ContentWrap,
  ButtonWrap,
} from '../style/styleModal';
import swal from 'sweetalert';
import { navClose } from '../redux/nav/nav';
import { logout } from '../redux/user/user';
import axios from 'axios';
import { resultStatus } from '../redux/quiz/result';

axios.defaults.withCredentials = true;

function DeletePlanModal() {
  const dispatch = useDispatch();
  const deleteId = useSelector(editPlanIdStatus);
  const statusResult = useSelector(resultStatus);

  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;

  console.log(deleteId);

  const deletePlan = async () => {
    try {
      const result = await axios.delete(
        `${url}/myRoom/findPlan?planId=${deleteId}`,
        {
          headers: {
            authorization: `bearer ${statusResult.userInfo.accessToken}`,
          },
        }
      );

      if (result.data.message === 'ok') {
        swal({
          title: '계획 삭제가 완료 되었습니다.',
          text: '언제든지 계획을 만들어보세요!',
          icon: 'success',
        }).then(() => {
          dispatch(deleteModalClose());
          window.location.reload();
        });
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

  return (
    <ModalWrap>
      <ModalBox>
        <ContentWrap>
          <div>정말 삭제 하실 건가요?</div>
          <ButtonWrap>
            <button onClick={deletePlan}>삭제</button>
            <button onClick={() => dispatch(deleteModalClose())}>취소</button>
          </ButtonWrap>
        </ContentWrap>
      </ModalBox>
    </ModalWrap>
  );
}

export default DeletePlanModal;
