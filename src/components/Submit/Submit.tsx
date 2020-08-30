import React from 'react';
import './Submit.css';

function Submit(props: any) {
  function submitHandler() {
    props.verify()
  }

  return (
    <div className="submit">
      <button onClick={() => props.reset()}>&#x21bb; Reset</button>
      <button onClick={() => submitHandler()}>Submit the answer</button>
    </div>
  );
}

export default Submit;
