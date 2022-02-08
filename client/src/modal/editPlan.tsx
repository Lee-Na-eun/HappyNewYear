import { useSelector, useDispatch } from 'react-redux';
import { editModalClose } from '../redux/plan/editOrDeleteModal';
import { ModalWrap } from '../style/styleModal';

function EditPlanModal() {
  const dispatch = useDispatch();

  return <ModalWrap></ModalWrap>;
}

export default EditPlanModal;
