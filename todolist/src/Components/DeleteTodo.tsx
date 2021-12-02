import React from "react";
import { ITodo } from "../Interfaces";

interface Props {
  task: ITodo;
  deleteTask(taskNameToDelete: string): void;
}

const TodoTask  = ({ task, deleteTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        
      </div>
      <button
        onClick={() => {
          deleteTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask ;