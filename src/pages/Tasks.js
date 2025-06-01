import React, { useState, useEffect } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
// import FilterBar from '../components/FilterBar'; // optional

export default function Tasks() {
  const [tasks, setTasks]=useState(()=>{
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks): [];
  })

  const addTask=(taskText)=>{
    const newTask={
      id:Date.now(),
      text: taskText,
      isCompleted: false,
    };
    setTasks([newTask, ...tasks]);
  }

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📝 Task Manager</h2>

      {/* Input field to add new task */}
      <TaskInput onAddTask={addTask} />

      {/* Filter buttons - optional */}
      {/* <FilterBar /> */}

      {/* Task list */}
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}
