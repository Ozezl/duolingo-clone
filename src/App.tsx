import React from 'react';
import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="body-outer-wrapper">
        <Header/>
        <Container/>
      </div>
    </div>
  );
}

export default App;
