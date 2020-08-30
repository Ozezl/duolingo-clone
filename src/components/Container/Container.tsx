import React from 'react';
import './Container.css'
import { useState } from 'react'
import WordList from '../WordList/WordList'
import Submit from '../Submit/Submit'
import Task from '../Task/TaskDescription'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from '../../initialData'

function Container() {
  const [data, setData] = useState(initialData)
  const [correctSentence, setCorrectSentence] = useState('hey , how are you doing ?')
  const [input, setInput] = useState('')
  const [showCorrect, setShowCorrect] = useState(false)
  const [showFalse, setShowFalse] = useState(false)

  function sentenceVerifier() {
    if (correctSentence === input) {
      setShowCorrect(true)
      setShowFalse(false)
    }
    else {
      setShowFalse(true)
      setShowCorrect(false)
    }
  }

  function reset() {
    setShowCorrect(false)
    setShowFalse(false)
  }

  function onDragEnd(result: any) {
    const {destination, source, draggableId} = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index  
    ) {
      return
    }

    const row = data.row
    const newTaskIds = [...row.order] // Array.from(row.order)
    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId)
   
    const newRow = {
      ...row,
      order: newTaskIds
    }

    const newData = {
      ...data,
      row: newRow
    }

    setData(newData)
}

  return (
    <div className="container">
        <Task/>
        <>Hint: sentence is 'hey, how are you doing?'</>
        <DragDropContext
          onDragEnd={onDragEnd}
        >
          <WordList data={data} giveInput={(input: any) => setInput(input)}/>
        </DragDropContext>
        {showCorrect ? <div className="correct">You are Correct!!!</div> : <></>}
        {showFalse ? <div className="false">You are Wrong!!!</div> : <></>}
        <Submit verify={() => sentenceVerifier()} reset={() => reset()}/>
    </div>
  );
}

export default Container;
