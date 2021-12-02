import React,{ChangeEvent} from "react";
import { ITodo } from "../Interfaces";

interface Props {
  task:string;
  addTask(taskNameToAdd: string):void;
  //handleChange(event:ChangeEvent<HTMLInputElement>):Event;
}


const AddTodoTask = ({ task, addTask}: Props) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
     task = event.target.value ;
     console.log(task);
    
  };
  
  return (
    <div className="header">
      <div className="inputContainer">
        <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
        
      </div>
      <button
        onClick={() => {
          addTask(task);
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodoTask;



