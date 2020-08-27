import React from 'react';
import './Word.css';

function Word(props: { word: React.ReactNode; }) {
  return (
    <span className="word">
        {props.word}
    </span>
  );
}

export default Word;
