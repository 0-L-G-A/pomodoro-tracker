import React, { useState } from 'react';

const Task = ({ task, deleteTask, doneTask, drillChAm}) => {
  const [isDone, setisDone] = useState(task.done);
  let chargersAmount;

  const toggleDone = () => { 
    if(isDone)return;
    doneTask();
    if(!isDone){
      do{
        chargersAmount = prompt("Evaluate how did you feel (from 1 to 10)?");
      }while(chargersAmount == null || chargersAmount == "" );
    }
    setisDone(!isDone);
    drillChAm(chargersAmount);
  }




  // const deleteTask = () => {
  //   props.deleteTask()
  //   console.log("child deleteTask")
  // }

  return (
    <div className={`${'task' + (isDone ? ' task-done' : '')}`}>
      <div className="action-btn">
        <div onClick={toggleDone}>{!isDone ? '🟢' : '🔴'}</div>
        <p>{task.title}</p>
       </div>
      <div className="del-btn" onClick={deleteTask}>🗑</div>
    </div>
    
  );
};

export default Task;