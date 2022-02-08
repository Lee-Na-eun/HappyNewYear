import {
  PlanWrap,
  PlanDataDiv,
  WorkingStatusFilterButtonWrap,
  FindPlanTextWrap,
} from '../style/stylePlan';
import { useSelector, useDispatch } from 'react-redux';
import { FindPlanProperty, findPlanTypeStatus } from '../redux/plan/findPlan';
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

function MonthPlan() {
  const dispatch = useDispatch();
  const findPlanStatus = useSelector(findPlanTypeStatus);
  const [planDatas, setPlanDatas] = useState(findPlanStatus);

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

  const findMonth = new Date().getMonth() + 1;

  const filterMonthPlan = findPlanStatus.filter(
    (el: FindPlanProperty) => el.month === findMonth
  );

  const sortFliterMonthPlan = filterMonthPlan.sort(function (
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

  useEffect(() => {
    setPlanDatas(sortFliterMonthPlan);
  }, []);

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
      setPlanDatas(sortFliterMonthPlan);
    } else if (e.currentTarget.value === '시작 안 함') {
      setChangeColor({
        firstBtn: false,
        secontBtn: true,
        thirdBtn: false,
        fourthBtn: false,
      });

      const filter1 = sortFliterMonthPlan.filter(
        (el: FindPlanProperty) => el.workingStatus === '시작 안 함'
      );
      setPlanDatas(filter1);
    } else if (e.currentTarget.value === '진행 중') {
      setChangeColor({
        firstBtn: false,
        secontBtn: false,
        thirdBtn: true,
        fourthBtn: false,
      });

      const filter2 = sortFliterMonthPlan.filter(
        (el: FindPlanProperty) => el.workingStatus === '진행 중'
      );
      setPlanDatas(filter2);
    } else if (e.currentTarget.value === '완료') {
      setChangeColor({
        firstBtn: false,
        secontBtn: false,
        thirdBtn: false,
        fourthBtn: true,
      });
      const filter3 = sortFliterMonthPlan.filter(
        (el: FindPlanProperty) => el.workingStatus === '완료'
      );

      setPlanDatas(filter3);
    }
  };

  const modalOpen = (el: string) => {
    if (el === 'edit') {
      dispatch(editModalOpen());
    } else if (el === 'delete') {
      dispatch(deleteModalOpen());
    }
  };

  return (
    <PlanWrap>
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
                                onClick={() => modalOpen('edit')}
                              />
                              <FontAwesomeIcon
                                className='findPlanIcon'
                                icon={faTrashAlt}
                                onClick={() => modalOpen('delete')}
                              />
                            </div>
                          </FindPlanTextWrap>
                        </li>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <div>이 달의 계획이 아직 없습니다.</div>
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
