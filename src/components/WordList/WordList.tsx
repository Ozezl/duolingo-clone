import React, { SetStateAction } from 'react'
import { useEffect, useState } from 'react'
import './WordList.css'
import { Droppable } from 'react-beautiful-dnd'
import Word from '../Word/Word'

function WordList(props: any) {
  let { words, row } = props.data
  let [ sentence, setSentence ] = useState(['placeholder'])

  useEffect(() => {
    const sentenceArr = []
    let wordsArr: any = Object.values(words)

    for (let i = 0; i < row.order.length; i++) {
      for (let j = 0; j < row.order.length; j++) {
        if (row.order[i] === wordsArr[j].id) {
          sentenceArr.push(wordsArr[j].content)
        }
      }
    }

    setSentence(sentenceArr)
    props.giveInput(sentenceArr.join(' '))
  }, [row])

  return (
    <Droppable droppableId={row.id} direction="horizontal">
      {(provided: any) => (
          <div 
            className="wordList"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {row.order.map((item: any, index: any) => 
              <Word 
                key={`${item}`}
                word={words[item]}
                index={index}
              />
            )}
            {provided.placeholder}
          </div>
        )
      }
    </Droppable>
  );
}

export default WordList;
