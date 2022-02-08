import { useSelector, useDispatch } from 'react-redux';
import {
  editModalClose,
  editPlanIdStatus,
} from '../redux/plan/editOrDeleteModal';
import { ModalWrap } from '../style/styleModal';

function EditPlanModal() {
  const editId = useSelector(editPlanIdStatus);
  const dispatch = useDispatch();

  console.log(editId);

  return <ModalWrap></ModalWrap>;
}

export default EditPlanModal;
