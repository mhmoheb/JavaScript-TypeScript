import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./Components/DeleteTodo";
import AddTodoTask from "./Components/AddTodo";
import { ITodo } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
   const [todoList, setTodoList] = useState<ITodo[]>([]);
  //console.log(todoList);

  // const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  //   if (event.target.name === "task") {
  //     setTask(event.target.value);
      
  //   }
  // };

  const addTask = () => {
    
    const newTask = { taskName: task };
    
    //console.log(newTask);
    setTodoList([...todoList, newTask]);
    
    console.log(todoList);
    
    
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <AddTodoTask    task={task}  addTask={addTask}/>
      <div className="todoList">
        {todoList.map((task: ITodo, key: number) => {
          return <TodoTask key={key} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default App;