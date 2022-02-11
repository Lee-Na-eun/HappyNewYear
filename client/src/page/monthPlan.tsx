import {
  PlanWrap,
  PlanDataDiv,
  WorkingStatusFilterButtonWrap,
  FindPlanTextWrap,
} from '../style/stylePlan';
import { useSelector, useDispatch } from 'react-redux';
import {
  FindPlanProperty,
  findPlanTypeStatus,
  savePlanData,
} from '../redux/plan/findPlan';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  ResponderProvided,
  DraggableProvided,
  DroppableProvided,
} from 'react-beautiful-dnd';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import {
  editModalOpen,
  deleteModalOpen,
} from '../redux/plan/editOrDeleteModal';
import { resultStatus } from '../redux/quiz/result';
import EditPlanModal from '../modal/editPlan';
import DeletePlanModal from '../modal/deletePlan';
import axios from 'axios';

function MonthPlan() {
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const statusResult = useSelector(resultStatus);
  const findPlanStatus = useSelector(findPlanTypeStatus);
  const [planDatas, setPlanDatas] = useState(findPlanStatus);

  useEffect(() => {
    const reloadPlanData = async () => {
      try {
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

        const findMonth = new Date().getMonth() + 1;

        const filterMonthPlan1 = findPlanData.data.data.filter(
          (el: FindPlanProperty) => el.month === findMonth
        );

        const sortFliterMonthPlan1 = filterMonthPlan1.sort(function (
          a: FindPlanProperty,
          b: FindPlanProperty
        ) {
          if (a.date > b.date) {
            return 1;
          }
          if (a.date < b.date) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        dispatch(savePlanData(sortFliterMonthPlan1));
        setPlanDatas(sortFliterMonthPlan1);
      } catch (err: any) {
        console.log(err);
      }
    };

    reloadPlanData();
  }, []);

  type ColorType = {
    firstBtn: boolean;
    secontBtn: boolean;
    thirdBtn: boolean;
    fourthBtn: boolean;
  };

  const [changeColor, setChangeColor] = useState<ColorType>({
    firstBtn: true,
    secontBtn: false,
    thirdBtn: false,
    fourthBtn: false,
  });

  const handleDragEnd = (result: DropResult, provided?: ResponderProvided) => {
    if (!result.destination) {
      return;
    } else {
      const currentTags = [...planDatas];
      const draggingItemIndex = result.source.index;
      const afterDragItemIndex: number | undefined = result.destination?.index;

      if (result.destination.index === 0) {
        console.log('joj');
        const removeTags = currentTags.splice(draggingItemIndex, 1);
        currentTags.unshift(removeTags[0]);
      } else {
        const removeTag = currentTags.splice(draggingItemIndex, 1);

        console.log('draggingIndex', draggingItemIndex);
        console.log('removeTag', removeTag);
        if (afterDragItemIndex) {
          currentTags.splice(afterDragItemIndex, 0, removeTag[0]);
        }
      }
      setPlanDatas(currentTags);
    }

    console.log(result);
  };

  const workingStatusName = (el: FindPlanProperty) => {
    if (el.workingStatus === '시작 안 함') {
      return 'ready';
    } else if (el.workingStatus === '진행 중') {
      return 'working';
    } else if (el.workingStatus === '완료') {
      return 'complete';
    }
  };

  const clickWorkingStatus = (e: any) => {
    if (e.currentTarget.value === '전체') {
      setChangeColor({
        firstBtn: true,
        secontBtn: false,
        thirdBtn: false,
        fourthBtn: false,
      });
      setPlanDatas(findPlanStatus.slice(0));
    } else if (e.currentTarget.value === '시작 안 함') {
      setChangeColor({
        firstBtn: false,
        secontBtn: true,
        thirdBtn: false,
        fourthBtn: false,
      });

      const filter1 = findPlanStatus
        .slice(0)
        .filter((el: FindPlanProperty) => el.workingStatus === '시작 안 함');
      setPlanDatas(filter1);
    } else if (e.currentTarget.value === '진행 중') {
      setChangeColor({
        firstBtn: false,
        secontBtn: false,
        thirdBtn: true,
        fourthBtn: false,
      });

      const filter2 = findPlanStatus
        .slice(0)
        .filter((el: FindPlanProperty) => el.workingStatus === '진행 중');
      setPlanDatas(filter2);
    } else if (e.currentTarget.value === '완료') {
      setChangeColor({
        firstBtn: false,
        secontBtn: false,
        thirdBtn: false,
        fourthBtn: true,
      });
      const filter3 = findPlanStatus
        .slice(0)
        .filter((el: FindPlanProperty) => el.workingStatus === '완료');

      setPlanDatas(filter3);
    }
  };

  const modalOpen = (el: string, planId: string) => {
    if (el === 'edit') {
      dispatch(editModalOpen(planId));
    } else if (el === 'delete') {
      dispatch(deleteModalOpen(planId));
    }
  };

  return (
    <PlanWrap>
      {statusResult.isEditOrDeleteModal.isEditOpen ? <EditPlanModal /> : null}
      {statusResult.isEditOrDeleteModal.isDeleteOpen ? (
        <DeletePlanModal />
      ) : null}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='dropTags'>
          {(droppableProvided: DroppableProvided) => (
            <PlanDataDiv>
              <WorkingStatusFilterButtonWrap>
                <button
                  value='전체'
                  onClick={clickWorkingStatus}
                  className={changeColor.firstBtn ? 'colorChange' : ''}
                >
                  전체
                </button>
                <button
                  value='시작 안 함'
                  onClick={clickWorkingStatus}
                  className={changeColor.secontBtn ? 'colorChange' : ''}
                >
                  시작 안 함
                </button>
                <button
                  value='진행 중'
                  onClick={clickWorkingStatus}
                  className={changeColor.thirdBtn ? 'colorChange' : ''}
                >
                  진행 중
                </button>
                <button
                  value='완료'
                  onClick={clickWorkingStatus}
                  className={changeColor.fourthBtn ? 'colorChange' : ''}
                >
                  완료
                </button>
              </WorkingStatusFilterButtonWrap>
              <ul
                className='tags'
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
              >
                {planDatas.length !== 0 ? (
                  planDatas.map((el: FindPlanProperty, index: number) => (
                    <Draggable key={el.id} draggableId={el.id} index={index}>
                      {(draggableProvided: DraggableProvided) => (
                        <li
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.dragHandleProps}
                          {...draggableProvided.draggableProps}
                        >
                          <FindPlanTextWrap>
                            <span>
                              {el.month}월 {el.date}일
                            </span>
                            <p>{el.planText}</p>
                            <div>
                              <span className={workingStatusName(el)}>
                                {el.workingStatus}
                              </span>
                              <FontAwesomeIcon
                                className='findPlanIcon'
                                icon={faPenSquare}
                                onClick={() => modalOpen('edit', el.id)}
                              />
                              <FontAwesomeIcon
                                className='findPlanIcon'
                                icon={faTrashAlt}
                                onClick={() => modalOpen('delete', el.id)}
                              />
                            </div>
                          </FindPlanTextWrap>
                        </li>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <div>조건에 맞는 계획이 아직 없습니다.</div>
                )}
              </ul>

              {droppableProvided.placeholder}
            </PlanDataDiv>
          )}
        </Droppable>
      </DragDropContext>
    </PlanWrap>
  );
}

export default MonthPlan;
