import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const Todo = () => {
  const todo = useSelector((state) => state.todo);
  return (
    <div>
      <ul>
        {todo.map((el) => {
          return <TodoItem text={el.text} key={el.id} element={el}/>;
        })}
      </ul>
    </div>
  );
};

export default Todo;

