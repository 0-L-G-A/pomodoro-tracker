import React, { useState } from "react";
import Task from './task';
import TaskInput from './taskInput';


const ToDoList = ({changeChargersAmount}) => {
    const [tasks, setTasks] = useState([
        {id: 0, title: 'Create app', done: true },
        {id: 1, title: 'Walking', done: false },
    ]);

    const drillState = (setChargersAmount) => {
        changeChargersAmount(setChargersAmount)
    }

    const addTask = task => {
        const newTasks = [...tasks];
        newTasks.push({
            id: tasks.length !== 0 ? tasks.length : 0,
            title: task,
            done: false
        });
        setTasks(newTasks);
            
    }

    const doneTask = id => {
        const newTasks = [...tasks];
        const index = newTasks.map(task => task.id).indexOf(id);
        newTasks[index].done = !newTasks[index].done ;
        setTasks(newTasks);
    }

    const deleteTask = id => {
        setTasks(tasks.filter(item => item.id !== id));
    }

        let activeTasks = tasks.filter(task => !task.done);

        return(
            <div className="toDoList">
                <h1 className="topTD">Active tasks: {activeTasks.length}</h1>
                {tasks.sort((a,b) => a.done - b.done).map(task => (
                    <Task
                        drillChAm={drillState}
                        doneTask={() => doneTask(task.id)}
                        deleteTask={() => deleteTask(task.id)}
                        task={task}
                        key={task.id}
                    ></Task>
                ))}
                <TaskInput addTask={addTask}></TaskInput>
            </div>
        );
}
  
  
  export default ToDoList;