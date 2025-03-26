import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todo.todos); // ✅ Corrected useSelector
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}  
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button> 
            {/* ✅ Fixed onClick & argument */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
