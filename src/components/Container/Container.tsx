import React from 'react';
import './Container.css';
import WordList from '../WordList/WordList';
import Submit from '../Submit/Submit';
import Task from '../Task/TaskDescription';

function Container() {
  return (
    <div className="container">
        <Task/>
        <WordList/>
        <Submit/>
    </div>
  );
}

export default Container;
