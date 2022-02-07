import {
  PlanWrap,
  PlanDataDiv,
  WorkingStatusFilterButtonWrap,
  FindPlanTextWrap,
} from '../style/stylePlan';
import { useSelector } from 'react-redux';
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

function MonthPlan() {
  const statusResult = useSelector(findPlanTypeStatus);
  const [planDatas, setPlanDatas] = useState(statusResult);

  useEffect(() => {
    const findMonth = new Date().getMonth() + 1;

    console.log('aaa', statusResult);

    const filterMonthPlan = statusResult.filter(
      (el: FindPlanProperty) => el.month === findMonth
    );

    setPlanDatas(filterMonthPlan);
  }, []);

  // setPlanDatas(filterMonthPlan);

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

  const sortFindPlanData = () => {
    planDatas.sort(function (a: FindPlanProperty, b: FindPlanProperty) {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    console.log(planDatas);
  };

  sortFindPlanData();

  return (
    <PlanWrap>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='dropTags'>
          {(droppableProvided: DroppableProvided) => (
            <PlanDataDiv>
              <WorkingStatusFilterButtonWrap>
                <button>전체</button>
                <button>시작 안 함</button>
                <button>진행 중</button>
                <button>완료</button>
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
                            <p>{el.planText}</p>
                            <div>
                              <span className={workingStatusName(el)}>
                                {el.workingStatus}
                              </span>
                              <FontAwesomeIcon
                                className='findPlanIcon'
                                icon={faPenSquare}
                              />
                              <FontAwesomeIcon
                                className='findPlanIcon'
                                icon={faTrashAlt}
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
