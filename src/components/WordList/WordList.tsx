import React from 'react';
import './WordList.css';
import Word from '../Word/Word';

function WordList() {
  return (
    <div className="wordList">
        <Word word="hey"/>
        <Word word=","/>
        <Word word="how"/>
        <Word word="are"/>
        <Word word="you"/>
        <Word word="?"/>
    </div>
  );
}

export default WordList;
