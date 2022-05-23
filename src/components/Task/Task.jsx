import React from "react";
import styles from "./task.module.css";
import Counter from '../Counter/Counter'
import remove from '../../assets/remove.svg'

const Task = ({ todo, handleStatus }) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
     
      <input
        type="checkbox"
        data-cy="task-checkbox"
        onChange={() => handleStatus(todo.id)}
      />
      <div data-cy="task-text"> {todo}</div>
      Counter here
      <Counter todo={todo}/>
      <button
        data-cy="task-remove-button">
       <img src={remove}/>
      </button>
    </li>
  );
};

export default Task;
