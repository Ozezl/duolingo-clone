import React from 'react';
import { Draggable } from 'react-beautiful-dnd'
import './Word.css';

function Word(props: any) {
  return (
    <Draggable
      draggableId={props.word.id}
      index={props.index}
    >
      {(provided: any) => (
          <span 
            className="word"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {props.word.content}
          </span>
      )}
    </Draggable>
  );
}

export default Word;
