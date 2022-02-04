import { PlanWrap } from '../style/stylePlan';
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

function DayPlan() {
  const statusResult = useSelector(findPlanTypeStatus);
  const [planDatas, setPlanDatas] = useState(statusResult);

  useEffect(() => {
    const findMonth = new Date().getMonth() + 1;
    const findDate = new Date().getDate();

    console.log('aaa', statusResult);

    const filterDatePlan = statusResult.filter(
      (el: FindPlanProperty) => el.month === findMonth && el.date === findDate
    );

    setPlanDatas(filterDatePlan);
  }, []);

  const handleDragEnd = (result: DropResult, provided?: ResponderProvided) => {
    if (!result.destination) {
      return;
    } else {
      const currentTags = [...planDatas];
      const draggingItemIndex = result.source.index;
      const afterDragItemIndex: number | undefined = result.destination?.index;

      if (result.destination.index === 0) {
        const removeTags = currentTags.splice(draggingItemIndex, 1);
        currentTags.unshift(removeTags[0]);
        console.log(currentTags);
      } else {
        const removeTag = currentTags.splice(draggingItemIndex, 1);

        console.log('draggingIndex', draggingItemIndex);
        console.log('removeTag', removeTag);
        if (afterDragItemIndex) {
          currentTags.splice(afterDragItemIndex, 0, removeTag[0]);
        }
      }
      setPlanDatas(currentTags);
      console.log(currentTags);
    }

    console.log(result);
  };

  return (
    <PlanWrap>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='dropTags'>
          {(droppableProvided: DroppableProvided) => (
            <ul
              className='tags'
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
            >
              {planDatas.map((el: FindPlanProperty, index: number) => (
                <Draggable key={el.id} draggableId={el.id} index={index}>
                  {(draggableProvided: DraggableProvided) => (
                    <li
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      {...draggableProvided.draggableProps}
                    >
                      {el.planText}
                    </li>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </PlanWrap>
  );
}

export default DayPlan;
