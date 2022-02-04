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
import { useState } from 'react';

function AllPlan() {
  const statusResult = useSelector(findPlanTypeStatus);
  const [localItems, setLocalItems] = useState(statusResult);

  console.log('aaa', statusResult);

  const handleDragEnd = (result: DropResult, provided?: ResponderProvided) => {
    if (!result.destination) {
      return;
    } else {
      const currentTags = [...localItems];
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
      setLocalItems(currentTags);
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
              {localItems.map((el: FindPlanProperty, index: number) => (
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

export default AllPlan;
