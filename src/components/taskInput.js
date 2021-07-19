import React, { useState } from 'react';

const TaskInput = (props) => {

  const [input, setInput] = useState('');

  const addTask = () => {
    if (input) {
      props.addTask(input);
      setInput('');
    }
  };

  const handleEnter = event => {
    if (event.key === 'Enter') addTask();
  };

  const inputChange = event => {
    setInput(event.target.value);
  };

    return (
      <div className="task-input">
        <input
          onKeyPress={handleEnter}
          onChange={inputChange}
          value={input}
        ></input>
        <button onClick={addTask}>ADD</button>
      </div>
    );
  }

export default TaskInput;
