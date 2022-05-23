import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import { v4 as uuidv4 } from 'uuid';
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todoList, setTodoList] = useState([]);
const [counter,setCounter]= useState(0);
  const handleAdd = (value) => {
    const payload = {
      id:uuidv4(),
      text:value,
      done:false,
      count:1
    }
   let c=0
   todoList.map((e)=>((e.text==payload.text)?c++: ""))
   if(c==0)
   {
     setTodoList([...todoList,payload])
     setCounter(counter+1);
   }
  }
  const handleStatus = (id)=> {
    setTodoList(
      todoList.map((e)=> (e.id!==id))
    )
  }
   
  // const Delete = (value) => {
  //   setTodos(todos.filter((todo) => todo !== value));
  // };
  return (
    <div data-cy="task-app" className={styles.taskApp}>
     
      {/* Header */}
      <TaskHeader/>
      {/* Add Task */}
      <AddTask  handleAdd={handleAdd}/>
      
      {/* Tasks */}
      <Task todoList={todoList} handleStatus={handleStatus}/>
      {/* <Task>
      
      <ul>
          {todos.map((todo) => (
            <Task />
          ))}
        </ul>
     
      </Task> */}
    </div>
  );
};

export default TaskApp;
